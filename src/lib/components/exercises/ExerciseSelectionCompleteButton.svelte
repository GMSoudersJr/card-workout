<script lang="ts">
  import {
    suitExercises,
    theDeckOfCards,
    discardedCards,
    theCurrentCard,
    workoutStopwatch,
  } from "../../../store";
  import { goto } from "$app/navigation";
  import { setFocus } from '$lib/utils';
	import type { TSuitExercise } from "../../../types/suitExercise";
  import type { TSuit } from "../../../types/suit";

  async function handleClick() {
    if ( $workoutStopwatch.elapsedTime > 0) {
      workoutStopwatch.reset();
    }
    theDeckOfCards.setExercises($suitExercises);
    discardedCards.reset();
    theCurrentCard.reset();
    await goto('/cards');
  }
  const repsHaveBeenCompleted = (exercise: TSuitExercise<TSuit>) =>
    exercise.completedReps > 0;
  let disabled = $suitExercises.some(repsHaveBeenCompleted);
</script>

<button
  on:click={handleClick}
  class="oswald-header"
  use:setFocus
  {disabled}
>
  {#if disabled}
    YOU GOT THIS!
  {:else}
    LET'S GO!
  {/if}
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
