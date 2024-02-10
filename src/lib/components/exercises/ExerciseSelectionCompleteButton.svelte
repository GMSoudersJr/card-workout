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
    discardedCards.reset();
    theCurrentCard.reset();
    await goto('/cards');
  }
</script>

<button on:click={handleClick}>
  Let's Go!
</button>

<style>
  button {
    justify-self: center;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: medium;
    color: #000080;
  }
</style>
