import { ERadioButtonLabelNames } from "../../enums/radioButtonLabelNames"

export const radioButtonLabelNames = {
	deck: ERadioButtonLabelNames.DECK,
	rank: ERadioButtonLabelNames.RANK,
	suit: ERadioButtonLabelNames.SUIT,
	reps: ERadioButtonLabelNames.REPS,
};

export const remainingCardsString = 'Remaining:';
export const instructionsAboveTheStartButton = 'press start to begin';
export const instructionsBelowTheStartButton = 'tap the card to discard it';
export const startButtonText = 'start';

export const messageAboveTheStartButton = {
	forPlainCards: [
		'these are plain cards!',
		'press start to begin',
	],
	forExerciseCards: [
		'ready?!',
		'3... 2.. 1.',
	],
};

export const messageBelowTheStartButton = {
	forPlainCards: [
		`discard:  🃏 ⬆ / ➡ `,
		`put back: 🃏 ⬇ / ⬅`,
	],
	forExerciseCards: [
		`complete: 🃏 ⬆ / ➡ `,
		`later: 🃏 ⬇ / ⬅`,
	],
};

export const messageAboveTheShuffleButton = {
	forPlainCards: [
		'you finished the deck',
	],
	forExerciseCards: [
		'workout finished!'
	],
};

export const messageBelowTheShuffleButton = {
	forPlainCards: [
		'shuffling resets the cards',
	],
	forExerciseCards: [
		'shuffling clears your workout and exercises'
	],
};

