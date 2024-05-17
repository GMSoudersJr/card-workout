<script lang="ts">
  import { receive } from "$lib/transition";
  import { flip } from "svelte/animate";
  import PlayingCardWidget from "./PlayingCardWidget.svelte";
  import { discardedCards } from "../../../store";

</script>

<ul
  id="discarded-cards-only"
  class="discarded-cards-list"
>
  {#if $discardedCards}
    {#each $discardedCards as card (card.name)}
    <li
      in:receive={{ key: card.name }}
      animate:flip={{ duration: 200 }}
      class="discarded-cards-listitem"
    >
      <PlayingCardWidget
        id={`${card.name}-discarded`}
        rankSymbol={card.rank}
        exerciseName={card.exerciseName}
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
  .discarded-cards-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    overflow-anchor: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .discarded-cards-list::-webkit-scrollbar {
    display: none;
  }
  li:not(:first-child) {
    margin-left: -75px;
    & button {
          box-shadow: -2px 0px 3.236px #000000;
    }
  }
  li {
    list-style: none;
  }
</style>

