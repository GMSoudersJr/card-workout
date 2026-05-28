import { expect, test } from '@playwright/test';
import { EStopwatchButtonString } from '../src/enums/stopwatchButtonString';
import { selectExercisesAndStart } from './helperFunctions/exercises';

test.describe('stopwatch', () => {
	test.beforeEach(async ({ page }) => {
		await selectExercisesAndStart(page);
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
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
			const startButton = page.getByRole('button', { name: 'START' });
			await startButton.click();
			await page.waitForLoadState('domcontentloaded');
		});

		test('expect timer greater than 0 seconds', async ({ page }) => {
			const workoutStopwatchTime = await page
				.locator('.workout-stopwatch-container')
				.locator('.display-time')
				.allInnerTexts();
			expect(workoutStopwatchTime[0]).not.toBe('00:00.00');
		});

		test('expect "pause" button to be visible and enabled', async ({ page }) => {
			const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
			const stopwatchPauseButton = workoutStopwatchContainer.getByRole('button', {
				name: `${EStopwatchButtonString.PAUSE}`
			});
			await expect(stopwatchPauseButton).toBeVisible();
			await expect(stopwatchPauseButton).toBeEnabled();
		});

		test('expect "resume" to be visible and enabled', async ({ page }) => {
			const workoutStopwatchContainer = page.locator('.workout-stopwatch-container');
			const stopwatchPauseButton = workoutStopwatchContainer.getByRole('button', {
				name: `${EStopwatchButtonString.PAUSE}`
			});
			await stopwatchPauseButton.click();
			await page.waitForLoadState('domcontentloaded');
			const workoutStopwatchContinueButton = workoutStopwatchContainer.getByRole('button', {
				name: `${EStopwatchButtonString.RESUME}`
			});
			await expect(workoutStopwatchContinueButton).toBeVisible();
			await expect(workoutStopwatchContinueButton).toBeEnabled();
		});
	});
});
