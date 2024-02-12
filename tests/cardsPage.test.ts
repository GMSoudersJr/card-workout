import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
});

test('card link goes to correct page', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Cards' })).toBeVisible();
});

test('card page has start button', async ({ page }) => {
	await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
});

test('card page has deck radio button', async ({ page }) => {
	await expect(page.getByLabel('Deck', { exact: true })).toBeVisible();
});

test('card page has rank radio button', async ({ page }) => {
	await expect(page.getByLabel('Rank', { exact: true })).toBeVisible();
});

test('card page has suit radio button', async ({ page }) => {
	await expect(page.getByLabel('Suit', { exact: true })).toBeVisible();
});

test('deck radio button clicks', async ({ page }) => {
	await page.getByLabel('Deck', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
});

test('deck info is visible', async ({ page }) => {
	await page.getByLabel('Deck', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
	await expect(page.getByTestId('cards remaining')).toBeVisible();
	await expect(page.getByRole('heading',{ name: '52', level: 3 })).toBeVisible();
});

test('rank info is visible', async ({ page }) => {
	await page.getByLabel('Rank', { exact: true }).click();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
	await expect(page.getByTestId('card rank list')).toBeVisible();
	await expect(page.getByRole('listitem')).toHaveCount(13);
});

test('suit info is visible', async ({ page }) => {
	await page.getByLabel('Suit', { exact: true }).check();
	await expect(page.getByRole('radio', {checked: true})).toBeChecked();
	await expect(page.getByTestId('suit-info-widget')).toBeVisible();
	await expect(page.getByTestId('suit-info-box')).toHaveCount(4);
});

