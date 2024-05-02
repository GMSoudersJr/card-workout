<script lang="ts">
	import type { PageData } from "./$types";
	import DeckWidget from "$lib/components/decks/DeckWidget.svelte";

	export let data: PageData;
	const { workouts } = data;
</script>

<div class="page-container">
	<h3 class="subheading oswald-header">
		QUICK START WORKOUTS
	</h3>
	<ul id="decks-list">
	{#each workouts as workout (workout.name)}
		<li class="decks-listitem">
			<DeckWidget
				deckName={workout.name}
				description={workout.description}
				workoutSuitExercises={workout.suitExercises}
			/>
		</li>
	{/each}
	</ul>
</div>

<style>
	.page-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content auto;
		row-gap: 1rem;

    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
	}
	.subheading {
		text-align: center;
		color: #259259;
	}
</style>

