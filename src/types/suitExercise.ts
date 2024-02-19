import type {TExerciseName} from "./exerciseName";

export type TSuitExercise<TSuit> = {
	suit: TSuit
	exerciseName: TExerciseName | undefined;
	completedReps: number;
};
