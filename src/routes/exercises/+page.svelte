<script lang="ts">
	import SuitExerciseWidget from '$lib/components/exercises/SuitExerciseWidget.svelte';
  import Considerations from '$lib/components/exercises/Considerations.svelte';
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
</div>

<style>
  .page-container {
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1rem;
    justify-self: center;
  }
</style>
