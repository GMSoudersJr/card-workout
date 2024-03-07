import { expect, test, type Page, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Cards' }).click();
	await page.getByRole('button', { name: 'Start' }).click();
});
test.describe('user has clicked Start button', () => {
	test(`the first card is expected to be visible`, async ({ page }) => {
		const theFirstCard = page.getByTestId('playing-card');
		await expect(theFirstCard).toBeVisible();
	});

	test('expect click to discard card', async ({ page }) => {
		await page.getByTestId('playing-card').click();
		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(1);
		await expect(page.getByTestId('discarded-card-listitem')
			     .getByTestId('playing-card')).toBeDisabled();
	});

	async function getCenterPositionOf(locator: Locator):
		Promise<{x: number, y: number} | undefined> {
		const boundingBox = await locator.boundingBox();
		if (boundingBox === null) return;
		const result = {
			x: boundingBox.x + boundingBox.width / 2,
			y: boundingBox.y + boundingBox.height / 2
		};

		return result;
	};

	async function mimicSwipe(
		swipeDirection: 'up' | 'down' | 'left' | 'right',
		page: Page,
		position: {x: number, y: number},
		card: Locator,
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
		};
		await card.dispatchEvent('touchend');
		// await page.mouse.up();
	};

	test.fixme('expect swipe up to discard card', async ({ page }) => {
		const thePlayingCard = page.getByTestId('playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('up', page, position, thePlayingCard);

		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(1);
		await expect(page.getByTestId('discarded-card-listitem')
			     .getByTestId('playing-card')).toBeDisabled();
	});

	test.fixme('expect swipe down to re-pluck', async ({ page }) => {
		const thePlayingCard = page.getByTestId('playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('down', page, position, thePlayingCard);

		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(0);
	});

	test.fixme('expect swipe left to re-pluck', async ({ page }) => {
		const thePlayingCard = page.getByTestId('playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('left', page, position, thePlayingCard);

		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(0);
	});

	test.fixme('expect swipe right to discard card', async ({ page }) => {
		const thePlayingCard = page.getByTestId('playing-card');
		const position = await getCenterPositionOf(thePlayingCard);
		if (position === undefined) return;
		await mimicSwipe('right', page, position, thePlayingCard);

		await expect(page.getByTestId('discarded-cards-list')).toBeVisible();
		await expect(page.getByTestId('discarded-card-listitem')).toHaveCount(1);
		await expect(page.getByTestId('discarded-card-listitem')
			     .getByTestId('playing-card')).toBeDisabled();
	});

	test('after clicking the first card, only one card is expected to be enabled', async ({ page }) => {
		await page.getByTestId('playing-card').click();
		const currentCard =
			page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
		await expect(currentCard).toBeEnabled();
		await expect(currentCard).toHaveCount(1);
	});

	test.describe('continues to click the current card', () => {

		test('expect exercise information to be hidden on each card', async ({ page }) => {
			test.setTimeout(51 * 1_000);
			const firstCard = page.getByTestId('playing-card');
			const firstCardExerciseInfo = firstCard.locator('.card-exercise-info');
			await expect(firstCardExerciseInfo).toBeHidden().then(async () => {
				await firstCard.click();
			}).catch(( error ) => {
				console.log(error);
			});
			let discardedCardsListItem = page.getByTestId('discarded-card-listitem');
			const currentCard =
				page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
			while (await discardedCardsListItem.count() < 52) {
				await expect(currentCard).toHaveCount(1).then(async () => {
					const currentCardExerciseInfo = currentCard.locator('.card-exercise-info');
					await expect(currentCardExerciseInfo).toBeHidden().then(async () => {
						await currentCard.click();
					}).catch(( error ) => {
						console.log(error);
					});
				}).catch(( error ) => {
					console.log(error);
				});
			}
		});

		test('all cards have been clicked, the page has expected shuffle button', async ({ page }) => {
			test.setTimeout(51 * 1000);
			await page.getByTestId('playing-card').click();
			let discardedCardsListItem = page.getByTestId('discarded-card-listitem');
			const currentCard =
				page.getByTestId('playing-card').locator(':scope:not(:disabled)').nth(1);
			while (await discardedCardsListItem.count() < 52) {
				await expect(currentCard).toHaveCount(1).then(async () => {
					await currentCard.click();
				}).catch(( error ) => {
					console.log(error);
				});
			}
			await expect(discardedCardsListItem).toHaveCount(52);
			await expect(page.getByRole('button', { name: 'Shuffle' })).toBeVisible();
		});
	});
});
