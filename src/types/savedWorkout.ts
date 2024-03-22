import type { TExerciseName } from './exerciseName';

export type TSavedWorkout = {
	name?: string,
	exercises: (TExerciseName | undefined)[],
	time?: {
		startedAt?: number,
		elapsed?: number,
	}
};
