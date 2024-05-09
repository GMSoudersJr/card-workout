import { expect, test } from '@playwright/test';
import { cardIndexEmoji, homeEmoji } from '../../src/lib/emojis';
import { workouts } from '../../src/lib/workoutsDB';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'DECKS' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('decks page elements', () => {
	test('expect correct heading', async ({ page }) => {
		await expect(page.getByRole('heading', {name: 'DECKS', level: 1})).toBeVisible();
	});

	test('expect page subheading', async ({ page }) => {
		await expect(page.getByRole('heading', {name: 'quick start workouts', level: 3})).toBeVisible();
	});

	test('expect decks list ', async ({ page }) => {
		const decksList = page.locator('#decks-list');
		await expect(decksList).toBeVisible();
		expect(await decksList.count()).toBeGreaterThan(0);
	});

	test(`expect ${workouts.length} workout decks`, async ({ page }) => {
		 const decksListitems = page.locator('.decks-listitem');
		 await expect(decksListitems).toHaveCount(workouts.length);
	});

	test.describe('http nav links', () => {
		test('expect home', async ({ page }) => {
			await expect(page.getByRole('link', { name: homeEmoji })).toBeVisible();
			await expect(page.getByRole('link', { name: homeEmoji })).toBeEnabled();
		});

		test('expect index', async ({ page }) => {
			await expect(page.getByRole('link', { name: cardIndexEmoji })).toBeVisible();
			await expect(page.getByRole('link', { name: cardIndexEmoji })).toBeEnabled();
		});

	});

});
