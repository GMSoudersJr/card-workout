import { expect, test } from '@playwright/test';
import { EExerciseCategories } from '../../src/enums/exerciseCategories';
import { EExerciseNames } from '../../src/enums/exerciseNames';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'INDEX' }).click();
	await page.waitForLoadState('domcontentloaded');
	const summary = page.locator('summary');
	await summary.click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('checkboxes', () => {
	test('expect greater than 1', async ({ page }) => {
		const checkboxes = await page.getByRole('checkbox').all();
		expect(checkboxes.length).toBeGreaterThan(1);
	});

	test('expect reduced exercise list', async ({ page }) => {
		const primalMovementCheckbox = page.getByLabel(EExerciseCategories.PRIMAL_MOVEMENTS);
		await expect(primalMovementCheckbox).not.toBeChecked();
		await primalMovementCheckbox.check();
		await expect(primalMovementCheckbox).toBeChecked();
		const checkedExerciseListLength = (await page.getByRole('list').allInnerTexts()).length;
		expect(checkedExerciseListLength).toBeLessThan(Object.values(EExerciseNames).length);
	});

	test.describe('return navigation behavior', () => {
		test('from in-app, expect same output', async ({ page }) => {
			const yogaCheckboxBeforeNavigation = page.getByLabel(EExerciseCategories.YOGA);
			await expect(yogaCheckboxBeforeNavigation).not.toBeChecked();

			await yogaCheckboxBeforeNavigation.check();
			await expect(yogaCheckboxBeforeNavigation).toBeChecked();

			await page.waitForLoadState('domcontentloaded');
			const yogaIndexExerciseCardsBeforeNavigation = await page.getByRole('list').allInnerTexts();
			await page.goBack({ waitUntil: 'domcontentloaded' });

			await page.getByRole('link', { name: 'INDEX' }).click();
			await page.waitForLoadState('domcontentloaded');

			const yogaCheckboxAfterNavigation = page.getByLabel(EExerciseCategories.YOGA);
			await expect(yogaCheckboxAfterNavigation).toBeChecked();
			const yogaIndexExerciseCardsAfterNavigation = await page.getByRole('list').allInnerTexts();

			expect(yogaIndexExerciseCardsAfterNavigation).toEqual(yogaIndexExerciseCardsBeforeNavigation);
		});
	});
});
