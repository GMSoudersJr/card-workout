import { expect, test } from '@playwright/test';

const routes = [
	{
		path: '/',
		expectedTitle: 'Suit Yourself | Card-Based Calisthenics Workout App'
	},
	{
		path: '/library',
		expectedTitle: 'Calisthenics Exercise Library | Suit Yourself'
	},
	{
		path: '/decks',
		expectedTitle: 'Workout Decks | Suit Yourself'
	},
	{
		path: '/setup',
		expectedTitle: 'How to Set Up Your Workout | Suit Yourself'
	},
	{
		path: '/faq',
		expectedTitle: 'FAQ | Suit Yourself'
	}
];

for (const { path, expectedTitle } of routes) {
	test(`title and og:title on ${path}`, async ({ page }) => {
		await page.goto(path);
		await page.waitForLoadState('domcontentloaded');

		await expect(page).toHaveTitle(expectedTitle);

		const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
		expect(ogTitle).toBe(expectedTitle);
	});
}

test('dynamic exercise page title and og:title', async ({ page }) => {
	await page.goto('/library/ALTERNATE_TOE_TAPS');
	await page.waitForLoadState('domcontentloaded');

	const expectedTitle = 'How to Do Alternate Toe Taps | Calisthenics Guide | Suit Yourself';

	await expect(page).toHaveTitle(expectedTitle);

	const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
	expect(ogTitle).toBe(expectedTitle);
});
