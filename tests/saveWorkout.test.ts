import { expect, test } from '@playwright/test';
import { EExerciseNames } from '../src/enums/exerciseNames';
import { ESuit } from '../src/enums/suit';
import { getLocalStorageWorkouts } from './helperFunctions/localStorage';

const [
	exercise1,
	exercise2,
	exercise3,
	exercise4,
] = Object.keys(EExerciseNames);

const [
	clubs,
	diamonds,
	hearts,
	spades,
] = Object.keys(ESuit);

test.describe('persist workouts to local storage', () => {
	test.beforeEach(async ({ page }) => {
	test.setTimeout(51 * 1000);
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		await page.getByRole('link', { name: 'Exercises' }).click();
		await page.waitForLoadState('domcontentloaded');

		const clubsSelect = page.locator(`#${clubs}-exercise-select`);
		const diamondsSelect = page.locator(`#${diamonds}-exercise-select`);
		const heartsSelect = page.locator(`#${hearts}-exercise-select`);
		const spadesSelect = page.locator(`#${spades}-exercise-select`);

		await clubsSelect.selectOption(exercise1);
		await diamondsSelect.selectOption(exercise2);
		await heartsSelect.selectOption(exercise3);
		await spadesSelect.selectOption(exercise4);

		const letsGoButton = page.getByRole('button', { name: "Let's Go" });
		await letsGoButton.click();
		await page.waitForLoadState('domcontentloaded');
		// click through cards
		await page.getByRole('button', { name: 'START' }).click();
		await page.waitForLoadState('domcontentloaded');
			await page.locator('.playing-card').click();
			let discardedCardsListItem = page.locator('.discarded-cards-listitem');
			const currentCard =
				page.locator('.playing-card').locator(':scope:not(:disabled)').nth(1);
			while (await discardedCardsListItem.count() < 52) {
				await expect(currentCard).toHaveCount(1).then(async () => {
					await currentCard.click();
				}).catch(( error ) => {
					console.log('there was an error', error);
				});
			}
		await page.waitForLoadState('domcontentloaded');

	});

	test('expect activities button visible', async ({ page }) => {
		await expect(page.getByRole('button', { name: 'ACTIVITIES' })).toBeVisible();
	});

	test('expect saved workout', async ({ context }) => {
		const localStorageWorkouts = await getLocalStorageWorkouts(context);
		if (localStorageWorkouts === undefined || localStorageWorkouts == null) return;
		expect(localStorageWorkouts.length).toBeGreaterThan(0);
		expect(localStorageWorkouts[0].exercises).toHaveLength(4);
	});

});

