import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
});

test('card link goes to correct page', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Cards' })).toBeVisible();
});

test('card page has start button', async ({ page }) => {
	await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
});

test('card page has deck radio button', async ({ page }) => {
	await expect(page.getByLabel('Deck', { exact: true })).toBeVisible();
});

test('card page has rank radio button', async ({ page }) => {
	await expect(page.getByLabel('Rank', { exact: true })).toBeVisible();
});

test('card page has suit radio button', async ({ page }) => {
	await expect(page.getByLabel('Suit', { exact: true })).toBeVisible();
});

