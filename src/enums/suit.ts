export const ESuit = {
	CLUBS: 'Clubs',
	DIAMONDS: 'Diamonds',
	HEARTS: 'Hearts',
	SPADES: 'Spades'
} as const;

export type ESuit = (typeof ESuit)[keyof typeof ESuit];
