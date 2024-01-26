<script lang="ts">
  import PlayingCardWidget from "$lib/components/PlayingCardWidget.svelte";
  import { discardedCards, deckOfCards } from "../../store";

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
    {#if  $discardedCards}
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
  <aside>
  </aside>
</main>

<style>
  main {
    width: max-content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content) 1fr min-content;
    justify-content: center;
  }
  .nav-and-heading {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    grid-template-areas: "nav heading .";
  }
  .nav-link {
    grid-area: nav;
    font-size: large;
    padding-left: 5px;
    text-decoration: none;
    color: #000000;
  }
  .heading {
    grid-area: heading;
    place-self: center;
  }
  .discarded-cards-aside {
    width: 320px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #259259;
    overflow: hidden;
  }
  .discarded-cards {
    width: 300px;
    display: grid;
    height: calc(161.8px / 3);
    grid-template-columns: repeat(51, 25px);
    grid-template-rows: 1fr;
    overflow-x: scroll;
    overflow-y: clip;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-top: 5px;
    justify-self: center;
  }
  .discarded-cards::-webkit-scrollbar {
    display: none;
  }
</style>
