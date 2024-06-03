<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { exerciseEmoji } from '$lib/emojis';
</script>

<main>
	<NavAndHeading heading="index" navEmoji={exerciseEmoji} altHref="/exercises" />
	<slot />
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		max-width: 50rem;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
		justify-content: center;
		row-gap: 1rem;
		padding: 0.5rem;
	}
</style>
