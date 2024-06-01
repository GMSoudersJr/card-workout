import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'DECKS' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('parts', () => {
	test('expect quick start button', async ({ page }) => {
		const firstWorkoutListitem = page.locator('.decks-listitem').first();
		const quickStartButton = firstWorkoutListitem.getByRole('button');
		await expect(quickStartButton).toBeVisible();
		await expect(quickStartButton).toBeEnabled();
	});

	test('expect workout name', async ({ page }) => {
		const firstWorkoutListitem = page.locator('.decks-listitem').first();
		const deckName = await firstWorkoutListitem.locator('.deck-name').innerText();
		const workoutName = await firstWorkoutListitem.locator('.deck-header').innerText();
		expect(workoutName).toEqual(deckName);
	});

	test('expect 4 exercises', async ({ page }) => {
		const firstWorkoutDeck = page.locator('.decks-listitem').first();
		const exercisesLinks = firstWorkoutDeck.locator('.list-item');
		await expect(exercisesLinks).toHaveCount(4);
	});

	test('expect description', async ({ page }) => {
		const firstWorkoutListitem = page.locator('.decks-listitem').first();
		const deckDescription = firstWorkoutListitem.locator('.description');
		await expect(deckDescription).toBeVisible();
	});
});

test.describe('quick start navigation', () => {
	test.beforeEach(async ({ page }) => {
		const firstWorkoutListitem = page.locator('.decks-listitem').first();
		const quickStartButton = firstWorkoutListitem.getByRole('button');
		await quickStartButton.click();
		await page.waitForLoadState('domcontentloaded');
	});

	test('expect SUIT YOURSELF', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
	});

	test('expect reps info', async ({ page }) => {
		const repsRadioButton = page.getByRole('radio', { name: 'reps' });
		await repsRadioButton.check();
		await expect(repsRadioButton).toBeChecked();
		const repsInfoWidget = page.locator('.reps-info-widget');
		await expect(repsInfoWidget).toBeVisible();
		const progressBars = repsInfoWidget.locator('progress');
		await expect(progressBars).toHaveCount(4);
	});

	test('expect exercise name on card', async ({ page }) => {
		const startButton = page.getByRole('button', { name: 'Start' });
		await startButton.click();
		await page.waitForLoadState('domcontentloaded');
		const firstCard = page.getByRole('button');
		const cardExerciseName = firstCard.locator('.card-exercise-name');
		await expect(cardExerciseName).toBeVisible();
	});
});
