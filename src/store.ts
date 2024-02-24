import { writable, derived } from 'svelte/store';
import { PlayingCard } from './classes/playingCard';
import type { TCardRank } from './types/cardRank';
import type { TSuit } from './types/suit';
import type { TPlayingCard } from './types/playingCard';
import { createDeckOfCards } from './functions/createDeckOfCards';
import type { TExerciseName } from './types/exerciseName';
import type { TSuitExercise } from './types/suitExercise';
import { createSuitExercises } from './functions/createSuitExercises';

function createTheDeckOfCards() {
	const { subscribe, set, update } = writable(createDeckOfCards());
	return {
		subscribe,
		shuffle: () => set(createDeckOfCards()),
		pluck: (someRandomNumber: number) => update((deck) => {
			deck[someRandomNumber].hasBeenPlucked = true;
			return deck;
		}),
		discard: (someRandomNumber: number) => update((deck) => {
			deck[someRandomNumber].hasBeenDiscarded = true;
			return deck;
		}),
		setExercises: (anArrayOfSuitExercises: TSuitExercise<TSuit>[]) =>
			set(createDeckOfCards(anArrayOfSuitExercises)),

		putBack: (theDeckIndexOfTheCurrentCard: number) => update((deck) => {
			deck[theDeckIndexOfTheCurrentCard].hasBeenPlucked = false;
			return deck;
		}),
	};
};

function createSuitExercisesStore() {
	const suitExercises = createSuitExercises();
	const { subscribe, set, update } = writable(suitExercises);

	return {
		subscribe,
		updateExercise: (suit: TSuit, exercise: TExerciseName) => update((result) => {
			const isThisSuit = (entry: TSuitExercise<TSuit>) => entry.suit === suit;
			const indexOfThisSuit = result.findIndex(isThisSuit);
			result = result.with(indexOfThisSuit, {
				suit: suit,
				completedReps: 0,
				exercise: {
					name: exercise
				}
			});

			return result;
		}),
		addReps: (aDiscardedCard: TPlayingCard<TCardRank, TSuit>) => update((result) => {
			const theSuitOfTheDiscardedCard = aDiscardedCard.suit;
			const theValueOfTheDiscardedCard = aDiscardedCard.value;
			const ofThisSuit = (entry: TSuitExercise<TSuit>) => entry.suit === theSuitOfTheDiscardedCard;
			const indexOfThisSuit = result.findIndex(ofThisSuit);
			const updatedData: TSuitExercise<TSuit> = {
				suit: result[indexOfThisSuit].suit,
				completedReps: result[indexOfThisSuit].completedReps + theValueOfTheDiscardedCard,
				exercise: {
					name: result[indexOfThisSuit].exercise?.name,
				}
			}
			result = result.with(indexOfThisSuit, updatedData);
			return result
		}),

		reset: () => set(suitExercises),
	}
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

function createTheCurrentCard() {
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

export const theCurrentCard = createTheCurrentCard();
export const theDeckOfCards = createTheDeckOfCards();
export const discardedCards = usedCards();
export const suitExercises = createSuitExercisesStore();


export const theRemainingDeck = derived(theDeckOfCards, ($theDeckOfCards) => {
	return $theDeckOfCards.filter((card) => {
		return !card.hasBeenPlucked;
	});
});

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
