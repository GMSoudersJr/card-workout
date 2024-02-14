import { expect, test } from '@playwright/test';
import { ESuit } from '../src/enums/suit';
import { EExercises } from '../src/enums/exercises';

const [clubs, diamonds, hearts, spades] = Object.keys(ESuit);
const [ exercise1, exercise2, exercise3, exercise4, ...theRestOfTheExercises ] = Object.keys(EExercises);

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

test.describe('a user has selected their exercises', () => {

	test(`"Let's Go" button expected to be visible and enabled`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await expect(letsGoButton).toBeVisible();
		await expect(letsGoButton).toBeEnabled();
		await expect(page.getByTestId('example-workout-listitem')).not.toBeVisible()
	});

	test(`"Let's Go" button navigates to the expected page`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await letsGoButton.click();
		await expect(page.getByRole('heading', {name: 'SUIT YOURSELF', level: 1})).toBeVisible();
	});
});
