import { exercises } from '../../src/lib/exercisesDB';
import { EExerciseNames } from '../../src/enums/exerciseNames';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'INDEX' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('exercise name links', () => {
	exercises.forEach((exercise) => {
		if (exercise.name !== undefined) {
			const exerciseName = EExerciseNames[exercise.name].toUpperCase();
			test(`expect navigation to ${exerciseName} page`, async ({ page }) => {
				const demoLink = page.getByRole('link', { name: exerciseName, exact: true });

				await demoLink.click();
				await page.waitForLoadState('domcontentloaded');

				await expect(
					page.getByRole('heading', { name: `${exerciseName}`, level: 2 })
				).toBeVisible();
			});
		}
	});
});
