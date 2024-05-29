import { type BrowserContext } from '@playwright/test';
import type { TSavedWorkout } from '../../src/types/savedWorkout';

export async function getLocalStorageData(browswerContext: BrowserContext) {
	const storageState = await browswerContext.storageState();
	const { origins } = storageState;
	const result = origins
		.map((origin) => {
			return origin.localStorage.map((entry) => {
				return entry;
			});
		})
		.flat();

	return result;
}

export async function setLocalStorageWorkouts(
	browswerContext: BrowserContext,
	workouts: string
): Promise<void> {
	await browswerContext.addInitScript((storage) => {
		window.localStorage.setItem('workouts', storage);
	}, workouts);
}

export async function getLocalStorageWorkouts(
	browswerContext: BrowserContext
): Promise<TSavedWorkout[] | undefined> {
	const localStorageData = await getLocalStorageData(browswerContext);
	const localStorageWorkouts = localStorageData.find((entry) => {
		return entry.name === 'workouts';
	});
	if (localStorageWorkouts === undefined || localStorageWorkouts === null) return;
	const result = JSON.parse(localStorageWorkouts.value);

	return result;
}

export async function getLocalStorageUsername(
	browswerContext: BrowserContext
): Promise<string | undefined> {
	const localStorageData = await getLocalStorageData(browswerContext);
	const localStorageUsername = localStorageData.find((entry) => {
		return entry.name === 'username';
	});
	if (localStorageUsername === null || localStorageUsername === undefined) return;

	const result = localStorageUsername.value;
	return result;
}
