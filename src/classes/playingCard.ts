import type { TPlayingCard } from '../types/playingCard';
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import {ECardValue} from '../enums/cardValue';
import {ECardRankSymbol} from '../enums/cardRankSymbol';

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
		return ECardRankSymbol[this.rank];
	}
	get textColor(): string {
		if ( this.suit == "DIAMONDS" || this.suit == "HEARTS" ) {
			return '#FF0000';
		} else {
			return '#000000';
		}
	}
};
