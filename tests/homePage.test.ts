import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('home page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'SUIT YOURSELF' })).toBeVisible();
});

test.describe('hompage links are active and enabled', () => {
	test('home page has link for about', async ({ page }) => {
		const aboutLink = page.getByRole('link', { name: 'About' });
		await expect(aboutLink).toBeVisible();
		await expect(aboutLink).toBeEnabled();
	});

	test('home page has link for cards', async ({ page }) => {
		const cardsLink = page.getByRole('link', { name: 'Cards' });
		await expect(cardsLink).toBeVisible();
		await expect(cardsLink).toBeEnabled();
	});

	test('home page has link for exercises', async ({ page }) => {
		const exercisesLink = page.getByRole('link', { name: 'Exercises' });
		await expect(exercisesLink).toBeVisible();
		await expect(exercisesLink).toBeEnabled();
	});

});
