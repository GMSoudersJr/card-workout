import { expect, test } from '@playwright/test';
import { exerciseEmoji, homeEmoji } from '../../src/lib/emojis';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'INDEX' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('Index page elements', () => {
	test('expect correct heading', async ({ page }) => {
		await expect(page.getByRole('heading', {name: 'INDEX', level: 1})).toBeVisible();
	});

	test('expect search input', async ({ page }) => {
		await expect(page.locator('input[type=search]')).toBeVisible();
	});

	test('expect options visible', async ({ page }) => {
		const details = page.locator('#details-options');
		await expect(details).toBeVisible();
	});

	test('expect options details hidden', async ({ page }) => {
		const detailsSection = page.locator('#details-options > .section-container');
		await expect(detailsSection).toBeHidden();
	});

	test('expect options details visible', async ({ page }) => {
		const summary = page.locator('summary');
		await summary.click();
		page.waitForLoadState('domcontentloaded');
		const detailsSection = page.locator('#details-options > .section-container');
		await expect(detailsSection).toBeVisible();
	});

	test('expect exercise list greater than 1', async ({ page }) => {
		const indexCards = await page.getByRole('list').allInnerTexts();
		expect(indexCards.length).toBeGreaterThanOrEqual(1);
	});

	test.describe('http nav links', () => {
		test('expect home', async ({ page }) => {
			await expect(page.getByRole('link', { name: homeEmoji })).toBeVisible();
			await expect(page.getByRole('link', { name: homeEmoji })).toBeEnabled();
		});

		test('expect exercises', async ({ page }) => {
			await expect(page.getByRole('link', { name: exerciseEmoji })).toBeVisible();
			await expect(page.getByRole('link', { name: exerciseEmoji })).toBeEnabled();
		});

	});

});
