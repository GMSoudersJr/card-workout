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
	const letsGoButton = page.getByRole('button', { name: "Let's Go" });
	await letsGoButton.click();

});

test.describe('expected page visiblities', () => {

	test('has expected heading', async ({ page }) => {
		await expect(page.getByRole('heading', {name: 'SUIT YOURSELF', level: 1})).toBeVisible();
	});

	test('has expected "HOME" and "EXERCISES" links', async ({ page }) => {
		const homeLink = page.getByRole('link', { name: 'HOME' });
		const exercisesLink = page.getByRole('link', { name: 'EXERCISES' });
		await expect(homeLink).toBeVisible();
		await expect(homeLink).toBeEnabled();
		await expect(exercisesLink).toBeVisible();
		await expect(exercisesLink).toBeEnabled();
	});

	test('has expected 4 radio buttons', async ({ page }) => {
		await expect(page.getByLabel('Deck', { exact: true })).toBeVisible();
		await expect(page.getByLabel('Rank', { exact: true })).toBeVisible();
		await expect(page.getByLabel('Suit', { exact: true })).toBeVisible();
		await expect(page.getByLabel('Reps', { exact: true })).toBeVisible();
	});

});

test('fist card has reps and exercise name on it', async ({ page }) => {
	const startButton = page.getByRole('button', { name: "START" });
	await expect(startButton).toBeVisible();
	await expect(startButton).toBeEnabled();
	await startButton.click();
	const firstCard = page.getByTestId('playing-card');
	await expect(firstCard).toBeVisible();
	await expect(firstCard).toBeEnabled();
	const firstCardExerciseInfo = firstCard.locator('.card-exercise-info');
	await expect(firstCardExerciseInfo).toBeVisible();
});

