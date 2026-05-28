import { exercises } from '../../src/lib/exercisesDB';
import { EExerciseNames } from '../../src/enums/exerciseNames';
import { expect, test } from '@playwright/test';
import { links } from '../../src/lib/strings/forHomepage';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: links.index.toUpperCase() }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('exercise name navigation', () => {
	exercises.forEach((exercise) => {
		if (exercise.name !== undefined) {
			const exerciseName = EExerciseNames[exercise.name].toUpperCase();
			const hasEmbeddedVideoLink = exercise.embeds![0] !== '';

			if (hasEmbeddedVideoLink) {
				test(`expect ${exerciseName} embedded video`, async ({ page }) => {
					const exerciseIndexCardHeading = page.getByRole('heading', {
						name: exerciseName,
						exact: true,
						level: 1
					});
					const exInnerHtml = await exerciseIndexCardHeading.innerHTML();

					// Because a tag will be the innerHTML.
					expect(exInnerHtml).not.toEqual(exerciseName);
					const demoLink = exerciseIndexCardHeading.getByRole('link');

					await expect(demoLink).toBeVisible();
					await expect(demoLink).toBeEnabled();
					await demoLink.click();
					await page.waitForLoadState('domcontentloaded');

					await expect(
						page.getByRole('heading', { name: `${exerciseName}`, exact: true, level: 2 })
					).toBeVisible();

					const embeddedVideo = page.locator(
						`#${exercise.name!.toLowerCase()}-embedded-video`
					);
					await expect(embeddedVideo).toBeVisible();
					await expect(embeddedVideo).toHaveAttribute('src', /youtube\.com\/embed/);
				});
			} else {
				test(`expect ${exerciseName} unclickable`, async ({ page }) => {
					const exerciseIndexCardHeading = page.getByRole('heading', {
						name: exerciseName,
						exact: true,
						level: 1
					});
					const exInnerHtml = await exerciseIndexCardHeading.innerHTML();
					expect(exInnerHtml).toEqual(exerciseName);
				});
			}
		}
	});
});
