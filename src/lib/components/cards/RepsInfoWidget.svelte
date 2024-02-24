<script lang="ts">
  import { suitExercises } from "../../../store";
	import RepsProgressBox from "./RepsProgressBox.svelte";

</script>

<div 
  class="reps-info-widget"
  data-testid="reps-info-widget"
>
  {#each $suitExercises as data (data.suit)}
    <RepsProgressBox reps={data.completedReps} exercise={data.exercise?.name}/>
  {/each}
</div>

<style>
  .reps-info-widget {
    padding: 10px;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    column-gap: 1.4rem;
    row-gap: 0.8rem;
  }
</style>

