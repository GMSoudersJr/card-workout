import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import { PlayingCard } from '../classes/playingCard'
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import { createPlayingCard } from './createPlayingCard';
import type { TSuitExercise } from '../types/suitExercise';
import type { TExerciseName } from '../types/exerciseName';

export const createDeckOfCards = (
	aSelectionOfSuitExercises?: TSuitExercise<TSuit>[]
) => {
	let result: PlayingCard[] = [];
	let index: number = 0;
	const suits = Object.keys(ESuit);
	const ranks = Object.keys(ECardRank);
	for (let i = 0; i < suits.length; i++) {
		let suit = suits[i];
		let exerciseName: TExerciseName | undefined;
		if (aSelectionOfSuitExercises) {
			const thisSuitExercise = aSelectionOfSuitExercises.find((entry) => {
				return entry.suit === suit;
			});
			exerciseName = thisSuitExercise?.exerciseName;
		}
		for (let j = 0; j < ranks.length; j++) {
			let rank = ranks[j];
			const playingCard = createPlayingCard(PlayingCard, rank as TCardRank, suit as TSuit);
			playingCard.exerciseName = exerciseName;
			playingCard.index = index;
			result.push(playingCard);
			index++;
		}
	}
	return result;
}

