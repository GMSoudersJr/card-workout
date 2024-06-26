import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	test.setTimeout(51 * 1000);
	await page.goto('/cards');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('button', { name: 'Start' }).click();
	const theFirstCard = page.locator('.playing-card');
	await theFirstCard.click();
	const discardedCardsListItem = page.locator('.discarded-cards-listitem');
	const currentCard = page.locator('.playing-card').locator(':scope:not(:disabled)').nth(1);
	while ((await discardedCardsListItem.count()) < 52) {
		await expect(currentCard)
			.toHaveCount(1)
			.then(async () => {
				await currentCard.click();
			})
			.catch((error) => {
				console.log(error);
			});
	}
});

test.describe('a user has gone through the deck', () => {
	test('the shuffle button is expected to be visible and enabled', async ({ page }) => {
		await expect(page.getByRole('button', { name: 'Shuffle' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Shuffle' })).toBeEnabled();
	});
	test('the discarded pile is expected have 52 cards', async ({ page }) => {
		const discardedCardsListItem = page.locator('.discarded-cards-listitem');
		await expect(discardedCardsListItem).toHaveCount(52);
	});
});
test.describe('info widgets', () => {
	test('the deck widget is expected to show 0 remaining cards', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		await expect(page.locator('#cards-remaining')).toBeVisible();
		await expect(page.getByRole('heading', { name: '0', level: 3 })).toBeVisible();
	});

	test('the deck widget is expected to not have any visible ticks', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		const cardTicks = await page.locator('#card-tick-container').locator('div').all();
		let iterator = 0;
		while (iterator < cardTicks.length) {
			await expect(cardTicks[iterator]).not.toBeVisible();
			iterator++;
		}
	});

	test('the rank widget is expected to have 0 for each rank', async ({ page }) => {
		await page.getByLabel('Rank', { exact: true }).click();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		const rankListItemsCountStrings = await page
			.locator('.rank-listitem')
			.locator('p.count')
			.allInnerTexts();
		rankListItemsCountStrings.forEach((count) => {
			expect(count).toBe('0');
		});
	});

	test('the suit widget is expected to have 0 for each suit', async ({ page }) => {
		await page.getByLabel('Suit', { exact: true }).click();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		const suitListItemsCountStrings = await page
			.locator('.suit-info-box')
			.locator('p.count')
			.allInnerTexts();
		suitListItemsCountStrings.forEach((count) => {
			expect(count).toBe('0');
		});
	});
});
