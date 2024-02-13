import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
});

test('card link goes to expected page', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'SUIT YOURSELF' })).toBeVisible();
});

test('the page has expected start button', async ({ page }) => {
	await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
});

test('before a card is clicked, the discarded cards area is expected to be empty', async ({ page }) => {
	await expect(page.getByTestId('discarded-cards-list')).toBeEmpty();
});

test('clicking the start button is expected to show a card', async ({ page }) => {
	page.getByRole('button', { name: 'Start' }).click();
	await expect(page.getByTestId('playing-card')).toHaveCount(1);
	await expect(page.getByTestId('playing-card')).toBeVisible();
});

test('the page has expected deck radio button', async ({ page }) => {
	await expect(page.getByLabel('Deck', { exact: true })).toBeVisible();
});

test('the page has expected rank radio button', async ({ page }) => {
	await expect(page.getByLabel('Rank', { exact: true })).toBeVisible();
});

test('the page has expected suit radio button', async ({ page }) => {
	await expect(page.getByLabel('Suit', { exact: true })).toBeVisible();
});

test('expect the deck radio button to be checked when clicked', async ({ page }) => {
	await page.getByLabel('Deck', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true, name: 'Deck'})).toBeChecked();
});

test('expect the rank radio button to be checked when clicked', async ({ page }) => {
	await page.getByLabel('Rank', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true, name: 'Rank'})).toBeChecked();
});

test('expect the suit radio button to be checked when clicked', async ({ page }) => {
	await page.getByLabel('Suit', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true, name: 'Suit'})).toBeChecked();
});

test('expect deck info to show 52 cards remaining', async ({ page }) => {
	await page.getByLabel('Deck', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
	await expect(page.getByTestId('cards remaining')).toBeVisible();
	await expect(page.getByRole('heading',{ name: '52', level: 3 })).toBeVisible();
});

test('expect rank info to show 13 items', async ({ page }) => {
	await page.getByLabel('Rank', { exact: true }).click();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
	await expect(page.getByTestId('card rank list')).toBeVisible();
	await expect(page.getByRole('listitem')).toHaveCount(13);
});

test('expect suit info to show 4 items', async ({ page }) => {
	await page.getByLabel('Suit', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
	await expect(page.getByTestId('suit-info-widget')).toBeVisible();
	await expect(page.getByTestId('suit-info-box')).toHaveCount(4);
});

