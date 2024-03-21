import { expect, test } from '@playwright/test';
import { ESuit } from '../src/enums/suit';
import { EExerciseNames } from '../src/enums/exerciseNames';
import { EStopwatchButtonString } from '../src/enums/stopwatchButtonString';


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

test.describe('stopwatch', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', {name: 'Play'}).click();
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', {name: 'EXERCISES'}).click();
		await page.waitForLoadState('domcontentloaded');

		await page.locator(`#${clubs}-exercise-select`).selectOption(exercise1);
		await page.locator(`#${diamonds}-exercise-select`).selectOption(exercise2);
		await page.locator(`#${hearts}-exercise-select`).selectOption(exercise3);
		await page.locator(`#${spades}-exercise-select`).selectOption(exercise4);

		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await letsGoButton.click();
		await expect(page.getByRole('heading', {name: 'SUIT YOURSELF', level: 1})).toBeVisible();
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('radio', { name: 'Time' }).check();
		await page.waitForLoadState('domcontentloaded');
	});

	test('expect visible stopwatch timer', async ({ page }) => {
		const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
		await expect(workoutStopwatchContainer).toBeVisible();
	});

	test('expect to be 00:00.00', async ({ page }) => {
		const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
		const displayTime = workoutStopwatchContainer.locator('.display-time');
		await expect(displayTime).toBeVisible();
		const displayTimeText = await displayTime.innerText();
		expect(displayTimeText).toBe('00:00.00');
	});

	test('expect no buttons before start', async ({ page }) => {
		const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
		const stopwatchButtons = await workoutStopwatchContainer.getByRole('button').all();
		expect(stopwatchButtons.length).toBe(0);
	});

	test.describe('start workout', () => {
		test.beforeEach(async ({ page }) => {
			const startButton = page.getByRole('button', { name: "START" });
			await startButton.click();
			await page.waitForLoadState('domcontentloaded');
		});

		test('expect timer greater than 0 seconds', async ({ page }) => {
			const workoutStopwatchTime =
				await page.locator('.workout-stopwatch-container').locator('.display-time').allInnerTexts();
			expect(workoutStopwatchTime[0]).not.toBe('00:00.00');
		});

		test('expect "pause" button to be visible and enabled', async ({ page }) => {
			const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
			const stopwatchPauseButton =
				workoutStopwatchContainer.getByRole(
					'button',
					{ name: `${EStopwatchButtonString.PAUSE}` }
			);
			await expect(stopwatchPauseButton).toBeVisible();
			await expect(stopwatchPauseButton).toBeEnabled();
		});

		test('expect "continue" to be visible and enabled', async ({ page }) => {
			const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
			const stopwatchPauseButton =
				workoutStopwatchContainer.getByRole(
					'button',
					{ name: `${EStopwatchButtonString.PAUSE}` }
			);
			await stopwatchPauseButton.click();
			await page.waitForLoadState('domcontentloaded');
			const workoutStopwatchContinueButton =
				workoutStopwatchContainer.getByRole(
					'button',
					{ name: `${EStopwatchButtonString.RESUME}` }
			);
			await expect(workoutStopwatchContinueButton).toBeVisible();
			await expect(workoutStopwatchContinueButton).toBeEnabled();
		});

	});

});
