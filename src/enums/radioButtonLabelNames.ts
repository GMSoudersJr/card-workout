export const ERadioButtonLabelNames = {
	DECK: 'Deck',
	RANK: 'Rank',
	SUIT: 'Suit',
	REPS: 'Reps',
	TIME: 'Time'
} as const;

export type ERadioButtonLabelNames =
	(typeof ERadioButtonLabelNames)[keyof typeof ERadioButtonLabelNames];
