import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	test.setTimeout(100 * 1_000);

	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
	await page.getByRole('button', { name: 'Start' }).click();

	// End of before each
});

test.describe('a user has clicked the start button', () => {
	test('"NOPE NOT NOW" button expected to be visible and enabled', async ({ page }) => {
		const nopeNotNowButton = page.locator('#nope-not-now-button');
		await expect(nopeNotNowButton).toBeVisible();
		await expect(nopeNotNowButton).toBeEnabled();
	});

	test('click NNN button; expect reamining card counts to stay the same', async ({ page }) => {
		const miniCardTicks = page.locator('.mini-card-tick').all();
		const nopeNotNowButton = page.locator('#nope-not-now-button');
	});

});
