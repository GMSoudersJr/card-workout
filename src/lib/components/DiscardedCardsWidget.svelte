<script lang="ts">
  import { receive } from "$lib/transition";
  import { flip } from "svelte/animate";
  import PlayingCardWidget from "./PlayingCardWidget.svelte";
  import { discardedCards } from "../../store";

</script>

<ul id="discarded-cards-only" class="discarded-cards">
{#if $discardedCards}
{#each $discardedCards as card (card.name)}
  <li
    in:receive={{ key: card.name }}
    animate:flip={{ duration: 200 }}
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

<style>
  .discarded-cards {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    overflow-anchor: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .discarded-cards::-webkit-scrollbar {
    display: none;
  }
  li:not(:first-child) {
    margin-left: -75px;
  }
  li {
    list-style: none;
  }
</style>

