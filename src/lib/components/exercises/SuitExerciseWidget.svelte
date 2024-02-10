<script lang="ts">
  import { suitExercises } from '../../../store'
	import ExerciseSelectionCompleteButton from './ExerciseSelectionCompleteButton.svelte';
	import SuitExerciseSelect from './SuitExerciseSelect.svelte';

  function handleExcerciseSelected(event: CustomEvent) {
    const {suit, exercise} = event.detail;
    suitExercises.updateExercise(suit, exercise);
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
    <ExerciseSelectionCompleteButton />
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

