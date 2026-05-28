<script lang="ts">
	import type { TExerciseName } from '../../../types/exerciseName';
	import { repeatEmoji } from '$lib/emojis';
	import {
		discardedCards,
		suitExercises,
		theCurrentCard,
		theDeckOfCards,
		workoutName
	} from '../../../store';
	import { ESuit } from '../../../enums/suit';
	import type { TSuit } from '../../../types/suit';
	import { goto } from '$app/navigation';

	const suits = Object.keys(ESuit);

	async function handleClick() {
		exercisesToRepeat.forEach((exercise, index) => {
			if (exercise === undefined || exercise === null) return;
			suitExercises.updateExercise(suits[index] as TSuit, exercise);
		});

		if (thisWorkoutName === undefined || thisWorkoutName === null) {
			workoutName.reset();
		} else {
			workoutName.rename(thisWorkoutName);
		}

		theDeckOfCards.setExercises($suitExercises);
		discardedCards.reset();
		theCurrentCard.reset();

		await goto('/cards');
	}

	interface Props {
		thisWorkoutName: string | undefined;
		exercisesToRepeat: (TExerciseName | undefined)[];
	}

	let { thisWorkoutName, exercisesToRepeat }: Props = $props();
</script>

<button class="workout-repeat-button noto-emoji-font" onclick={handleClick}>
	{repeatEmoji}
</button>

<style>
	.workout-repeat-button {
		border-radius: 8px;
		padding: 3px 6px;
		color: #000080;
	}
</style>
