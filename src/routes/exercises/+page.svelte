<script lang="ts">
	import SuitExerciseWidget from '$lib/components/exercises/SuitExerciseWidget.svelte';
</script>

<div class="page-container">
  <div
    id="workout-by-suit-container"
    class="workout-by-suit-container"
  >
    <SuitExerciseWidget />
  </div>
  <div
    id="exercises-based-workout"
    class="exercises-based-workout"
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
    grid-template-rows: auto;
  }
</style>
