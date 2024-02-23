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
	forPlainCards: 'these are plain cards! press start to begin',
	forExerciseCards: 'press start to begin your workout'
};

export const messageBelowTheStartButton = {
	forPlainCards: 'tap card to discard it',
	forExerciseCards: 'complete the reps, tap the card'
};

export const messageAboveTheShuffleButton = {
	forPlainCards: 'deck complete',
	forExerciseCards: 'workout finished'
};

export const messageBelowTheShuffleButton = {
	forPlainCards: 'shuffling resets the cards',
	forExerciseCards: 'shuffling clears your workout and exercises'
};

