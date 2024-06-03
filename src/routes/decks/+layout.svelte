<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { cardIndexEmoji } from '$lib/emojis';
</script>

<main>
	<NavAndHeading heading="decks" navEmoji={cardIndexEmoji} altHref="/index" />
	<slot />
</main>

<style>
	main {
		height: 100%;
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
