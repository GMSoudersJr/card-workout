import { expect, test, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	test.setTimeout(3 * 60 * 1_000);

	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
	await page.getByRole('button', { name: 'Start' }).click();

	// End of before each
});

test.describe('user clicked start button', () => {
	test.fixme('click NNN button; expect reamining card count to stay same', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		const numberOfCardsLeftTextElement = page.locator('.cards-left-number');
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		await nopeNotNowButton.click({ clickCount: 100 });
		await expect(numberOfCardsLeftTextElement).toHaveText('51');
	});

	test.fixme('click NNN button; expect visible mini card tick count to stay the same', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		const inDeckCardTicks = await page.locator('.in-deck').all();
		const pluckedCardTicks = await page.locator('.plucked').all();
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		let iterator = 0;
		const numberOfClicks = 100;
		while ( iterator < numberOfClicks ) {
			await nopeNotNowButton.click().then(() => {
				expect(inDeckCardTicks).toHaveLength(51);
				expect(pluckedCardTicks).toHaveLength(1);
			});
			iterator++;
		};
	});

	test.fixme('has expected message when the same card is plucked', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		const sameCardMessage = page.locator('#plucked-same-card-message');
		const allMiniTicks = await page.locator('.mini-card-tick').all();

		async function findIndexOfPluckedCard(allMiniTicks: Locator[]) {
			let result = -1;
			for (let i = 0; i < allMiniTicks.length; i++) {
				const tickClass = await allMiniTicks[i].getAttribute('class');
				if (tickClass === undefined || tickClass === null) return;
				if (tickClass.includes('plucked')) {
					result = i;
					return result;
				}
			}

		};

	       // click the "Nope Not Now" button 100 times.
		let iterator = 0;
		while ( iterator < 100 ) {
			const currentPluckedCardIndex = await findIndexOfPluckedCard(allMiniTicks);
			await nopeNotNowButton.click().then(async () => {
				const newlyPluckedCardIndex = await findIndexOfPluckedCard(allMiniTicks);
				if ( currentPluckedCardIndex === newlyPluckedCardIndex ) {
					await expect(sameCardMessage).toBeVisible();
					await expect(sameCardMessage).toHaveCount(1);
				} else {
					await expect(sameCardMessage).toBeHidden();
					await expect(sameCardMessage).toHaveCount(0);
				}
			}).catch((error) => {
				console.log(error);
			}).finally(() => {
				iterator++;
			});
		};
	});

});
