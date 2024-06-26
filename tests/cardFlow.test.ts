import { expect, test, type Page, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/cards');
	await page.waitForLoadState('domcontentloaded');
	await page.getByRole('button', { name: 'Start' }).click();
});
test.describe('user has clicked Start button', () => {
	test(`the first card is expected to be visible`, async ({ page }) => {
		const theFirstCard = page.locator('.playing-card');
		await expect(theFirstCard).toBeVisible();
	});

	test('expect click to discard card', async ({ page }) => {
		await page.locator('.playing-card').click();
		await expect(page.locator('.discarded-cards-list')).toBeVisible();
		await expect(page.locator('.discarded-cards-listitem')).toHaveCount(1);
		await expect(page.locator('.discarded-cards-listitem').locator('.playing-card')).toBeDisabled();
	});

	async function getCenterPositionOf(
		locator: Locator
	): Promise<{ x: number; y: number } | undefined> {
		const boundingBox = await locator.boundingBox();
		if (boundingBox === null) return;
		const result = {
			x: boundingBox.x + boundingBox.width / 2,
			y: boundingBox.y + boundingBox.height / 2
		};

		return result;
	}

	async function mimicSwipe(
		swipeDirection: 'up' | 'down' | 'left' | 'right',
		page: Page,
		position: { x: number; y: number },
		card: Locator
	) {
		if (position === undefined) return;
		await page.mouse.move(position.x, position.y);
		await page.mouse.down();
		await card.dispatchEvent('touchstart');
		switch (swipeDirection) {
			case 'up':
				await page.mouse.move(position.x, position.y - 100);
				break;
			case 'down':
				await page.mouse.move(position.x, position.y + 100);
				break;
			case 'left':
				await page.mouse.move(position.x - 50, position.y);
				break;
			case 'right':
				await page.mouse.move(position.x + 50, position.y);
				break;
		}
		await card.dispatchEvent('touchend');
		// await page.mouse.up();
	}

	test.fixme('expect swipe up to discard card', async ({ page }) => {
		const thePlayingCard = page.locator('.playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('up', page, position, thePlayingCard);

		await expect(page.locator('.discarded-cards-list')).toBeVisible();
		await expect(page.locator('.discarded-cards-listitem')).toHaveCount(1);
		await expect(page.locator('.discarded-cards-listitem').locator('.playing-card')).toBeDisabled();
	});

	test.fixme('expect swipe down to re-pluck', async ({ page }) => {
		const thePlayingCard = page.locator('.playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('down', page, position, thePlayingCard);

		await expect(page.locator('.discarded-cards-list')).toBeVisible();
		await expect(page.locator('.discarded-cards-listitem')).toHaveCount(0);
	});

	test.fixme('expect swipe left to re-pluck', async ({ page }) => {
		const thePlayingCard = page.locator('.playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('left', page, position, thePlayingCard);

		await expect(page.locator('.discarded-cards-list')).toBeVisible();
		await expect(page.locator('.discarded-cards-listitem')).toHaveCount(0);
	});

	test.fixme('expect swipe right to discard card', async ({ page }) => {
		const thePlayingCard = page.locator('.playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('right', page, position, thePlayingCard);

		await expect(page.locator('.discarded-cards-list')).toBeVisible();
		await expect(page.locator('.discarded-cards-listitem')).toHaveCount(1);
		await expect(page.locator('.discarded-cards-listitem').locator('.playing-card')).toBeDisabled();
	});

	test('after clicking the first card, only one card is expected to be enabled', async ({
		page
	}) => {
		await page.locator('.playing-card').click();
		const currentCard = page.locator('.playing-card').locator(':scope:not(:disabled)').nth(1);
		await expect(currentCard).toBeEnabled();
		await expect(currentCard).toHaveCount(1);
	});

	test.describe('continues to click the current card', () => {
		test('expect exercise information to be hidden on each card', async ({ page }) => {
			test.setTimeout(60 * 1_000);
			const firstCard = page.locator('.playing-card');
			const firstCardExerciseInfo = firstCard.locator('.card-exercise-info');
			await expect(firstCardExerciseInfo)
				.toBeHidden()
				.then(async () => {
					await firstCard.click();
				})
				.catch((error) => {
					console.log(error);
				});
			const discardedCardsListItem = page.locator('.discarded-cards-listitem');
			const currentCard = page.locator('.playing-card').locator(':scope:not(:disabled)').nth(1);
			while ((await discardedCardsListItem.count()) < 52) {
				await expect(currentCard)
					.toHaveCount(1)
					.then(async () => {
						const currentCardExerciseInfo = currentCard.locator('.card-exercise-info');
						await expect(currentCardExerciseInfo)
							.toBeHidden()
							.then(async () => {
								await currentCard.click();
							})
							.catch((error) => {
								console.log(error);
							});
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});

		test('all cards have been clicked, the page has expected shuffle button', async ({ page }) => {
			test.setTimeout(60 * 1_000);
			await page.locator('.playing-card').click();
			const discardedCardsListItem = page.locator('.discarded-cards-listitem');
			const currentCard = page.locator('.playing-card').locator(':scope:not(:disabled)').nth(1);
			while ((await discardedCardsListItem.count()) < 52) {
				await expect(currentCard)
					.toHaveCount(1)
					.then(async () => {
						await currentCard.click();
						await page.waitForLoadState('domcontentloaded');
					})
					.catch((error) => {
						console.log(error);
					});
			}
			await expect(discardedCardsListItem).toHaveCount(52);
			await expect(page.getByRole('button', { name: 'Shuffle' })).toBeVisible();
		});
	});
});
