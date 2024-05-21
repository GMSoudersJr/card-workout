<script lang="ts">
	import SuitExerciseWidget from '$lib/components/exercises/SuitExerciseWidget.svelte';
	import Considerations from '$lib/components/exercises/Considerations.svelte';
</script>

<div class="page-container">
	<Considerations />
	<SuitExerciseWidget />
</div>

<style>
	.page-container {
		max-width: 800px;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		justify-self: center;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, min-content);
		row-gap: 1rem;

		overflow-x: hidden;
		overflow-y: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.page-container::-webkit-scrollbar {
		display: none;
	}
</style>
