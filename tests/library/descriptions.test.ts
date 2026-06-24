import { expect, test } from '@playwright/test';

const exercisesWithDescriptions = [
	{ slug: 'ANKLE_CIRCLES', heading: 'ANKLE CIRCLES' },
	{ slug: 'PLANKS', heading: 'PLANKS' },
	{ slug: 'SQUATS', heading: 'SQUATS' }
];

test.describe('exercise description paragraphs', () => {
	exercisesWithDescriptions.forEach(({ slug, heading }) => {
		test(`${heading} page has a visible description paragraph`, async ({ page }) => {
			await page.goto(`/library/${slug}`);
			await page.waitForLoadState('domcontentloaded');

			await expect(
				page.getByRole('heading', { name: heading, exact: true, level: 2 })
			).toBeVisible();

			const description = page.locator('p.exercise-description');
			await expect(description).toBeVisible();
			await expect(description).not.toBeEmpty();
		});
	});
});
