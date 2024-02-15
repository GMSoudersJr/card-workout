import { expect, test } from '@playwright/test';
import { ESuit } from '../src/enums/suit';
import { EExercises } from '../src/enums/exercises';

const [clubs, diamonds, hearts, spades] = Object.keys(ESuit);
const [ exercise1, exercise2, exercise3, exercise4 ] = Object.keys(EExercises);

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Exercises' }).click();
});

test('exercise page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Exercises', level: 1 })).toBeVisible();
});

test.describe('exercise page has correct links', () => {
	test('exercise page has expected link to home page', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
	});

	test('exercise page has expected link to cards page', async ({ page }) => {
		await expect(page.getByRole('link', { name: 'CARDS' })).toBeVisible();
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
	const suits = Object.keys(ESuit);
	test('expect each suit exercise selector to be visible', async ({ page }) => {
		await expect(page.locator(`id=${suits[0]}-exercise-selection`)).toBeVisible();
		await expect(page.locator(`id=${suits[1]}-exercise-selection`)).toBeVisible();
		await expect(page.locator(`id=${suits[2]}-exercise-selection`)).toBeVisible();
		await expect(page.locator(`id=${suits[3]}-exercise-selection`)).toBeVisible();
	});
});

test.describe('select an exercise for each suit', () => {
	test(`select ${EExercises[exercise1 as keyof typeof EExercises]} for ${clubs}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`id=${clubs}-exercise-selection`)
		const [ firstSelection ] = await location.selectOption(exercise1);
		expect(firstSelection).toBe(exercise1);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});

	test(`select ${EExercises[exercise2 as keyof typeof EExercises]} for ${diamonds}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`id=${diamonds}-exercise-selection`)
		const [ secondSelection ] = await location.selectOption(exercise2);
		expect(secondSelection).toBe(exercise2);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});

	test(`select ${EExercises[exercise3 as keyof typeof EExercises]} for ${hearts}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`id=${hearts}-exercise-selection`)
		const [ thirdSelection ] = await location.selectOption(exercise3);
		expect(thirdSelection).toBe(exercise3);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});

	test(`select ${EExercises[exercise4 as keyof typeof EExercises]} for ${spades}`, async ({ page }) => {
		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		const location = page.locator(`id=${spades}-exercise-selection`)
		const [ fourthSelection ] = await location.selectOption(exercise4);
		expect(fourthSelection).toBe(exercise4);
		await expect(page.getByTestId('example-workout-list')).toBeVisible();
		await expect(letsGoButton).not.toBeVisible();
	});
});
