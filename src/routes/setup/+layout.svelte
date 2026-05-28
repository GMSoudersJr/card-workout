<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { cardEmoji } from '$lib/emojis';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	<NavAndHeading heading="setup" navEmoji={cardEmoji} altHref="/cards" />
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
		padding: 0.5rem;
	}
</style>
