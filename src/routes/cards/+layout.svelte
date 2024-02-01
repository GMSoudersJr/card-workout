<script lang="ts">
  import { flip } from "svelte/animate";
  import { receive } from "$lib/transition";
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
    <ul id="discarded-cards-only" class="discarded-cards">
    {#if $discardedCards}
    {#each $discardedCards as card (card.name)}
      <li
        in:receive={{ key: card.name }}
        animate:flip={{ duration: 500 }}
      >
        <PlayingCardWidget
          id={`${card.name}-discarded`}
          rankSymbol={card.rank}
          suitSymbol={card.suit}
          textColor={card.textColor}
          disabled
        />
      </li>
    {/each}
    {/if}
    </ul>
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
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #259259;
    overflow: hidden;
    padding-bottom: 10px;
    border-radius: 8px;
  }
  .discarded-cards {
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: repeat(55, minmax(25px, 50px));
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
  li {
    list-style: none;
  }
</style>
