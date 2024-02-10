import type { TSuitExercise } from '../types/suitExercise';
import type { TSuit } from '../types/suit';
import {ESuit} from '../enums/suit';

export const createSuitExercises = () => {
	const suits = Object.keys(ESuit);
	const result = suits.map((suit) => {
		let suitExercise: TSuitExercise<TSuit> = {suit: suit as TSuit, exercise: undefined}
		return suitExercise;
	})
	return result;
};
