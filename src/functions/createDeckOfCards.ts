import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import { PlayingCard } from '../classes/PlayingCard'
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import type {DeckOfCardsConstructor} from '../constructors/deckOfCardsConstructor';
import type {TDeckOfCards} from '../types/deckOfCards';

export const createDeckOfCards = (
	deckOfCards: DeckOfCardsConstructor
): TDeckOfCards => {
	return new deckOfCards();
}
/*
export const deckOfCards = () => {
	let result: PlayingCard[] = [];
	const suits = Object.keys(ESuit);
	const ranks = Object.keys(ECardRank);
	for (let i = 0; i < suits.length; i++) {
		let suit = suits[i];
		for (let j = 0; j < ranks.length; j++) {
			let rank = ranks[j];
			const playingCard = new PlayingCard(suit as TSuit, rank as TCardRank);
			result.push(playingCard);
		}
	}
	return result;
}
*/
