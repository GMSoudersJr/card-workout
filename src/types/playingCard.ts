import type { TExerciseName } from "./exerciseName";

export type TPlayingCard<TCardRank, TSuit> = {
	rank: TCardRank;
	suit: TSuit;
	exerciseName?: TExerciseName;
	hasBeenPlucked: boolean;
	hasBeenDiscarded: boolean;
	deckIndex: number;
	get name(): string;
	get value(): number;
	get symbol(): string;
	get textColor(): string;
};
