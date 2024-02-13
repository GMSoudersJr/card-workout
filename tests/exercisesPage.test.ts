import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Exercises' }).click();
});

test('exercise link goes to expected page', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Exercises' })).toBeVisible();
});

test('exercise page has expected considerations list', async ({ page }) => {
	await expect(page.getByTestId('exercise-consideration-list')).toBeVisible();
});

test('exercise page has expected 4 select elements', async ({ page }) => {
	await expect(page.getByRole('combobox')).toHaveCount(4);
});

test('exercise page has expected example workout list', async ({ page }) => {
	await expect(page.getByTestId('example-workout-list')).toBeVisible();
});
