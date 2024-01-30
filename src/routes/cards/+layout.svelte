<script lang="ts">
  import PlayingCardWidget from "$lib/components/PlayingCardWidget.svelte";
  import { discardedCards, deckOfCards } from "../../store";
  import CardsInfoWidget from "$lib/components/CardsInfoWidget.svelte";

</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="nav-link">
      ⬅ Home
    </a>
    <h1 class="heading">Cards</h1>
  </div>
  <aside class="discarded-cards-aside">
    <div id="discarded-cards-only" class="discarded-cards">
    {#if $discardedCards}
    {#each $discardedCards as card (card.name)}
      <PlayingCardWidget
        id={`${card.name}-discarded`}
        rankSymbol={card.rank}
        suitSymbol={card.suit}
        textColor={card.textColor}
        disabled
      />
    {/each}
    {/if}
    </div>
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
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content)   1fr min-content;
    justify-content: center;
    justify-items: center;
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
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #259259;
    overflow: hidden;
  }
  .discarded-cards {
    width: calc(100% - 20px);
    display: grid;
    height: calc(161.8px / 3);
    grid-template-columns: repeat(54, minmax(25px, 50px));
    grid-template-rows: 1fr;
    overflow-x: scroll;
    overflow-y: clip;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-top: 10px;
    justify-self: center;
  }
  .discarded-cards::-webkit-scrollbar {
    display: none;
  }
  .deck-of-cards-info-aside {
    width: 100%;
    height: 25svh;
    background-color: #D9D9D9;
  }
</style>
