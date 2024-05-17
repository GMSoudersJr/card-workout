import {
	exerciseEmoji,
	homeEmoji,
	repeatEmoji,
	wasteBasketEmoji
} from '../src/lib/emojis';
import { expect, test } from '@playwright/test';
import {
	setLocalStorageWorkouts,
	getLocalStorageWorkouts
} from './helperFunctions/localStorage';
import { fakeWorkoutData } from './fakeWorkoutData';

const workoutsForLocalStorage = JSON.stringify(fakeWorkoutData);
const singleWorkoutForLocalStorage = JSON.stringify([fakeWorkoutData[0]]);

test.describe('new user', () => {
	test('expect "activities" link not to be visible', async ({ page }) => {
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await expect(page.getByRole('link', {name: 'ACTIVITIES'})).not.toBeVisible();
	});
});

test.describe('one saved workout', () => {
	test.beforeEach(async ({ page, context }) => {
		await setLocalStorageWorkouts(context, singleWorkoutForLocalStorage);
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', {name: 'ACTIVITIES'}).click();
		await page.waitForLoadState('domcontentloaded');
	});

	test('expect one visible workout card', async ({ page }) => {
		const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
		await expect(heading).toBeVisible();
		const workoutCards = await page.locator('.workout-card').all();
		await page.waitForLoadState('domcontentloaded');
		expect(workoutCards.length).toBe(1);
	});

	test.describe('delete last workout', () => {
		test.beforeEach(async ({ page }) => {
			const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
			await expect(heading).toBeVisible();
			const workoutCards = await page.locator('.workout-card').all();
			await page.waitForLoadState('domcontentloaded');
			expect(workoutCards.length).toBe(1);
			const firstWorkoutCard = workoutCards[0];
			const deleteButton = firstWorkoutCard.getByRole('button', { name: wasteBasketEmoji });
			await deleteButton.click();
			await page.waitForLoadState('domcontentloaded');
			const deleteDialog = page.getByRole('dialog');
			await expect(deleteDialog).toBeVisible();
			const confirmButton = deleteDialog.getByRole('button', { name: 'Confirm' });
			await expect(confirmButton).toBeVisible();
			await confirmButton.click();
			await page.waitForLoadState('domcontentloaded');
		});

		test('expect navigation home', async ({ page }) => {
			await expect(page.getByRole('heading', { name: 'SUIT YOURSELF' })).toBeVisible();
			const linkTexts = await page.getByRole('link').allInnerTexts();
			expect(linkTexts.length).toBeGreaterThan(0);
			await expect(page.getByRole('link', { name: 'ACTIVITIES' })).not.toBeVisible();
		});

		test('expect exercises to be reset', async ({ page }) => {
			await expect(page.getByRole('heading', { name: 'SUIT YOURSELF' })).toBeVisible();
			await page.getByRole('link', { name: 'EXERCISES' }).click();
			await page.waitForLoadState('domcontentloaded');
			await expect(page.locator('.example-workout-section')).toBeVisible();
		});

	});

});

test.describe('returning after workouts have been saved', () => {
	test.beforeEach(async ({ page, context }) => {
		await setLocalStorageWorkouts(context, workoutsForLocalStorage);
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
	});

	test('expect "ACTIVITIES" link to be visible and enabled', async ({ page }) => {
		await expect(page.getByRole('link', {name: 'ACTIVITIES'})).toBeVisible();
		await expect(page.getByRole('link', {name: 'ACTIVITIES'})).toBeEnabled();
	});

});

test.describe('ACTIVITIES page', () => {
	test.beforeEach(async ({ page, context }) => {
		await setLocalStorageWorkouts(context, workoutsForLocalStorage);
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', {name: 'ACTIVITIES'}).click();
		await page.waitForLoadState('domcontentloaded');
	});

	test('expect correct heading', async ({ page }) => {
		const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
		await expect(heading).toBeVisible();
	});

	test('expect visible workout cards', async ({ page }) => {
		const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
		await expect(heading).toBeVisible();
		await page.waitForSelector('.workout-card');
		const workoutCards = await page.locator('.workout-card').all();
		await page.waitForLoadState('domcontentloaded');
		expect(workoutCards.length).toBeGreaterThan(0);
	});

	test.describe('links', () => {
		test('expect home link visible and enabled', async ({ page }) => {
			const homeLink = page.getByRole('link', { name: homeEmoji });
			await expect(homeLink).toBeVisible();
			await expect(homeLink).toBeEnabled();
		});

		test('expect exercises link visible and enabled', async ({ page }) => {
			const cardsLink = page.getByRole('link', { name: exerciseEmoji });
			await expect(cardsLink).toBeVisible();
			await expect(cardsLink).toBeEnabled();
		});

		test.describe('navigation', () => {
			test('expect homepage', async ({ page }) => {
				const homeLink = page.getByRole('link', { name: homeEmoji });
				await homeLink.click();
				await page.waitForLoadState('domcontentloaded');
				await expect(page.getByRole('heading', {name: 'SUIT YOURSELF'})).toBeVisible();
			});

			test('expect exercises page', async ({ page }) => {
				const cardsLink = page.getByRole('link', { name: exerciseEmoji });
				await cardsLink.click();
				await page.waitForLoadState('domcontentloaded');
				await expect(page.getByRole('heading', { name: 'EXERCISES', level: 1 })).toBeVisible();
			});

		});

	});

	test.describe('workout card elements', () => {
		test('expect date element', async ({ page }) => {
			const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
			await expect(heading).toBeVisible();
			const workoutCards = await page.locator('.workout-card').all();
			expect(workoutCards.length).toBeGreaterThan(0);
			const firstWorkoutCard = workoutCards[0];
			await expect(firstWorkoutCard.locator('.workout-date')).toBeVisible();
		});

		test('expect heading element', async ({ page }) => {
			const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
			await expect(heading).toBeVisible();
			const workoutCards = await page.locator('.workout-card').all();
			expect(workoutCards.length).toBeGreaterThan(0);
			const firstWorkoutCard = workoutCards[0];
			await expect(firstWorkoutCard.locator('.workout-name')).toBeVisible();
		});

		test('expect repeat button', async ({ page }) => {
			const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
			await expect(heading).toBeVisible();
			const workoutCards = await page.locator('.workout-card').all();
			expect(workoutCards.length).toBeGreaterThan(0);
			const firstWorkoutCard = workoutCards[0];
			const repeatButton = firstWorkoutCard.getByRole('button', { name: repeatEmoji });
			await expect(repeatButton).toBeVisible();
			await expect(repeatButton).toBeEnabled();
		});

		test('expect delete button', async ({ page }) => {
			const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
			await expect(heading).toBeVisible();
			const workoutCards = await page.locator('.workout-card').all();
			expect(workoutCards.length).toBeGreaterThan(0);
			const firstWorkoutCard = workoutCards[0];
			const deleteButton = firstWorkoutCard.getByRole('button', { name: wasteBasketEmoji });
			await expect(deleteButton).toBeVisible();
			await expect(deleteButton).toBeEnabled();
		});

		test('expect 4 exercises', async ({ page }) => {
			const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
			await expect(heading).toBeVisible();
			const workoutCards = await page.locator('.workout-card').all();
			expect(workoutCards.length).toBeGreaterThan(0);
			const firstWorkoutCard = workoutCards[0];
			const exerciseContainer = firstWorkoutCard.locator('.exercises-container');
			await expect(exerciseContainer).toBeVisible();
			const exerciseNames = await firstWorkoutCard.locator('.exercise-name').all();
			expect(exerciseNames).toHaveLength(4);
		});

		test.describe('buttons', () => {
			test.describe('press repeat', () => {
				test('expect correct navigation', async ({ page }) => {
					const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
					await expect(heading).toBeVisible();
					const workoutCards = await page.locator('.workout-card').all();
					expect(workoutCards.length).toBeGreaterThan(0);
					const firstWorkoutCard = workoutCards[0];
					const repeatButton = firstWorkoutCard.getByRole('button', { name: repeatEmoji });
					await repeatButton.click();
					await page.waitForLoadState('domcontentloaded');
					const repsRadioButton = page.getByRole('radio', { name: 'Reps' });
					await repsRadioButton.click();
					await expect(repsRadioButton).toBeChecked();
				});

				test('expect correct exercises', async ({ page }) => {
					const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
					await expect(heading).toBeVisible();
					const workoutCards = await page.locator('.workout-card').all();
					expect(workoutCards.length).toBeGreaterThan(0);
					const firstWorkoutCard = workoutCards[0];
					const workoutCardExerciseNames = await firstWorkoutCard.locator('.exercise-name').allInnerTexts();
					const repeatButton = firstWorkoutCard.getByRole('button', { name: repeatEmoji });
					await repeatButton.click();
					await page.waitForLoadState('domcontentloaded');
					await page.getByRole('radio', { name: 'Reps' }).check();
					await page.waitForSelector('.reps-info-exercise-name');
					const currentExerciseNames = await page.locator('.reps-info-exercise-name').allInnerTexts();
					expect(currentExerciseNames).toEqual(workoutCardExerciseNames);
				});

				test('expect exercise name and reps on playing card', async ({ page }) => {
					const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
					await expect(heading).toBeVisible();
					const workoutCards = await page.locator('.workout-card').all();
					expect(workoutCards.length).toBeGreaterThan(0);
					const firstWorkoutCard = workoutCards[0];
					const repeatButton = firstWorkoutCard.getByRole('button', { name: repeatEmoji });
					await repeatButton.click();
					await page.waitForLoadState('domcontentloaded');
					await page.getByRole('radio', { name: 'Reps' }).check();
					await page.getByRole('button', { name: 'START' }).click();
					await page.waitForLoadState('domcontentloaded');
					const firstCard = page.locator('.playing-card');
					const firstCardReps = firstCard.locator('.card-exercise-reps');
					const firstCardExerciseName = firstCard.locator('.card-exercise-name');
					await expect(firstCardReps).toBeVisible();
					await expect(firstCardExerciseName).toBeVisible();
				});

			});

			test.describe('press delete', () => {
				test('expect dialog', async ({ page }) => {
					const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
					await expect(heading).toBeVisible();
					const workoutCards = await page.locator('.workout-card').all();
					expect(workoutCards.length).toBeGreaterThan(0);
					const firstWorkoutCard = workoutCards[0];
					const deleteButton = firstWorkoutCard.getByRole('button', { name: wasteBasketEmoji });
					await deleteButton.click();
					await page.waitForLoadState('domcontentloaded');
					const deleteDialog = page.getByRole('dialog');
					await expect(deleteDialog).toBeVisible();
				});

				test.describe('press cancel', () => {
					test('expect return to page', async ({ page }) => {
						const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
						await expect(heading).toBeVisible();
						const workoutCards = await page.locator('.workout-card').all();
						expect(workoutCards.length).toBeGreaterThan(0);
						const firstWorkoutCard = workoutCards[0];
						const deleteButton = firstWorkoutCard.getByRole('button', { name: wasteBasketEmoji });
						await deleteButton.click();
						await page.waitForLoadState('domcontentloaded');
						const deleteDialog = page.getByRole('dialog');
						expect(deleteDialog).toBeVisible();
						await deleteDialog.getByRole('button', { name: 'Cancel' }).click();
						await page.waitForLoadState('domcontentloaded');
						await expect(page.getByRole('heading', { name: 'Recent Activities' })).toBeVisible();
					});
				});

				test.describe('press confirm', () => {
					test('expect workout deletion', async ({ page }) => {
						const heading = page.getByRole('heading', { name: 'Recent Activities', level: 1 });
						await expect(heading).toBeVisible();
						const workoutCards = page.locator('.workout-card');
						const originalWorkoutCardsCount = await workoutCards.count();
						const firstWorkoutCard = workoutCards.first();
						const deleteButton = firstWorkoutCard.getByRole('button', { name: wasteBasketEmoji });
						await deleteButton.click();
						await page.waitForLoadState('domcontentloaded');
						const deleteDialog = page.getByRole('dialog');
						await expect(deleteDialog).toBeVisible();
						const confirmButton = deleteDialog.getByRole('button', { name: 'Confirm' });
						await expect(confirmButton).toBeVisible();
						await confirmButton.click();
						const newWorkoutCardsCount = page.locator('.workout-card');
						await expect(newWorkoutCardsCount).toHaveCount(originalWorkoutCardsCount - 1);
					});

				});

			});

		});

	});

});

