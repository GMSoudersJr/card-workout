<script lang="ts">
	import SuitExerciseWidget from '$lib/components/exercises/SuitExerciseWidget.svelte';
  import Considerations from '$lib/components/exercises/Considerations.svelte';
  import ExampleWorkout from '$lib/components/exercises/ExampleWorkout.svelte';
</script>

<div class="page-container">
  <div
    id="considerations-container"
    class="considerations-container"
  >
    <Considerations />

  </div>
  <div
    id="workout-by-suit-container"
    class="workout-by-suit-container"
  >
    <SuitExerciseWidget />
  </div>
  <div
    id="example-container"
    class="example-container"
  >
    <!--
    Possibly an area that shows a video of
    the exercise that has been chosen above.
    -->
  </div>

</div>

<style>
  .page-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 1rem;
  }
</style>
