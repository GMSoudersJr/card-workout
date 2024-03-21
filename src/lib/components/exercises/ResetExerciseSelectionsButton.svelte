<script lang="ts">
  import {
    suitExercises,
    theDeckOfCards,
    discardedCards,
    theCurrentCard,
    workoutStopwatch,
  } from "../../../store";

  import { setFocus } from '$lib/utils';

  async function handleClick() {
    suitExercises.reset();
    theDeckOfCards.shuffle();
    discardedCards.reset();
    theCurrentCard.reset();
    workoutStopwatch.reset();
  }
</script>

<button
  on:click={handleClick}
  class="oswald-header"
  use:setFocus
>
  RESET SELECTIONS
</button>

<style>
  button {
    border-radius: 8px;
    font-size: 1.5rem;
    color: #000080;
    width: 100%;
    height: 60px;
  }
</style>
