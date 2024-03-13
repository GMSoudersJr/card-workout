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

const stopwatchRegex = /^([0-5]?[0-9]:)?[0-5]?[0-9]:[0-5]?[0-9]$/;

test.describe('start button hit', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', {name: 'Play'}).click();
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', {name: 'ACTIVITIES'}).click();
		await page.waitForLoadState('domcontentloaded');

		await page.locator(`#${clubs}-exercise-select`).selectOption(exercise1);
		await page.locator(`#${diamonds}-exercise-select`).selectOption(exercise2);
		await page.locator(`#${hearts}-exercise-select`).selectOption(exercise3);
		await page.locator(`#${spades}-exercise-select`).selectOption(exercise4);

		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await letsGoButton.click();
		await expect(page.getByRole('heading', {name: 'SUIT YOURSELF', level: 1})).toBeVisible();
		const startButton = page.getByRole('button', { name: "START" });
		await startButton.click();
		await page.waitForLoadState('domcontentloaded');

	});

	test('expect visible timer', async ({ page }) => {
		const workoutStopwatch = page.locator('.workout-stopwatch');
		await expect(workoutStopwatch).toBeVisible();
	});

	test('expect timer greater than 0 seconds', async ({ page }) => {
		const workoutStopwatch = page.locator('.workout-stopwatch');
		const theFirstCard = page.getByTestId('playing-card');
		await theFirstCard.click();
		let discardedCardsListItem = page.getByTestId('discarded-card-listitem');

		const currentCard =
			page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);

		while (await discardedCardsListItem.count() < 52) {
			await expect(currentCard).toHaveCount(1).then(async () => {
				await currentCard.click();
			}).catch(( error ) => {
				console.log(error);
			});
		}

		await expect(page.getByRole('button', { name: 'ACTIVITIES' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'ACTIVITIES' })).toBeEnabled();
		expect(workoutStopwatch).toHaveValue(stopwatchRegex);

	});

});
