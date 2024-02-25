import { expect, test } from '@playwright/test';
import { EExerciseNames } from '../src/enums/exerciseNames';

const [
	exercise1,
	exercise2,
	exercise3,
	exercise4,
] = Object.keys(EExerciseNames);

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Exercises' }).click();
	const [
		clubsExerciseSelectLocation,
		diamondsExerciseSelectLocation,
		heartsExerciseSelectLocation,
		spadesExerciseSelectLocation,
	] = await page.getByRole('combobox').all();

	await clubsExerciseSelectLocation.selectOption(exercise1);
	await diamondsExerciseSelectLocation.selectOption(exercise2);
	await heartsExerciseSelectLocation.selectOption(exercise3);
	await spadesExerciseSelectLocation.selectOption(exercise4);
});

test.describe('a user has selected an exercise for each suit', () => {

	test('Example Workout List expected to NOT be visible', async ({ page }) => {
		const exampleWorkoutListItem = page.getByTestId('example-workout-listitem');
		await expect(exampleWorkoutListItem).not.toBeVisible();
	});

	test(`"Let's Go" button expected to be visible and enabled`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await expect(letsGoButton).toBeVisible();
		await expect(letsGoButton).toBeEnabled();
	});

	test(`A reset exercises button expected to be visible and enabled`, async ({ page }) => {
		const resetButton = page.getByRole('button', { name: "Reset" });
		await expect(resetButton).toBeVisible();
		await expect(resetButton).toBeEnabled();
	});
	
	test('reset button has expected functionality', async ({ page }) => {
		const resetButton = page.getByRole('button', { name: "Reset" });
		await resetButton.click();
		const [
			clubsExerciseSelectLocation,
			diamondsExerciseSelectLocation,
			heartsExerciseSelectLocation,
			spadesExerciseSelectLocation,
		] = await page.getByRole('combobox').all();
		await expect(clubsExerciseSelectLocation).toHaveValue('');
		await expect(diamondsExerciseSelectLocation).toHaveValue('');
		await expect(heartsExerciseSelectLocation).toHaveValue('');
		await expect(spadesExerciseSelectLocation).toHaveValue('');


	});

	test(`"Let's Go" button navigates to the expected page`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await letsGoButton.click();
		await expect(page.getByRole('heading', {name: 'SUIT YOURSELF', level: 1})).toBeVisible();
	});
});
