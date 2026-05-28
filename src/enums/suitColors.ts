export const ESuitColors = {
	CLUBS: '#000000',
	DIAMONDS: '#FF0000',
	HEARTS: '#FF0000',
	SPADES: '#000000'
} as const;

export type ESuitColors = (typeof ESuitColors)[keyof typeof ESuitColors];
