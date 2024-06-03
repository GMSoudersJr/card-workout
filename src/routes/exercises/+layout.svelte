<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { cardEmoji } from '$lib/emojis';
</script>

<main>
	<NavAndHeading heading="exercises" navEmoji={cardEmoji} altHref="/cards" />
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
		padding: 0.5rem;
	}
</style>
