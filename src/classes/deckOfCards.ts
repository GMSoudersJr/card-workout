import type { TDeckOfCards } from '../types/deckOfCards';
import { PlayingCard } from './playingCard';
import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';

import { createPlayingCard } from '../functions/createPlayingCard';

const initialDeckOfCards = () => {
	let result: PlayingCard[] = [];
	const suits = Object.keys(ESuit);
	const ranks = Object.keys(ECardRank);
	for (let i = 0; i < suits.length; i++) {
		let suit = suits[i];
		for (let j = 0; j < ranks.length; j++) {
			let rank = ranks[j];
			const playingCard = createPlayingCard(PlayingCard, rank as TCardRank, suit as TSuit);
			result.push(playingCard);
		}
	}
	return result;
};

export class DeckOfCards implements TDeckOfCards {
	cards: PlayingCard[];
	cardsLeft: number;
	topCard: PlayingCard | undefined;
	hasNext: boolean;
	hasPrevious: boolean;
	usedCards: PlayingCard[] | undefined;
	constructor() {
		this.cards = initialDeckOfCards();
		this.cardsLeft = this.cards.length;
		this.hasNext = this.cards.length > 1;
		this.topCard = this.cards.at(0);
		this.usedCards = [];
		this.hasPrevious = this.usedCards.length > 0;
	}
}
