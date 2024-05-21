<script lang="ts">
	import type { PageData } from './$types';
	import DeckWidget from '$lib/components/decks/DeckWidget.svelte';

	export let data: PageData;
	const { workouts } = data;
</script>

<div class="page-container">
	<h3 class="subheading oswald-header">QUICK START WORKOUTS</h3>
	<ul class="decks-list" id="decks-list">
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
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, min-content);
		row-gap: 1rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;

		overflow-x: hidden;
		overflow-y: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.subheading {
		text-align: center;
		color: #259259;
	}
	.decks-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: repeat(auto-fill, min-content);
		gap: 1rem;
	}
	.decks-list > li {
		list-style: none;
	}
</style>
