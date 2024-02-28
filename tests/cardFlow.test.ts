import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'Play' }).click();
	await page.getByRole('link', { name: 'Cards' }).click();
	await page.getByRole('button', { name: 'Start' }).click();
});
test.describe('a user has clicked the Start button', () => {
	test(`the first card is expected to be visible`, async ({ page }) => {
		const theFirstCard = page.getByTestId('playing-card');
		await expect(theFirstCard).toBeVisible();
	});

	test('a discarded card goes to its expected place', async ({ page }) => {
		await page.getByTestId('playing-card').click();
		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(1);
		await expect(page.getByTestId('discarded-card-listitem')
			     .getByTestId('playing-card')).toBeDisabled();
	});

	test('after clicking the first card, only one card is expected to be enabled', async ({ page }) => {
		await page.getByTestId('playing-card').click();
		const currentCard =
			page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
		await expect(currentCard).toBeEnabled();
		await expect(currentCard).toHaveCount(1);
	});

	test.describe('continues to click the current card', () => {

		test('expect exercise information to be hidden on each card', async ({ page }) => {
			test.setTimeout(51 * 1_000);
			const firstCard = page.getByTestId('playing-card');
			const firstCardExerciseInfo = firstCard.locator('.card-exercise-info');
			await expect(firstCardExerciseInfo).toBeHidden().then(async () => {
				await firstCard.click();
			}).catch(( error ) => {
				console.log(error);
			});
			let discardedCardsListItem = page.getByTestId('discarded-card-listitem');
			const currentCard =
				page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
			while (await discardedCardsListItem.count() < 52) {
				await expect(currentCard).toHaveCount(1).then(async () => {
					const currentCardExerciseInfo = currentCard.locator('.card-exercise-info');
					await expect(currentCardExerciseInfo).toBeHidden().then(async () => {
						await currentCard.click();
					}).catch(( error ) => {
						console.log(error);
					});
				}).catch(( error ) => {
					console.log(error);
				});
			}
		});

		test('all cards have been clicked, the page has expected shuffle button', async ({ page }) => {
			test.setTimeout(51 * 1000);
			await page.getByTestId('playing-card').click();
			let discardedCardsListItem = page.getByTestId('discarded-card-listitem');
			const currentCard =
				page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
			while (await discardedCardsListItem.count() < 52) {
				await expect(currentCard).toHaveCount(1).then(async () => {
					await currentCard.click();
				}).catch(( error ) => {
					console.log(error);
				});
			}
			await expect(discardedCardsListItem).toHaveCount(52);
			await expect(page.getByRole('button', { name: 'Shuffle' })).toBeVisible();
		});
	});
});
