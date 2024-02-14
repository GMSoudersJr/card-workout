<script lang="ts">
  import { suitExercises } from "../../store";
	import RepsMeterBox from "./RepsMeterBox.svelte";

</script>

<div class="reps-info-widget">
  {#each $suitExercises as data (data.suit)}
    <RepsMeterBox reps={data.completedReps} exercise={data.exercise}/>
  {/each}
</div>

<style>
  .reps-info-widget {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 3rem;
  }
</style>

