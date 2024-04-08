import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/cards');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('button', { name: 'Start' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('Space', () => {
	test('expect discard', async ({ page }) => {
		const discardedCardsListItemBefore = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemBefore.length).toBe(0);
		await page.keyboard.press('Space');
		await page.waitForLoadState('domcontentloaded');
		const discardedCardsListItemAfter = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemAfter.length).toBe(1);
	});

});

test.describe('Enter', () => {
	test('expect discard', async ({ page }) => {
		const discardedCardsListItemBefore = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemBefore.length).toBe(0);
		await page.keyboard.press('Enter');
		await page.waitForLoadState('domcontentloaded');
		const discardedCardsListItemAfter = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemAfter.length).toBe(1);
	});

});

test.describe('Arrow Keys', () => {
	test('UP expect discard', async ({ page }) => {
		const discardedCardsListItemBefore = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemBefore.length).toBe(0);
		await page.keyboard.press('ArrowUp');
		await page.waitForLoadState('domcontentloaded');
		const discardedCardsListItemAfter = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemAfter.length).toBe(1);
	});

	test('DOWN expect no discard', async ({ page }) => {
		const discardedCardsListItemBefore = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemBefore.length).toBe(0);
		await page.keyboard.press('ArrowDown');
		await page.waitForLoadState('domcontentloaded');
		const discardedCardsListItemAfter = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemAfter.length).toBe(0);
	});

	test('LEFT expect no discard', async ({ page }) => {
		const discardedCardsListItemBefore = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemBefore.length).toBe(0);
		await page.keyboard.press('ArrowLeft');
		await page.waitForLoadState('domcontentloaded');
		const discardedCardsListItemAfter = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemAfter.length).toBe(0);
	});

	test('RIGHT expect discard', async ({ page }) => {
		const discardedCardsListItemBefore = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemBefore.length).toBe(0);
		await page.keyboard.press('ArrowRight');
		await page.waitForLoadState('domcontentloaded');
		const discardedCardsListItemAfter = await page.getByTestId('discarded-card-listitem').all();
		expect(discardedCardsListItemAfter.length).toBe(1);
	});

});
