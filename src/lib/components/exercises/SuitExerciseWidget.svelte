<script lang="ts">
	import { suitExercises } from '../../../store';
	import ExampleWorkout from './ExampleWorkout.svelte';
	import ExerciseSelectionCompleteButton from './ExerciseSelectionCompleteButton.svelte';
	import ResetExerciseSelectionsButton from './ResetExerciseSelectionsButton.svelte';
	import SuitExerciseSelect from './SuitExerciseSelect.svelte';

	function handleExcerciseSelected(event: CustomEvent) {
		const { suit, exerciseName } = event.detail;
		suitExercises.updateExercise(suit, exerciseName);
	}
	$: someSuitExercisesHaveNotBeenChosen = $suitExercises.some((entry) => {
		return entry.exercise?.name === undefined;
	});
</script>

<div id="suit-exercise-widget" class="suit-exercise-widget">
	<section class="suit-exercise-container">
		<h3 class="selection-header oswald-header">SELECT YOUR EXERCISES BELOW</h3>
		{#each $suitExercises as suitExercise (suitExercise)}
			<SuitExerciseSelect {suitExercise} on:exerciseSelected={handleExcerciseSelected} />
		{/each}
	</section>
	{#if someSuitExercisesHaveNotBeenChosen}
		<ExampleWorkout />
	{:else}
		<ExerciseSelectionCompleteButton />
		<ResetExerciseSelectionsButton />
	{/if}
</div>

<style>
	.suit-exercise-widget {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, min-content);
		row-gap: 1.5rem;
	}
	.suit-exercise-container {
		display: grid;
		row-gap: 1rem;
	}
	.selection-header {
		color: #000080;
	}
</style>
