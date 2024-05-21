<script lang="ts">
	import { startButtonText } from '$lib/strings/forCardsPage';
	import { exercisesHaveNotBeenChosen, setFocus } from '$lib/utils';

	import {
		theDeckOfCards,
		theCurrentCard,
		randomCardIndex,
		suitExercises,
		workoutStopwatch
	} from '../../../store';

	function handleStart() {
		const randomCard = $theDeckOfCards.at($randomCardIndex);
		theDeckOfCards.pluck($randomCardIndex);
		randomCard && theCurrentCard.data(randomCard);

		if ($suitExercises.some(exercisesHaveNotBeenChosen)) {
			return;
		} else {
			workoutStopwatch.start();
		}
	}
</script>

<button on:click={handleStart} class="oswald-header" use:setFocus>
	{startButtonText.toUpperCase()}
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
