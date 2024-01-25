import { writable } from 'svelte/store';
import { PlayingCard } from './classes/PlayingCard';
import { ESuit } from './enums/suit';
import { ECardRank } from './enums/cardRank';
import type { TCardRank } from './types/cardRank';
import type { TSuit } from './types/suit';
import { createPlayingCard } from './functions/createPlayingCard';
import type {TPlayingCard} from './types/playingCard';

const createDeckOfCards = () => {
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
}

function createTheDeckOfCards() {
	const { subscribe, set, update } = writable(createDeckOfCards());

	return {
		subscribe,
		shuffle: () => set(createDeckOfCards()),
		pluck: (someRandomNumber: number) => update((deck) => {
			deck.splice(someRandomNumber, 1);
			return deck
		})
	}
}

function usedCards() {
	let emptyArray: TPlayingCard<TCardRank, TSuit>[] = [];
	const { subscribe, update } = writable(emptyArray);

	return {
		subscribe,
		reset: () => update(( array ) => {
			array.splice(0, array.length);
			array = array
			return array
		}),
		add: (playingCard: TPlayingCard<TCardRank, TSuit>) => update((discarded: PlayingCard[]) => {
			discarded.push(playingCard);
			discarded = discarded
			return discarded
		}),

	}

}

function createCurrentCard() {
	let emptyArray: PlayingCard[] = [];
	const { subscribe, update } = writable(emptyArray);

	return {
		subscribe,
		data: (playingCard: PlayingCard) => update((singleCardArray: PlayingCard[]) => {
			singleCardArray.splice(0, singleCardArray.length);
			singleCardArray.push(playingCard);
			singleCardArray = singleCardArray;
			return singleCardArray
		}),
		reset: () => update(( singleCardArray ) => {
			singleCardArray.splice(0, singleCardArray.length);
			singleCardArray = singleCardArray
			return singleCardArray
		}),

	}
}

export const currentCard = createCurrentCard();
export const deckOfCards = createTheDeckOfCards();
export const discardedCards = usedCards();
