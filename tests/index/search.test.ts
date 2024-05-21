import { expect, test } from '@playwright/test';
import { EExerciseNames } from '../../src/enums/exerciseNames';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'INDEX' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('search functionality', () => {
	test('accepts input', async ({ page }) => {
		const searchInput = page.getByLabel('EXERCISE NAME:');
		await searchInput.fill(EExerciseNames.DOWNWARD_DOG_POSES.substring(0, 5));
		await expect(searchInput).not.toBeEmpty();
	});

	test('input reduces exercise list', async ({ page }) => {
		const searchInput = page.getByLabel('EXERCISE NAME:');
		await searchInput.fill(EExerciseNames.NECK_CIRCLES.substring(0, 5));
		await page.waitForLoadState('domcontentloaded');
		const searchedExerciseListLength = (await page.getByRole('list').allInnerTexts()).length;
		expect(searchedExerciseListLength).toEqual(1);
	});
});
