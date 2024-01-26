<script lang="ts">
  import PlayingCardWidget from "$lib/components/PlayingCardWidget.svelte";
  import { discardedCards, deckOfCards } from "../../store";

</script>

<main>
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
    grid-template-rows: min-content 1fr min-content;
    justify-content: center;
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
    border-top-left-radius: 8px;
  }
  .discarded-cards::-webkit-scrollbar {
    display: none;
  }
</style>
