import { expect, test } from '@playwright/test';

test.describe('SEO meta tags', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
	});

	test('og:image content is a valid https URL', async ({ page }) => {
		const content = await page.locator('meta[property="og:image"]').getAttribute('content');
		expect(content).toMatch(/^https:\/\//);
	});

	test('twitter:image content is a valid https URL', async ({ page }) => {
		const content = await page
			.locator('meta[property="twitter:image"]')
			.getAttribute('content');
		expect(content).toMatch(/^https:\/\//);
	});

	test('twitter:image and og:image use the same URL', async ({ page }) => {
		const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
		const twitterImage = await page
			.locator('meta[property="twitter:image"]')
			.getAttribute('content');
		expect(twitterImage).toBe(ogImage);
	});
});
