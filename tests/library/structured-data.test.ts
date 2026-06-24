import { expect, test } from '@playwright/test';

const exercises = [
	{ slug: 'ANKLE_CIRCLES', expectedName: 'How to Do Ankle Circles' },
	{ slug: 'PLANKS', expectedName: 'How to Do Planks' },
	{ slug: 'SQUATS', expectedName: 'How to Do Squats' }
];

test.describe('exercise page HowTo structured data', () => {
	exercises.forEach(({ slug, expectedName }) => {
		test(`${slug} has valid HowTo JSON-LD`, async ({ page }) => {
			await page.goto(`/library/${slug}`);
			await page.waitForLoadState('domcontentloaded');

			const scriptContent = await page
				.locator('script[type="application/ld+json"]')
				.first()
				.innerText();

			const schema = JSON.parse(scriptContent);

			expect(schema['@type']).toBe('HowTo');
			expect(schema.name).toBe(expectedName);
			expect(schema.name.length).toBeGreaterThan(0);
		});
	});
});
