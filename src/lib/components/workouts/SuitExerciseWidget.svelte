<script lang="ts">
  import {
    clubsExercise,
    diamondsExercise,
    heartsExercise,
    spadesExercise,
  } from '../../../store'
	import SuitExerciseSelect from './SuitExerciseSelect.svelte';

  const suitExercises = [
    clubsExercise,
    diamondsExercise,
    heartsExercise,
    spadesExercise,
  ];
</script>

<div
  id="suit-exercise-widget"
  class="suit-exercise-widget"
>
  <h3>Select an exercise for each suit</h3>
  <section class="suit-exercise-container">
  {#each suitExercises as suitExercise (suitExercise)}
    <SuitExerciseSelect {suitExercise} />
  {/each}
  </section>

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

