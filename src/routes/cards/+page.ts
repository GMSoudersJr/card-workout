import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: "PLAY TIME! | SUIT YOURSELF",
		description: `Tap Start and let the fun begin. Interact with cards to discard them or put them back for later. On the bottom of the page, check stats like how many cards remain (in the deck, by rank, or by suit). During a workout, exercise rep data and a timer are visible. Have fun!`
	}
}
