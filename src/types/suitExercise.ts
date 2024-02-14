import type {TExercise} from "./exercises";

export type TSuitExercise<TSuit> = {
	suit: TSuit
	exercise: TExercise | undefined;
	completedReps: number;
};
