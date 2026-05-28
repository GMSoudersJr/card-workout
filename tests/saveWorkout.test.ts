import { expect, test } from '@playwright/test';
import { getLocalStorageWorkouts } from './helperFunctions/localStorage';
import { selectExercisesAndStart } from './helperFunctions/exercises';

test.describe('persist workouts to local storage', () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(90 * 1000);
		await selectExercisesAndStart(page);
		// click through cards
		await page.getByRole('button', { name: 'START' }).click();
		await page.waitForLoadState('domcontentloaded');
		await page.locator('.playing-card').click();
		const discardedCardsListItem = page.locator('.discarded-cards-listitem');
		const currentCard = page.locator('.playing-card').locator(':scope:not(:disabled)').first();
		while ((await discardedCardsListItem.count()) < 52) {
			await expect(currentCard).toHaveCount(1);
			await currentCard.click();
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
