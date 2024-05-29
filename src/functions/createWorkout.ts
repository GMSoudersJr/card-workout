import type { TSuitExercise } from '../types/suitExercise';
import type { TSuit } from '../types/suit';
import type { TWorkout } from '../types/workout';

export const createWorkout = (
	suitExercises: TSuitExercise<TSuit>[]
): TWorkout<TSuitExercise<TSuit>[]> => {
	const exercises = suitExercises.map((entry) => {
		if (entry.exercise === undefined || entry.exercise === null) return;
		return entry.exercise.name;
	});
	const result = {
		name: undefined,
		exercises: exercises,
		time: undefined
	};
	return result;
};
