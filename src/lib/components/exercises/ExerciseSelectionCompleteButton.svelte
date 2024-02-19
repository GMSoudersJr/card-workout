<script lang="ts">
  import {
    suitExercises,
    theDeckOfCards,
    discardedCards,
	theCurrentCard,
  } from "../../../store";
  import { goto } from "$app/navigation";

  async function handleClick() {
    theDeckOfCards.setExercises($suitExercises);
    console.log($theDeckOfCards);
    discardedCards.reset();
    theCurrentCard.reset();
    await goto('/cards');
  }
</script>

<button on:click={handleClick} class="oswald-header">
  LET'S GO!
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
