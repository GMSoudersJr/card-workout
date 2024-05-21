<script lang="ts">
	import { goto } from '$app/navigation';
	import { activitiesButtonText } from '$lib/strings/forCardsPage';
	import { setFocus } from '$lib/utils';
	import {
		discardedCards,
		suitExercises,
		theCurrentCard,
		theDeckOfCards,
		workoutStopwatch
	} from '../../../store';

	async function handleClick() {
		await goto('/activities');
		theDeckOfCards.shuffle();
		discardedCards.reset();
		theCurrentCard.reset();
		suitExercises.reset();
		workoutStopwatch.reset();
	}
</script>

<button class="oswald-header" on:click={handleClick} use:setFocus>
	{activitiesButtonText.toUpperCase()}
</button>

<style>
	button {
		justify-self: center;
		padding: 8px 15px;
		border-radius: 8px;
		width: 100px;
		font-size: large;
		color: #000080;
	}
</style>
