import type { Page } from '@playwright/test';
import { EExerciseNames } from '../../src/enums/exerciseNames';
import { ESuit } from '../../src/enums/suit';
import { links } from '../../src/lib/strings/forHomepage';

export const [exercise1, exercise2, exercise3, exercise4] = Object.keys(EExerciseNames);
export const [clubs, diamonds, hearts, spades] = Object.keys(ESuit);

export async function selectExercisesAndStart(page: Page): Promise<void> {
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('link', { name: links.exercises.toUpperCase() }).click();
	await page.waitForLoadState('domcontentloaded');

	await page.locator(`#${clubs}-exercise-select`).selectOption(exercise1);
	await page.locator(`#${diamonds}-exercise-select`).selectOption(exercise2);
	await page.locator(`#${hearts}-exercise-select`).selectOption(exercise3);
	await page.locator(`#${spades}-exercise-select`).selectOption(exercise4);

	await page.getByRole('button', { name: "Let's Go" }).click();
	await page.waitForLoadState('domcontentloaded');
}
