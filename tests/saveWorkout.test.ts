import { expect, test } from '@playwright/test';
import { EExerciseNames } from '../src/enums/exerciseNames';
import { ESuit } from '../src/enums/suit';

const [
	exercise1,
	exercise2,
	exercise3,
	exercise4,
] = Object.keys(EExerciseNames);

const [
	clubs,
	diamonds,
	hearts,
	spades,
] = Object.keys(ESuit);

test.describe('persist workouts to local storage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', { name: 'Play' }).click();
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', { name: 'Exercises' }).click();
		await page.waitForLoadState('domcontentloaded');

		const clubsSelect = page.locator(`#${clubs}-exercise-select`);
		const diamondsSelect = page.locator(`#${diamonds}-exercise-select`);
		const heartsSelect = page.locator(`#${hearts}-exercise-select`);
		const spadesSelect = page.locator(`#${spades}-exercise-select`);

		await clubsSelect.selectOption(exercise1);
		await diamondsSelect.selectOption(exercise2);
		await heartsSelect.selectOption(exercise3);
		await spadesSelect.selectOption(exercise4);

		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await letsGoButton.click();
		await page.waitForLoadState('domcontentloaded');
	});

});

