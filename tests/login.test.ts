import { expect, test } from '@playwright/test';
import { getLocalStorageUsername } from './helperFunctions/login';

test.describe('login', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test.fixme('expect redirect to login page', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'LOGIN' })).toBeVisible();
	});

	test.fixme('expect visible login form', async ({ page }) => {
		const loginForm = page.locator('#login-form');
		await expect(loginForm).toBeVisible();
		await expect(loginForm.getByLabel('Username')).toBeVisible();
		await expect(loginForm.getByRole('textbox')).toBeVisible();
		await expect(loginForm.getByRole('textbox')).toBeEmpty();
		await expect(loginForm.getByRole('button', {name: 'submit'})).toBeVisible();
	});

	test.fixme('expect visible no-login link', async ({ page }) => {
		const noLoginLink = page.getByRole('link', { name: 'Play' });
		await expect(noLoginLink).toBeVisible();
		await expect(noLoginLink).toBeEnabled();
	});

	test.fixme('expect no-login correct navigation', async ({ page }) => {
		const noLoginLink = page.getByRole('link', { name: 'Play' });
		await noLoginLink.click();
		await page.waitForLoadState('domcontentloaded');
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
	});

	test.fixme('expect username saved', async ({ page, context}) => {
		const loginForm = page.locator('#login-form');
		const usernameTextbox = loginForm.getByLabel('Username');
		await usernameTextbox.fill('jaySkee');
		await expect(usernameTextbox).toHaveValue('jaySkee');
		await expect(loginForm.getByRole('button', {name: 'submit'})).toBeVisible();
		await loginForm.getByRole('button', {name: 'submit'}).click();
		await page.waitForLoadState('domcontentloaded');
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
		const username = await getLocalStorageUsername(context);
		expect(username).toBe('jaySkee');
	});

});
