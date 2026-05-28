export const EReps = {
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
	TEN: 10,
	SIXTEEN: 16
} as const;

export type EReps = (typeof EReps)[keyof typeof EReps];
