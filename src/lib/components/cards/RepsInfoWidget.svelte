<script lang="ts">
	import {cubicInOut} from "svelte/easing";

  import { fade, slide } from "svelte/transition";
  import { suitExercises } from "../../../store";
	import RepsProgressBox from "./RepsProgressBox.svelte";

</script>

<div 
  class="reps-info-widget"
  data-testid="reps-info-widget"
  in:slide={{ axis: 'y', delay: 400, duration: 400, easing: cubicInOut }}
  out:slide={{ axis: 'y', delay: 400, duration: 400, easing: cubicInOut }}
>
  {#each $suitExercises as data (data.suit)}
    <RepsProgressBox reps={data.completedReps} exercise={data.exerciseName}/>
  {/each}
</div>

<style>
  .reps-info-widget {
    padding: 5px;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    column-gap: 1.4rem;
    row-gap: 1rem;
  }
</style>

