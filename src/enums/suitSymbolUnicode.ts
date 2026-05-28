export const ESuitSymbolUnicode = {
	CLUBS: '&#9827',
	DIAMONDS: '&#9830',
	HEARTS: '&#9829',
	SPADES: '&#9824'
} as const;

export type ESuitSymbolUnicode = (typeof ESuitSymbolUnicode)[keyof typeof ESuitSymbolUnicode];
