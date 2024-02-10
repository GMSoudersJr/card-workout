<script lang="ts">
  import { suitExercises, } from '../../../store'
	import SuitExerciseSelect from './SuitExerciseSelect.svelte';

  function handleClick() {
    console.log($suitExercises);
  }
  function handleExcerciseSelected(event: CustomEvent) {
    console.log('Exercise Selected:', event.detail);
    const {suit, exercise} = event.detail;
    suitExercises.updateExercise(suit, exercise);
    console.log($suitExercises);
  }
  $: someSuitExercisesHaveNotBeenChosen = $suitExercises.some(( entry ) => {return entry.exercise === undefined})
</script>

<div
  id="suit-exercise-widget"
  class="suit-exercise-widget"
>
  <h3>Select an exercise for each suit</h3>
  <section class="suit-exercise-container">
  {#each $suitExercises as suitExercise (suitExercise)}
    <SuitExerciseSelect {suitExercise} on:exerciseSelected={handleExcerciseSelected} />
  {/each}
  </section>
  {#if someSuitExercisesHaveNotBeenChosen}
    <p>100 reps per suit!</p>
  {:else}
    <button
      class="set-workouts-button"
      on:click={handleClick}
    >
      Let's Go!
    </button>
  {/if}

</div>

<style>
  .suit-exercise-widget {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1.5rem;
    justify-items: center;
  }
  .suit-exercise-container {
    display: grid;
    row-gap: 1rem;
  }
</style>

