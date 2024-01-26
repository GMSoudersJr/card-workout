<script lang="ts">
  import PlayingCardWidget from "$lib/components/PlayingCardWidget.svelte";
  import { discardedCards, deckOfCards } from "../../store";

</script>

<main>
  <aside id="discarded-cards-aside" class="discarded-cards">
    {#if  $discardedCards}
    {#each $discardedCards as card (card.name)}
      <PlayingCardWidget
        id={`${card.name}-discarded`}
        rankSymbol={card.rank}
        suitSymbol={card.suit}
        disabled
      />
    {/each}
    {/if}
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
  .discarded-cards {
    display: grid;
    width: 320px;
    height: calc(161.8px / 3);
    grid-template-columns: repeat(51, 25px);
    grid-template-rows: 1fr;
    overflow-x: scroll;
    overflow-y: clip;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-left: 1px;
    padding-top: 2px;
    padding-right: 1px;
    background: #D9D9D9;
  }
  .discarded-cards::-webkit-scrollbar {
    display: none;
  }
  .discarded-cards:last-child {
    width: 25px;
  }
</style>
