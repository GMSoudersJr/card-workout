import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Exercises' }).click();
});

test('exercise link goes to correct page', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Exercises' })).toBeVisible();
});

