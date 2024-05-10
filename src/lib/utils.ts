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

export function formatStopWatchTime(milliseconds: number): string {
	let result = `00:00.000`;
	if (milliseconds === undefined || milliseconds === null) return result;
	const elapsedSeconds = milliseconds / 1000;
	let minutes = Math.floor(elapsedSeconds / 60);
	let minutesString: string;
	if ( minutes < 10 ) {
		minutesString = `0${minutes.toString()}`
	} else {
		minutesString = minutes.toString();
	}
	let seconds = (elapsedSeconds % 60);
	let secondsString: string;
	if ( seconds < 10 ) {
		secondsString = `0${seconds.toFixed(2)}`
	} else {
		secondsString = seconds.toFixed(2)
	}
	result = `${minutesString}:${secondsString}`;
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
		return workout.time?.startedAt === workoutStartTime
	});
	workouts.splice(indexOfWorkoutToDelete, 1);
	localStorage.setItem('workouts', JSON.stringify(workouts));
};

export async function reformatLocalStorageWorkouts(): Promise<TSavedWorkout[]> {
	const localStorageWorkouts = getLocalStorageWorkouts();
	if ( localStorageWorkouts.length === 0 ) return localStorageWorkouts;
	const reformatedLocalStorage = localStorageWorkouts.map((workout) => {
		if (!!workout.time?.start && !!workout.time.end) {
			workout.time.startedAt = workout.time.start;
			workout.time.elapsed = workout.time.end - workout.time.start;
		}
		workout.name = workout.name;
		workout.exercises = workout.exercises
		return workout;
	});
	return reformatedLocalStorage;
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
