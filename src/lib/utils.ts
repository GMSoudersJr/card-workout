import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import { PlayingCard } from '../classes/playingCard';
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import type { TSuitExercise } from '../types/suitExercise';
import type { TSavedWorkout } from '../types/savedWorkout';

export const createDeckOfCards = () => {
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

export const thisYear = () => {
	const date = new Date(Date.now());
	return date.getFullYear();
}

export function setFocus(element: HTMLElement) {
	element.focus();
	return {
		destroy() {
		}
	}
};

export const exercisesHaveNotBeenChosen = (entry: TSuitExercise<TSuit>) => {
	return entry.exercise?.name === undefined;
}

export function getLocalStorageWorkouts():TSavedWorkout[] {
	let result: TSavedWorkout[];
	const localStorageWorkoutState = localStorage.getItem('workouts');
	if (localStorageWorkoutState === null || localStorageWorkoutState === undefined) {
		result = [];
	} else {
		result = JSON.parse(localStorageWorkoutState) as TSavedWorkout[];
	}
	return result
};

export function deleteWorkoutFromLocalStorageWith(workoutStartTime: number | undefined) {
	const workouts = getLocalStorageWorkouts();
	const indexOfWorkoutToDelete = workouts.findIndex((workout) => {
		return workout.time?.start === workoutStartTime
	});
	workouts.splice(indexOfWorkoutToDelete, 1);
	localStorage.setItem('workouts', JSON.stringify(workouts));
};

export function clickOutside(node: Node) {
	const handleClick = (event: Event) => {
		const target = event.target as Node;
		if (!node.contains(target)) {
			node.dispatchEvent(new CustomEvent('outclick', {detail: 'clicked outside'}));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	}
}
