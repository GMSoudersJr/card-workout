export const ECardRank = {
	TWO: 'Two',
	THREE: 'Three',
	FOUR: 'Four',
	FIVE: 'Five',
	SIX: 'Six',
	SEVEN: 'Seven',
	EIGHT: 'Eight',
	NINE: 'Nine',
	TEN: 'Ten',
	JACK: 'Jack',
	QUEEN: 'Queen',
	KING: 'King',
	ACE: 'Ace'
} as const;

export type ECardRank = (typeof ECardRank)[keyof typeof ECardRank];
