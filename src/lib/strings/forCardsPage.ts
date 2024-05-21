import { cardEmoji, downEmoji, leftEmoji, rightEmoji, upEmoji } from '$lib/emojis';
import { ERadioButtonLabelNames } from '../../enums/radioButtonLabelNames';

export const radioButtonLabelNames = {
	deck: ERadioButtonLabelNames.DECK,
	rank: ERadioButtonLabelNames.RANK,
	suit: ERadioButtonLabelNames.SUIT,
	reps: ERadioButtonLabelNames.REPS,
	time: ERadioButtonLabelNames.TIME
};

export const remainingCardsString = 'Remaining:';
export const instructionsAboveTheStartButton = 'press start to begin';
export const instructionsBelowTheStartButton = 'tap the card to discard it';

export const startButtonText = 'start';
export const shuffleButtonText = 'shuffle';
export const activitiesButtonText = `activities`;

export const messageAboveTheStartButton = {
	forPlainCards: ['these are plain cards!', 'press start to begin'],
	forExerciseCards: ['ready?!', 'set!']
};

const discardDirections = `${cardEmoji} <span class="noto-emoji-font">${upEmoji}</span> / <span class="noto-emoji-font">${rightEmoji}</span>`;
const putBackDirections = `${cardEmoji} <span class="noto-emoji-font">${downEmoji}</span> / <span class="noto-emoji-font">${leftEmoji}</span>`;

export const messageBelowTheStartButton = {
	forPlainCards: [`DISCARD: ${discardDirections}`, `PUT BACK: ${putBackDirections}`],
	forExerciseCards: [`COMPLETE: ${discardDirections}`, `LATER: ${putBackDirections}`]
};

export const messageAboveTheShuffleButton = {
	forPlainCards: ['you finished the deck'],
	forExerciseCards: ['workout finished!']
};

export const messageBelowTheShuffleButton = {
	forPlainCards: ['shuffling resets the cards'],
	forExerciseCards: ['See your time(s) in activities']
};
