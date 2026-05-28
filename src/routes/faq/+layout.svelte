<script lang="ts">
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { exerciseEmoji } from '$lib/emojis';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	<NavAndHeading heading="faq" navEmoji={exerciseEmoji} altHref="/setup" />
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
		padding: 0.5rem;
	}
</style>
