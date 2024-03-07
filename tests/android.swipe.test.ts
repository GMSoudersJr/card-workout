import {
	expect,
	selectors,
	test,
	_android as android,
	type Page,
	type AndroidDevice,
	type BrowserContext,
	type Locator,
} from '@playwright/test';


async function mimicSwipe(
	swipeDirection: 'up' | 'down' | 'left' | 'right',
	page: Page,
	position: {x: number, y: number}
) {
	if (position === undefined) return;
	await page.mouse.move(position.x, position.y);
	await page.mouse.down();
	switch (swipeDirection) {
		case 'up':
			await page.mouse.move(position.x, position.y - 100);
			break;
		case 'down':
			await page.mouse.move(position.x, position.y + 100);
			break;
		case 'left':
			await page.mouse.move(position.x - 50, position.y);
			break;
		case 'right':
			await page.mouse.move(position.x + 50, position.y);
			break;
	};
	await page.mouse.up();
};

async function getCenterPositionOf(locator: Locator):
	Promise<{x: number, y: number} | undefined> {
	const boundingBox = await locator.boundingBox();
	if (boundingBox === null) return;
	const result = {
		x: boundingBox.x + boundingBox.width / 2,
		y: boundingBox.y + boundingBox.height / 2
	};

	return result;
};

test.describe('swipe a card', () => {
	test('expect up to discard', async () => {
		const [ device ] = await android.devices();
		console.log(`Model: ${device.model()}`);
		console.log(`Serial: ${device.serial()}`);
		await device.shell('am force-stop com.android.chrome');
		const context = await device.launchBrowser({ baseURL: 'http://192.168.1.101:4173/' });
		const page = await context.newPage();
		await page.goto('/');
		const cardsButton = page.getByRole('link', { name: 'CARDS' });
		await expect(cardsButton).toBeVisible();
		await expect(cardsButton).toBeEnabled();
		await cardsButton.click();
		await page.waitForLoadState('domcontentloaded');
		const startButton = page.getByRole('button', { name: 'START' });
		await expect(startButton).toBeVisible();
		await expect(startButton).toBeEnabled();
		await startButton.click();
		const theFirstCard = page.getByTestId('playing-card');
		await expect(theFirstCard).toBeVisible();
		await expect(theFirstCard).toBeEnabled();
		const centerOfTheFirstCard = await getCenterPositionOf(theFirstCard);
		if ( centerOfTheFirstCard === undefined || centerOfTheFirstCard === null ) return;
		await device.input.swipe(centerOfTheFirstCard, [{x: 0, y: -50}], 100);
		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(1);
		await expect(page.getByTestId('discarded-card-listitem')
			     .getByTestId('playing-card')).toBeDisabled();


		await page.close();
		await context.close();
		await device.shell('am force-stop com.android.chrome');
	});
});
