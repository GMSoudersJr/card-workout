import { expect, test, type Page } from '@playwright/test';
import { setLocalStorageWorkouts } from './helperFunctions/localStorage';

// Fixed "now" for every snapshot. Date.now() never advances, so the workout
// stopwatch stays at 0 and saved-workout dates render the same.
const FIXED_NOW = new Date('2024-03-07T12:00:00Z');

const savedWorkouts = JSON.stringify([
	{
		name: 'FULL BODY I',
		exercises: ['CRUNCHES', 'JUMPING_JACKS', 'PUSH_UPS', 'ATG_SQUATS'],
		time: {
			startedAt: FIXED_NOW.getTime() - 86_400_000,
			elapsed: 1_234_560
		}
	}
]);

test.use({ locale: 'en-US', timezoneId: 'America/New_York', serviceWorkers: 'block' });

test.beforeEach(async ({ page, context }) => {
	// Seeded Math.random so the draw is the same card every run.
	await context.addInitScript(() => {
		let seed = 0x5eed;
		Math.random = () => {
			seed |= 0;
			seed = (seed + 0x6d2b79f5) | 0;
			let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	});
	await setLocalStorageWorkouts(context, savedWorkouts);
	await page.clock.setFixedTime(FIXED_NOW);

	// Keep snapshots off third-party content: no analytics hits, no YouTube player.
	await context.route(/gc\.zgo\.at|goatcounter\.com/, (route) => route.abort());
	await context.route(/youtube\.com/, (route) =>
		route.fulfill({ contentType: 'text/html', body: '<html></html>' })
	);
});

async function settle(page: Page) {
	await page.waitForLoadState('networkidle');
	await page.evaluate(() => document.fonts.ready);
}

test('home', async ({ page }) => {
	await page.goto('/');
	await settle(page);
	await expect(page).toHaveScreenshot('home.png');
});

test('decks', async ({ page }) => {
	await page.goto('/decks');
	await settle(page);
	await expect(page).toHaveScreenshot('decks.png');
});

test('setup', async ({ page }) => {
	await page.goto('/setup');
	await settle(page);
	await expect(page).toHaveScreenshot('setup.png');
});

test('library', async ({ page }) => {
	await page.goto('/library');
	await settle(page);
	await expect(page).toHaveScreenshot('library.png');
});

test('library exercise detail', async ({ page }) => {
	await page.goto('/library/atg_squats');
	await settle(page);
	await expect(page).toHaveScreenshot('library-atg-squats.png', {
		mask: [page.locator('iframe.embedded-video')]
	});
});

test('faq', async ({ page }) => {
	await page.goto('/faq');
	await settle(page);
	await expect(page).toHaveScreenshot('faq.png');
});

test('activities with a saved workout', async ({ page }) => {
	await page.goto('/activities');
	await settle(page);
	await expect(page.locator('.workout-card')).toHaveCount(1);
	await expect(page).toHaveScreenshot('activities.png');
});

test('cards after drawing a card', async ({ page }) => {
	await page.goto('/decks');
	await settle(page);
	await page.getByRole('button', { name: 'FULL BODY I', exact: true }).click();
	await page.waitForURL('/cards');
	await page.getByRole('button', { name: 'Start' }).click();
	// Same card every run thanks to the seeded Math.random.
	await expect(page.getByRole('button', { name: /^Q ♥ 10 PUSH-UPS/ })).toBeVisible();
	await settle(page);
	await expect(page).toHaveScreenshot('cards.png');
});
