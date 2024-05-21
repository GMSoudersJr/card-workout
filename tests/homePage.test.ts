import { expect, test } from '@playwright/test';
import { heading, subHeading, links } from '../src/lib/strings/forHomepage';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
});

test('home page has expected headings', async ({ page }) => {
	await expect(page.getByRole('heading', { name: heading, level: 1 })).toBeVisible();
	await expect(page.getByRole('heading', { name: subHeading, level: 4 })).toBeVisible();
});

test.describe('hompage links are active and enabled', () => {
	test('About', async ({ page }) => {
		const aboutLink = page.getByRole('link', { name: links.faq.toUpperCase() });
		await expect(aboutLink).toBeVisible();
		await expect(aboutLink).toBeEnabled();
	});

	test('Exercises', async ({ page }) => {
		const exercisesLink = page.getByRole('link', { name: links.exercises.toUpperCase() });
		await expect(exercisesLink).toBeVisible();
		await expect(exercisesLink).toBeEnabled();
	});
});
