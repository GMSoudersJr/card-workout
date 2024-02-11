import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('home page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Suits You Best' })).toBeVisible();
});

test('home page has link for cards', async ({ page }) => {
	await expect(page.getByRole('link', {name: 'Cards'})).toBeVisible();
});

test('home page has link for exercises', async ({ page }) => {
	await expect(page.getByRole('link', {name: 'Exercises'})).toBeVisible();
});

