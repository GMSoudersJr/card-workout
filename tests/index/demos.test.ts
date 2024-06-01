import { exercises } from '../../src/lib/exercisesDB';
import { EExerciseNames } from '../../src/enums/exerciseNames';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'INDEX' }).click();
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

					const embeddedVideoFrame = page.frameLocator(
						`#${exercise.name!.toLowerCase()}-embedded-video`
					);
					expect(embeddedVideoFrame).toBeTruthy();

					const youTubePlayer = embeddedVideoFrame.locator('#player');
					const channelTitle = youTubePlayer.locator('.ytp-title-channel');
					await expect(channelTitle).toBeVisible();

					const playButton = youTubePlayer.getByLabel('Play', { exact: true });
					await expect(playButton).toBeVisible();
					await expect(playButton).toBeEnabled();
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
