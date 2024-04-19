<script lang="ts">
	import type { PageData } from "./$types";
	import DeckWidget from "$lib/components/decks/DeckWidget.svelte";

	export let data: PageData;
	const { workouts } = data;
</script>

<div class="page-container">
{#each workouts as workout (workout.name)}
	<DeckWidget
		deckName={workout.name}
		description={workout.description}
		workoutSuitExercises={workout.suitExercises}
	/>
{/each}
</div>

<style>
	.page-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		row-gap: 1rem;

    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
	}
</style>

