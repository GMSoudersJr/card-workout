import type { TPlayingCard } from '../types/playingCard';
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import {ECardValue} from '../enums/cardValue';
import {ECardSymbol} from '../enums/cardSymbol';

export class PlayingCard implements TPlayingCard<TCardRank, TSuit> {
	suit: TSuit;
	rank: TCardRank;
	constructor(
		suit: TSuit,
		rank: TCardRank
	) {
		this.suit = suit;
		this.rank = rank;
	}
	get name(): string {
		return `${ECardRank[this.rank]} of ${ESuit[this.suit]}`;
	}
	get value(): number {
		return ECardValue[this.rank];
	}
	get symbol(): string {
		return ECardSymbol[this.rank];
	}
};
