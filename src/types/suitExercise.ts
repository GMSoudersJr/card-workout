import type {TExercise} from "./exercises";
import type {TSuit} from "./suit";

export type TSuitExercise = {
	suit: TSuit | undefined;
	exercise: TExercise | undefined;
};
