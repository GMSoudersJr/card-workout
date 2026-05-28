<script lang="ts">
	import { exerciseEmoji } from '$lib/emojis';
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	<NavAndHeading heading="activities" navEmoji={exerciseEmoji} altHref="/setup" />
	{@render children?.()}
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
