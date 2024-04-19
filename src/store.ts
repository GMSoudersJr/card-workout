import { writable, derived } from 'svelte/store';
import { PlayingCard } from './classes/playingCard';
import type { TCardRank } from './types/cardRank';
import type { TSuit } from './types/suit';
import type { TPlayingCard } from './types/playingCard';
import { createDeckOfCards } from './functions/createDeckOfCards';
import type { TExerciseName } from './types/exerciseName';
import type { TSuitExercise } from './types/suitExercise';
import { createSuitExercises } from './functions/createSuitExercises';
import { createWorkout } from './functions/createWorkout';
import type { TExerciseCategory } from './types/exerciseCategory';
import type { TExercisePosition } from './types/exercisePosition';
import type { TExerciseVariation } from "./types/exerciseVariation";
import type { TBodyPart } from "./types/bodyPart";

function createWorkoutNameStore() {
	let workoutName = '';

	const { subscribe, set, update } = writable(workoutName);

	return {
		subscribe,
		rename: (newName: string) => update(( workoutName ) => {
			workoutName = newName;
			return workoutName;
		}),
		reset: () => set('')
	}
}

function createCheckboxStore() {
  let checkedBoxes = {
    category: [] as TExerciseCategory[],
    position: [] as TExercisePosition[],
    target: [] as TBodyPart[],
    variation: [] as TExerciseVariation[]
  };

	const { subscribe, set, update } = writable(checkedBoxes);

	return {
		subscribe,
		updateCategory: (value: TExerciseCategory) => update((checkedBoxes) => {
			if (checkedBoxes.category.includes(value)) {
				checkedBoxes.category.splice(checkedBoxes.category.indexOf(value), 1);
			} else {
				checkedBoxes.category.push(value);
			}

			return checkedBoxes;
		}),
		updatePosition: (value: TExercisePosition) => update((checkedBoxes) => {
			if (checkedBoxes.position.includes(value)) {
				checkedBoxes.position.splice(checkedBoxes.position.indexOf(value), 1);
			} else {
				checkedBoxes.position.push(value);
			}

			return checkedBoxes;
		}),
		updateTarget: (value: TBodyPart) => update((checkedBoxes) => {
			if (checkedBoxes.target.includes(value)) {
				checkedBoxes.target.splice(checkedBoxes.target.indexOf(value), 1);
			} else {
				checkedBoxes.target.push(value);
			}

			return checkedBoxes;
		}),
		updateVariation: (value: TExerciseVariation) => update((checkedBoxes) => {
			if (checkedBoxes.variation.includes(value)) {
				checkedBoxes.variation.splice(checkedBoxes.variation.indexOf(value), 1);
			} else {
				checkedBoxes.variation.push(value);
			}

			return checkedBoxes;
		}),
		reset: () => set({
			category: [] as TExerciseCategory[],
			position: [] as TExercisePosition[],
			target: [] as TBodyPart[],
			variation: [] as TExerciseVariation[]
		})
	}
}

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

function createStopwatch() {
	const stopwatch = {
		running: false,
		startedAt: 0,
		paused: {
			elapsedTime: 0,
		},
		continuedAt: 0,
		elapsedTime: 0,
		_intervalId: 0,
		displayIntervalId: 0,
	};

	const { subscribe, set, update } = writable(stopwatch);

	return {
		subscribe,

		start: () => update((stopwatch) => {
			stopwatch.running = true;
			stopwatch.startedAt = Date.now();
			stopwatch._intervalId = setInterval(() => {
				stopwatch.elapsedTime = Date.now() - stopwatch.startedAt
			}, 10);
			return stopwatch;
		}),

		stop: () => update((stopwatch) => {
			stopwatch.running = false;
			clearInterval(stopwatch._intervalId);
			clearInterval(stopwatch.displayIntervalId);
			return stopwatch;
		}),

		pause: () => update((stopwatch) => {
			clearInterval(stopwatch._intervalId);
			stopwatch.running = false;
			stopwatch.paused.elapsedTime = stopwatch.elapsedTime;
			return stopwatch;
		}),

		continue: () => update((stopwatch) => {
			stopwatch.running = true;
			stopwatch.continuedAt = Date.now();
			stopwatch._intervalId = setInterval(() => {
				stopwatch.elapsedTime = stopwatch.paused.elapsedTime + (Date.now() - stopwatch.continuedAt);
			}, 10);
			
			return stopwatch;
		}),

		updateDisplayIntervalId: (displayIntervalId: number) => update((stopwatch) => {
			stopwatch.displayIntervalId = displayIntervalId
			return stopwatch;
		}),

		clearIntervals: () => update((stopwatch) => {
			clearInterval(stopwatch.displayIntervalId);
			clearInterval(stopwatch._intervalId);
			return stopwatch;
		}),

		reset: () => set({
			running: false,
			startedAt: 0,
			paused: {
				elapsedTime: 0,
			},
			continuedAt: 0,
			elapsedTime: 0,
			_intervalId: 0,
			displayIntervalId: 0,
		})

	}

}

function createSuitExercisesStore() {
	const suitExercises = createSuitExercises();
	const { subscribe, set, update } = writable(suitExercises);

	return {
		subscribe,
		updateExercise: (suit: TSuit, exercise: TExerciseName | undefined) => update((result) => {
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
export const workoutStopwatch = createStopwatch();
export const theExerciseIndexCheckboxStore = createCheckboxStore();
export const workoutName = createWorkoutNameStore();

export const theRemainingDeck = derived(theDeckOfCards, ($theDeckOfCards) => {
	return $theDeckOfCards.filter((card) => {
		return !card.hasBeenPlucked;
	});
});

// Need this to not be readable, though. Need to keep track of the time, too.
export const theWorkout = derived(suitExercises, ($suitExercises) => {
	return createWorkout($suitExercises);
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
