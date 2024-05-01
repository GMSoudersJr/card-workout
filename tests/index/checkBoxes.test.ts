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

	test.describe('back navigate behavior', () => {
		test('same checkbox, same output', async ({ page }) => {
			const primalMovementsCheckboxBeforeNavigation = page.getByLabel(EExerciseCategories.PRIMAL_MOVEMENTS);
			await expect(primalMovementsCheckboxBeforeNavigation).not.toBeChecked();

			await primalMovementsCheckboxBeforeNavigation.check();
			await expect(primalMovementsCheckboxBeforeNavigation).toBeChecked();

			await page.waitForLoadState('domcontentloaded');
			const demoLink = page.getByRole('link', { name: EExerciseNames.BEAR_CRAWLS })
			await demoLink.click();
			await page.waitForLoadState('domcontentloaded');
			const outsideLinkResponse = await page.waitForResponse(async (response) => {
				if ( response.status() === 200 ) return true;
				return false;
			});

			expect(outsideLinkResponse).toBeTruthy();

			await page.goBack({ waitUntil: 'domcontentloaded' });
			await page.waitForLoadState('domcontentloaded');

			const backNavigationResponse = await page.waitForResponse(async (response) => {
				if ( response.status() === 200 ) return true;
				return false;
			});

			expect(backNavigationResponse).toBeTruthy();

			const summary = page.locator('summary');
			await summary.click();

			const primalMovementsCheckboxAfterNavigation = page.getByLabel(EExerciseCategories.PRIMAL_MOVEMENTS);
			const checkedBoxes = await page.getByRole('checkbox', { checked: true }).all();
			expect(checkedBoxes.length).toEqual(1);
			await expect(primalMovementsCheckboxAfterNavigation).toBeChecked();

			expect((await page.getByRole('list').allInnerTexts()).length).toEqual(1);
		});

	});

});
