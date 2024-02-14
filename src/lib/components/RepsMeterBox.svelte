<script lang="ts">
	import {EExercises} from "../../enums/exercises";
	import type {TExercise} from "../../types/exercises";

  export let reps: number = 25;
  export let exercise: TExercise | undefined;
  $: exerciseName = EExercises[exercise as keyof typeof EExercises];
</script>

{#if exercise}
<div
  data-testid="reps-info-box"
  class="reps-info-box"
>
  <label for={`${exerciseName.toUpperCase()}`} class="exercise oswald-header" >
    {exerciseName.toUpperCase()}: {reps}
  </label>
  <meter
    id={`${exerciseName.toUpperCase()}`}
    class="reps source-sans-3-text"
    min="0"
    max="100"
    value={reps}
  >
    {reps}
  </meter>
</div>
{/if}

<style>
  .reps-info-box {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    border-radius: 4px;
    align-items: center;
    gap: 4px;
  }
  .exercise {
    color: #000080;
    font-size: small;
  }
</style>

