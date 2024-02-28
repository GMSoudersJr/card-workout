import { type BrowserContext } from '@playwright/test';

async function getLocalStorageData(browswerContext: BrowserContext) {
	let result: {name: string, value: string}[];
	const storageState = await browswerContext.storageState();
	const { origins } = storageState;
	result = origins.map(( origin ) => {
		return origin.localStorage.map(( entry ) => {
			return entry;
		});
	}).flat();

	return result;
};

export async function getLocalStorageUsername(
	browswerContext: BrowserContext
): Promise<string | undefined> {
	let result: string;
	const localStorageData = await getLocalStorageData(browswerContext);
	const localStorageUsername = localStorageData.find(( entry ) => {
		return entry.name === 'username';
	});
	if (localStorageUsername === null || localStorageUsername === undefined) return

	result = localStorageUsername.value;
	return result;
};
