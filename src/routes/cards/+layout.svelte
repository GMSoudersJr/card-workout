<script lang="ts">
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { receive, send } from "$lib/transition";
  import PlayingCardWidget from "$lib/components/PlayingCardWidget.svelte";
  import { discardedCards, deckOfCards } from "../../store";
  import CardsInfoWidget from "$lib/components/CardsInfoWidget.svelte";
	import DiscardedCardsWidget from "$lib/components/DiscardedCardsWidget.svelte";
</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="nav-link">
      ⬅ Home
    </a>
    <h1 class="heading">Cards</h1>
  </div>
  <aside class="discarded-cards-aside">
    <DiscardedCardsWidget />
  </aside>
  <slot />
  <aside class="deck-of-cards-info-aside">
    {#if $deckOfCards}
      <CardsInfoWidget />
    {/if}
  </aside>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 181.8px 1fr min-content;
  }
  .nav-and-heading {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-template-areas: "nav heading .";
  }
  .nav-link {
    grid-area: nav;
    font-size: large;
    text-decoration: none;
    color: #000000;
  }
  .heading {
    grid-area: heading;
    place-self: center;
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
    background-color: #D9D9D9;
  }
</style>
