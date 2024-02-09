<script lang="ts">
  import WorkoutSelect from '$lib/components/workouts/WorkoutSelect.svelte';
	import SuitExerciseWidget from '$lib/components/workouts/SuitExerciseWidget.svelte';

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
    A scrollable area, with boxes for each exercise
    based on the workout type that is chosen below.
    -->
  </div>

  <WorkoutSelect />
</div>

<style>
  .page-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
</style>
