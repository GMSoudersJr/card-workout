<script lang="ts">
  import { receive } from "$lib/transition";
  import { flip } from "svelte/animate";
  import PlayingCardWidget from "./PlayingCardWidget.svelte";
  import { discardedCards } from "../../store";

</script>

<ul
  id="discarded-cards-only"
  class="discarded-cards"
  data-testid="discarded-cards-list"
>
{#if $discardedCards}
{#each $discardedCards as card (card.name)}
  <li
    in:receive={{ key: card.name }}
    animate:flip={{ duration: 200 }}
    data-testid="discarded-card-listitem"
  >
    <PlayingCardWidget
      id={`${card.name}-discarded`}
      rankSymbol={card.rank}
      exercise={card.exercise}
      suitSymbol={card.suit}
      textColor={card.textColor}
      reps={card.value}
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

