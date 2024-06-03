<script lang="ts">
	import CardsInfoWidget from '$lib/components/cards/CardsInfoWidget.svelte';
	import DiscardedCardsWidget from '$lib/components/cards/DiscardedCardsWidget.svelte';
	import NavAndHeading from '$lib/components/NavAndHeading.svelte';
	import { exerciseEmoji } from '$lib/emojis';
</script>

<main>
	<NavAndHeading heading="suit yourself" navEmoji={exerciseEmoji} altHref="/exercises" />
	<aside class="discarded-cards-aside">
		<DiscardedCardsWidget />
	</aside>
	<slot />
	<aside class="deck-of-cards-info-aside">
		<CardsInfoWidget />
	</aside>
</main>

<style>
	main {
		height: 100%;
		max-width: 50rem;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 181.8px 1fr min-content;
		padding: 0.5rem;
	}
	.discarded-cards-aside {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		background: #259259;
		overflow: hidden;
		padding: 10px;
		border-radius: 8px;
	}
	.deck-of-cards-info-aside {
		width: 100%;
		height: 25svh;
		background-color: #d9d9d9;
		display: grid;
		padding: 1rem;
		padding-bottom: 0;
	}
</style>
