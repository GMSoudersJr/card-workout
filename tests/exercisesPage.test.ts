import { expect, test } from '@playwright/test';
import { ESuit } from '../src/enums/suit';
import { EExerciseNames } from '../src/enums/exerciseNames';

const [
	clubs,
	diamonds,
	hearts,
	spades
] = Object.keys(ESuit);
const [
	exercise1,
	exercise2,
	exercise3,
	exercise4
] = Object.keys(EExerciseNames);

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'Exercises' }).click();
});

test('exercise page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Exercises', level: 1 })).toBeVisible();
});

test.describe('exercise page has correct links', () => {
	test('exercise page has expected link to home page', async ({ page }) => {
		await expect(page.getByRole('link', { name: '🏠' })).toBeVisible();
	});

	test('exercise page has expected link to cards page', async ({ page }) => {
		await expect(page.getByRole('link', { name: '🃏' })).toBeVisible();
	});
});

test('exercise page has expected considerations list', async ({ page }) => {
	await expect(page.getByTestId('exercise-consideration-list')).toBeVisible();
});

test('exercise page has expected 4 select elements', async ({ page }) => {
	await expect(page.getByRole('combobox')).toHaveCount(4);
});

test.describe('exercise page example workout tests', () => {
	test('expect example workout to be visible', async ({ page }) => {
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
	});
	test('expect example workout to have 4 listitems', async ({ page }) => {
		await expect(page.getByTestId('example-workout-listitem')).toHaveCount(4);
	});
});

test.describe('suit exercise selector visibility test', () => {
	test('expect each suit exercise selector to be visible', async ({ page }) => {
		await expect(page.locator(`#${clubs}-exercise-select`)).toBeVisible();
		await expect(page.locator(`#${diamonds}-exercise-select`)).toBeVisible();
		await expect(page.locator(`#${hearts}-exercise-select`)).toBeVisible();
		await expect(page.locator(`#${spades}-exercise-select`)).toBeVisible();
	});
});

test.describe('example workout list visibility', () => {
	test(`select ${EExerciseNames[exercise1 as keyof typeof EExerciseNames]} for ${clubs}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`#${clubs}-exercise-select`)
		const [ firstSelection ] = await location.selectOption(exercise1);
		expect(firstSelection).toBe(exercise1);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});

	test(`select ${EExerciseNames[exercise2 as keyof typeof EExerciseNames]} for ${diamonds}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`#${diamonds}-exercise-select`)
		const [ secondSelection ] = await location.selectOption(exercise2);
		expect(secondSelection).toBe(exercise2);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});

	test(`select ${EExerciseNames[exercise3 as keyof typeof EExerciseNames]} for ${hearts}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`#${hearts}-exercise-select`)
		const [ thirdSelection ] = await location.selectOption(exercise3);
		expect(thirdSelection).toBe(exercise3);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});

	test(`select ${EExerciseNames[exercise4 as keyof typeof EExerciseNames]} for ${spades}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`#${spades}-exercise-select`)
		const [ fourthSelection ] = await location.selectOption(exercise4);
		expect(fourthSelection).toBe(exercise4);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});
});
