export const EDeckOfCardsInfo = {
	REMAINING_TOTAL: 'Total Remaining',
	REMAINING_SUITS: 'Remaining By Suit',
	REMAINING_RANKS: 'Remaining By Rank'
} as const;

export type EDeckOfCardsInfo = (typeof EDeckOfCardsInfo)[keyof typeof EDeckOfCardsInfo];
