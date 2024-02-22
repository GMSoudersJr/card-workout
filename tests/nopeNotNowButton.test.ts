import { expect, test, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	test.setTimeout(100 * 1_000);

	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
	await page.getByRole('button', { name: 'Start' }).click();

	// End of before each
});

test.describe('a user has clicked the start button', () => {
	test('"NOPE NOT NOW" button expected to be visible and enabled', async ({ page }) => {
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		await expect(nopeNotNowButton).toBeVisible();
		await expect(nopeNotNowButton).toBeEnabled();
	});

	test('click NNN button; expect reamining card count to stay the same', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		const numberOfCardsLeftTextElement = page.locator('.cards-left-number');
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		await nopeNotNowButton.click({ clickCount: 100 });
		await expect(numberOfCardsLeftTextElement).toHaveText('51');
	});

	test('click NNN button; expect visible mini card tick count to stay the same', async ({ page }) => {
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

	test('has expected message when the same card is plucked', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		const sameCardMessage = page.locator('#plucked-same-card-message');
		const allMiniTicks = await page.locator('.mini-card-tick').all();

		async function findIndexOfPluckedCard(allMiniTicks: Locator[]) {
			let result = -1;
			for (let i = 0; i < allMiniTicks.length; i++) {
				const tickClass = await allMiniTicks[i].getAttribute('class');
				if (tickClass && tickClass.includes('plucked')) {
					result = i;
					return result;
				}
			}

		};

	       // click the "Nope Not Now" button 100 times.
		let iterator = 0;
		while ( iterator < 150 ) {
			const currentPluckedCardIndex = await findIndexOfPluckedCard(allMiniTicks);
			await nopeNotNowButton.click().then(async () => {
				const newlyPluckedCardIndex = await findIndexOfPluckedCard(allMiniTicks);
				if ( currentPluckedCardIndex === newlyPluckedCardIndex ) {
					expect(sameCardMessage).toBeVisible();
					expect(sameCardMessage).toHaveCount(1);
				} else {
					expect(sameCardMessage).toBeHidden();
					expect(sameCardMessage).toHaveCount(0);
				}
			}).catch((error) => {
				console.log(error);
			});
			iterator++;
		}
	})

});
