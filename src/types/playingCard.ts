import type {TExercise} from "./exercises";

export type TPlayingCard<TCardRank, TSuit> = {
	rank: TCardRank;
	suit: TSuit;
	exercise?: TExercise;
	hasBeenPlucked: boolean;
	hasBeenDiscarded: boolean;
	get name(): string;
	get value(): number;
	get symbol(): string;
	get textColor(): string;
};
