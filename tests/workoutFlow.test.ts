import { expect, test } from '@playwright/test';
import { EExerciseNames } from '../src/enums/exerciseNames';
import { exercise1, exercise2, exercise3, exercise4, selectExercisesAndStart } from './helperFunctions/exercises';

test.beforeEach(async ({ page }) => {
	await selectExercisesAndStart(page);
});

test.describe('initial visibilities', () => {
	test('has expected heading', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
	});

	test('has expected "HOME" and "SETUP" links', async ({ page }) => {
		const homeLink = page.getByRole('link', { name: '🏠' });
		const exercisesLink = page.getByRole('link', { name: '🤸' });
		await expect(homeLink).toBeVisible();
		await expect(homeLink).toBeEnabled();
		await expect(exercisesLink).toBeVisible();
		await expect(exercisesLink).toBeEnabled();
	});

	test('has 4 expected radio buttons', async ({ page }) => {
		await expect(page.getByLabel('Deck', { exact: true })).toBeVisible();
		await expect(page.getByLabel('Rank', { exact: true })).toBeVisible();
		await expect(page.getByLabel('Suit', { exact: true })).toBeVisible();
		await expect(page.getByLabel('Reps', { exact: true })).toBeVisible();
	});

	test('expect deck info widget to show 52 cards remaining', async ({ page }) => {
		await page.getByLabel('Deck', { exact: true }).check();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		await expect(page.locator('#cards-remaining')).toBeVisible();
		await expect(page.getByRole('heading', { name: '52', level: 3 })).toBeVisible();
	});

	test('expect rank info to show 13 items', async ({ page }) => {
		await page.getByLabel('Rank', { exact: true }).click();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		await expect(page.locator('.rank-list')).toBeVisible();
		await expect(page.getByRole('listitem')).toHaveCount(13);
	});

	test('expect suit info to show 4 items', async ({ page }) => {
		await page.getByLabel('Suit', { exact: true }).check();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		await expect(page.locator('.suit-info-widget')).toBeVisible();
		await expect(page.locator('.suit-info-box')).toHaveCount(4);
	});

	test('expect reps info to show 4 items', async ({ page }) => {
		await page.getByLabel('Reps', { exact: true }).check();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		await expect(page.locator('.reps-info-widget')).toBeVisible();
		await expect(page.locator('.reps-info-box')).toHaveCount(4);
	});

	test('expect reps info to show correct exercise names', async ({ page }) => {
		await page.getByLabel('Reps', { exact: true }).check();
		await expect(page.getByRole('radio', { checked: true })).toBeChecked();
		await expect(page.locator('.reps-info-widget')).toBeVisible();
		const exerciseNames = page.locator('.reps-info-exercise-name');
		await expect(exerciseNames).toHaveText([
			EExerciseNames[exercise1 as keyof typeof EExerciseNames].toUpperCase(),
			EExerciseNames[exercise2 as keyof typeof EExerciseNames].toUpperCase(),
			EExerciseNames[exercise3 as keyof typeof EExerciseNames].toUpperCase(),
			EExerciseNames[exercise4 as keyof typeof EExerciseNames].toUpperCase()
		]);
	});
});

test.describe('click start', () => {
	test('the fist card has reps and exercise name on it', async ({ page }) => {
		const startButton = page.getByRole('button', { name: 'START' });
		await expect(startButton).toBeVisible();
		await expect(startButton).toBeEnabled();
		await startButton.click();
		const firstCard = page.locator('.playing-card');
		await expect(firstCard).toBeVisible();
		await expect(firstCard).toBeEnabled();
		const firstCardReps = firstCard.locator('.card-exercise-reps');
		const firstCardExerciseName = firstCard.locator('.card-exercise-name');
		await expect(firstCardReps).toBeVisible();
		await expect(firstCardExerciseName).toBeVisible();
	});

	test.describe('continue clicking an exercise card', () => {
		test('expect exercise information to be visible on each card', async ({ page }) => {
			test.setTimeout(90 * 1_000);
			const startButton = page.getByRole('button', { name: 'START' });
			await expect(startButton).toBeVisible();
			await expect(startButton).toBeEnabled();
			await startButton.click();
			const firstCard = page.locator('.playing-card');
			const firstCardExerciseInfo = firstCard.locator('.card-exercise-info');
			await expect(firstCardExerciseInfo).toBeVisible();
			await firstCard.click();
			const discardedCardsListItem = page.locator('.discarded-cards-listitem');
			const currentCard = page.locator('.playing-card').locator(':scope:not(:disabled)').first();
			while ((await discardedCardsListItem.count()) < 52) {
				await expect(currentCard).toHaveCount(1);
				const currentCardExerciseInfo = currentCard.locator('.card-exercise-info');
				await expect(currentCardExerciseInfo).toBeVisible();
				await currentCard.click();
			}
		});
	});
});
