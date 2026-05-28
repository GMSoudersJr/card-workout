<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { exerciseEmoji } from '$lib/emojis';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	<NavAndHeading heading="library" navEmoji={exerciseEmoji} altHref="/setup" />
	{@render children?.()}
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
