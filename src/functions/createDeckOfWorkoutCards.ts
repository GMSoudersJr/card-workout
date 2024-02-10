import type { TSuitExercise } from '../types/suitExercise';
import type { TSuit } from '../types/suit';
import { PlayingCard } from '../classes/playingCard';

export const createDeckOfWorkoutCardsFrom = (
	aSelectionOfSuitExercises: TSuitExercise<TSuit>[] | undefined
) => {
	let result: PlayingCard[] = [];
	const suits = 
}
