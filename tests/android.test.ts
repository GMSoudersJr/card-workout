import {
	expect,
	test,
	_android as android,
	type AndroidDevice,
	type BrowserContext
} from '@playwright/test';

let device: AndroidDevice;
let context: BrowserContext;

test.beforeAll('connect to android device', async () => {
	// Connect to the device
	[device] = await android.devices();
	console.log(`Model: ${device.model()}`);
	console.log(`Serial: ${device.serial()}`);
	await device.shell('am force-stop com.android.chrome');
	context = await device.launchBrowser({ baseURL: 'http://192.168.1.101:4173/' });
});

/*
test.afterAll('disconnect from android device', async () => {
	// await page.close();
	await context.close();
	// close the device
	await device.close();
});
*/

test.describe('on android device', () => {
	test.fixme('homepage', async () => {
		const page = await context.newPage();
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		console.log('homepage', await page.evaluate(() => window.location.href));
		console.log('homepage pages', context.pages().length);
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
	});

	test.fixme('go to about page', async () => {
		const page = await context.newPage();
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		const aboutLink = page.getByRole('link', { name: 'ABOUT' });
		await aboutLink.click();
		await page.waitForLoadState('domcontentloaded');
		console.log('about', await page.evaluate(() => window.location.href));
		console.log('about pages', context.pages().length);
		await expect(page.getByRole('heading', { name: 'ABOUT', level: 1 })).toBeVisible();
	});

	test.fixme('go to cards page', async () => {
		const page = await context.newPage();
		await page.goto('/');
		await page.waitForLoadState('domcontentloaded');
		const aboutLink = page.getByRole('link', { name: 'CARDS' });
		await aboutLink.click();
		await page.waitForLoadState('domcontentloaded');
		console.log('cards', await page.evaluate(() => window.location.href));
		console.log('cards pages', context.pages().length);
		await expect(page.getByRole('heading', { name: 'SUIT YOURSELF', level: 1 })).toBeVisible();
	});
});

test.afterAll(async () => {
	console.log('after all pages', context.pages().length);
	await context.close();
	// await device.close();
});
