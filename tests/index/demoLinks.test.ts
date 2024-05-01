import { exercises } from '../../src/lib/exercisesDB';
import {EExerciseNames} from '../../src/enums/exerciseNames';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: 'INDEX' }).click();
	await page.waitForLoadState('domcontentloaded');
});

test.describe('demo links', () => {
	exercises.forEach((exercise) => {
		if ( exercise.name !== undefined ) {
			test(`expect ${EExerciseNames[exercise.name]} 200 response`, async ({ page }) => {
				if ( exercise.name !== undefined) {
					const demoLink =
						page.getByRole(
							'link',
							{
								name: EExerciseNames[exercise.name].toUpperCase(),
								exact: true
							}
						);

					await demoLink.click();
					await page.waitForLoadState('domcontentloaded');

					const outsideLinkResponse = page.waitForResponse(( response ) => {
						return response.status() === 200;
					});

					expect(await outsideLinkResponse).toBeTruthy();

				}

			});

		}

	});

});
