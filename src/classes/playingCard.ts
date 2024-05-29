import type { TPlayingCard } from '../types/playingCard';
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import { ECardValue } from '../enums/cardValue';
import { ECardRankSymbol } from '../enums/cardRankSymbol';
import { ESuitColors } from '../enums/suitColors';
import type { TExerciseName } from '../types/exerciseName';

export class PlayingCard implements TPlayingCard<TCardRank, TSuit> {
	suit: TSuit;
	rank: TCardRank;
	constructor(suit: TSuit, rank: TCardRank) {
		this.suit = suit;
		this.rank = rank;
		this.exerciseName = undefined;
		this.hasBeenPlucked = false;
		this.hasBeenDiscarded = false;
		this.deckIndex = 0;
	}
	hasBeenPlucked: boolean;
	hasBeenDiscarded: boolean;
	deckIndex: number;
	exerciseName?: TExerciseName;
	get name(): string {
		return `${ECardRank[this.rank]} of ${ESuit[this.suit]}`;
	}
	get value(): number {
		return ECardValue[this.rank];
	}
	get symbol(): string {
		return ECardRankSymbol[this.rank];
	}
	get textColor(): string {
		return ESuitColors[this.suit as keyof typeof ESuitColors];
	}
}
