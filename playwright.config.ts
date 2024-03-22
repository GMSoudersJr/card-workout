import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview -- --host',
		port: 4173
	},
	testDir: 'tests',
	fullyParallel: true,
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], hasTouch: true },
			testMatch: /keyboard/
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 7'], hasTouch: true },
			testIgnore: /android/,
		},
		/*
		{
			name: 'Mobile Firefox',
			use: { ...devices['Pixel 7'], hasTouch: true },
			testIgnore: /android/,
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'], hasTouch: true },
			testIgnore: /android/,
		},
		{
			name: 'android',
			testMatch: /android/,
			use: { hasTouch: true }
		}
		*/
	]
};

export default config;
