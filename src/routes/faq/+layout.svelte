<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { exerciseEmoji } from '$lib/emojis';
</script>

<main>
	<NavAndHeading heading="faq" navEmoji={exerciseEmoji} altHref="/exercises" />
	<slot />
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
		padding: 0.5rem;
	}
</style>
