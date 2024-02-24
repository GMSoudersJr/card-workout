import type { TExerciseName } from "./exerciseName";
import type { TExercise } from "./exercise";

export type TSuitExercise<TSuit> = {
	suit: TSuit
	exercise: TExercise<TExerciseName> | undefined;
	completedReps: number;
};
