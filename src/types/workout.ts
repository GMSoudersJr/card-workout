import type { TExerciseName } from './exerciseName';

export type TWorkout<TSuitExercise> = {
	name?: string | undefined,
	exercises: (TExerciseName | undefined)[],
	time?: {
		startedAt?: number | undefined,
		elapsed?: number | undefined
	} | undefined
};

