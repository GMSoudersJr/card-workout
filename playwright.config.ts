import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	fullyParallel: true,
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
		/*
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], hasTouch: true },
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 7'], hasTouch: true },
		},
		{
			name: 'Mobile Firefox',
			use: { ...devices['Pixel 7'], hasTouch: true },
		},
		*/
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'], hasTouch: true },
		},
	]
};

export default config;
