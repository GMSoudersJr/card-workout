import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
	await page.getByRole('button', { name: 'Start' }).click();
});

test('discarded card goes to discard pile', async ({ page }) => {
	await page.getByTestId('playing-card').click();
	await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
	await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(1);
	await expect(page.getByTestId('discarded-card-listitem')
		     .getByTestId('playing-card')).toBeDisabled();
});

test('only one card is enabled', async ({ page }) => {
	await page.getByTestId('playing-card').click();
	const currentCard =
		page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
	await expect(currentCard).toBeEnabled();
	await expect(currentCard).toHaveCount(1);
});

test('can click through all the cards', async ({ page }) => {
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
