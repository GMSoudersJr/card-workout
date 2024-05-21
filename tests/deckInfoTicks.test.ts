import { expect, test, type Page, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/cards');
	await page.waitForLoadState('domcontentloaded');
});

const numberOfCardsInDeck = 52;
test.describe('check card tick', () => {
	test('all ticks have same color before start', async ({ page }) => {
		const deckRadioButton = page.getByRole('radio', { name: 'Deck' });
		await expect(deckRadioButton).toBeChecked();
		const allMiniCardTicks = await page.locator('.mini-card-tick').all();
		expect(allMiniCardTicks).toHaveLength(numberOfCardsInDeck);
		for (let i = 0; i < numberOfCardsInDeck; i++) {
			await expect(allMiniCardTicks[i]).toHaveClass(/in-deck/);
		}
	});
	test('after start, one card has plucked class', async ({ page }) => {
		await page.getByRole('button', { name: 'Start' }).click();
		const deckRadioLabel = page.getByLabel('Deck', { exact: true });
		await deckRadioLabel.check();
		const deckRadioButton = page.getByRole('radio', { name: 'Deck' });
		await expect(deckRadioButton).toBeChecked();
		const allPluckedMiniTicks = await page.locator('.plucked').all();
		expect(allPluckedMiniTicks).toHaveLength(1);
	});
});
