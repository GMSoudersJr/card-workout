import type { TExerciseName } from './exerciseName';

export type TSavedWorkout = {
	name?: string,
	exercises: (TExerciseName | undefined)[],
	time?: {
		start?: number,
		end?: number
	}
};
