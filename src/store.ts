import { writable, derived } from 'svelte/store';
import { PlayingCard } from './classes/playingCard';
import { ESuit } from './enums/suit';
import { ECardRank } from './enums/cardRank';
import type { TCardRank } from './types/cardRank';
import type { TSuit } from './types/suit';
import { createPlayingCard } from './functions/createPlayingCard';
import type {TPlayingCard} from './types/playingCard';
import { createDeckOfCards } from './functions/createDeckOfCards';
import type {TExercise} from './types/exercises';
import type {TSuitExercise} from './types/suitExercise';


function createTheDeckOfCards() {
	const { subscribe, set, update } = writable(createDeckOfCards());
	return {
		subscribe,
		shuffle: () => set(createDeckOfCards()),
		pluck: (someRandomNumber: number) => update((deck) => {
			deck[someRandomNumber].hasBeenPlucked = true;
			return deck;
		}),
	};
};

function createSuitExercise(suit: TSuit) {
	const thisSuitExercise: TSuitExercise<TSuit> = {
		suit: suit,
		exercise: undefined
	};

	const { subscribe, set, update } = writable(thisSuitExercise);

	return {
		subscribe,
		updateExercise: (exercise: TExercise) =>
			update((result) => {
			result.exercise = exercise;
			return result;
		}),
		reset: () => set({suit: suit, exercise: undefined}),
	};
};

function usedCards() {
	let emptyArray: TPlayingCard<TCardRank, TSuit>[] = [];
	const { subscribe, update } = writable(emptyArray);

	return {
		subscribe,
		reset: () => update(( array ) => {
			array.splice(0, array.length);
			array = array;
			return array;
		}),
		add: (playingCard: TPlayingCard<TCardRank, TSuit>) => update((discarded: PlayingCard[]) => {
			playingCard.hasBeenDiscarded = true;
			discarded.push(playingCard);
			discarded = discarded;
			return discarded;
		}),

	};

};

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

	};
};

export const currentCard = createCurrentCard();
export const theDeckOfCards = createTheDeckOfCards();
export const discardedCards = usedCards();

export const theRemainingDeck = derived(theDeckOfCards, ($theDeckOfCards) => {
	return $theDeckOfCards.filter((card) => {
		return !card.hasBeenPlucked;
	});
});

export const clubsExercise = createSuitExercise("CLUBS");
export const diamondsExercise = createSuitExercise("DIAMONDS");
export const heartsExercise = createSuitExercise("HEARTS");
export const spadesExercise = createSuitExercise("SPADES");

export const randomCardIndex = derived( theDeckOfCards, ($theDeckOfCards) => {
	let result = -1;
	let randomIndexNumber = Math.floor(Math.random() * $theDeckOfCards.length);

	const recursiveIndexFinder = (index: number): number => {
		if ($theDeckOfCards[index].hasBeenPlucked) {
			index = Math.floor(Math.random() * $theDeckOfCards.length);
			return recursiveIndexFinder(index);
		} else {
			return index;
		}
	};

	const haveNotBeenPlucked = (card: PlayingCard) => !card.hasBeenPlucked;

	if ($theDeckOfCards.some(haveNotBeenPlucked)) {
		result = recursiveIndexFinder(randomIndexNumber);
	} else {
		result = randomIndexNumber;
	};
	return result;
});
