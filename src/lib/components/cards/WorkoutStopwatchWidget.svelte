<script lang="ts">
	import { formatStopWatchTime } from '$lib/utils';
	import { onMount } from 'svelte';
	import { EStopwatchButtonString } from '../../../enums/stopwatchButtonString';
	import { workoutStopwatch, discardedCards } from '../../../store';

	let displayTime = $state($workoutStopwatch.elapsedTime);

	onMount(async () => {
		workoutStopwatch.updateDisplayIntervalId(
			setInterval(() => {
				displayTime = $workoutStopwatch.elapsedTime;
			}, 10)
		);
	});

	function handlePause() {
		workoutStopwatch.pause();
	}

	function handleContinue() {
		workoutStopwatch.continue();
	}

	let stopwatchTime = $derived(formatStopWatchTime(displayTime));
</script>

<div class="workout-stopwatch-container">
	<h1 class="display-time source-sans-3-text">
		{stopwatchTime}
	</h1>
	{#if $workoutStopwatch.running && displayTime > 0}
		<button
			class="pause-button oswald-header"
			onclick={handlePause}
			disabled={!$workoutStopwatch.running}
		>
			{EStopwatchButtonString.PAUSE}
		</button>
	{:else if !$workoutStopwatch.running && displayTime > 0 && $discardedCards.length < 52}
		<button
			class="continue-button oswald-header"
			onclick={handleContinue}
			disabled={$workoutStopwatch.running}
		>
			{EStopwatchButtonString.RESUME}
		</button>
	{/if}
</div>

<style>
	.workout-stopwatch-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-template-areas:
			'. displayTime .'
			'. stopwatchButton .';
	}
	.display-time {
		color: #000080;
		grid-area: displayTime;
		align-self: end;
		font-size: 2rem;
		text-align: center;
	}
	.pause-button,
	.continue-button {
		align-self: center;
		grid-area: stopwatchButton;
		padding: 5px 0;
		border-radius: 8px;
		color: #000080;
	}
</style>
