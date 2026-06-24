import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/faq');
	await page.waitForLoadState('domcontentloaded');
});

test.describe('FAQ new entries are visible', () => {
	test('what is a card deck workout heading is visible', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: 'WHAT IS A CARD DECK WORKOUT?', level: 3 })
		).toBeVisible();
	});

	test('do i need any equipment heading is visible', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: 'DO I NEED ANY EQUIPMENT?', level: 3 })
		).toBeVisible();
	});
});
