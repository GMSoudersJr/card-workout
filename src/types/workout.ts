import type { TExerciseName } from './exerciseName';

export type TWorkout<TSuitExercise> = {
	name?: string | undefined,
	exercises: (TExerciseName | undefined)[],
	time?: {
		start?: number | undefined,
		end?: number | undefined
	} | undefined
};

