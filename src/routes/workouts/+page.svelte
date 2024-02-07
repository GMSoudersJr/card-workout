<script lang="ts">
  import WorkoutSelect from '$lib/components/workouts/WorkoutSelect.svelte';
</script>

<div class="page-container">
  <div
    id="workout-by-suit-container"
    class="workout-by-suit-container"
  >
    <!--
    Will have 4 sections, one for each suit
    where exercises will be chosen for each.
    -->
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
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
</style>
