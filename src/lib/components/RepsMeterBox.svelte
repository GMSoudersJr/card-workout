<script lang="ts">
	import {EExercises} from "../../enums/exercises";
	import type {TExercise} from "../../types/exercises";

  export let reps: number;
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
  <progress
    id={`${exerciseName.toUpperCase()}`}
    class="reps source-sans-3-text"
    min="0"
    max="100"
    title="reps"
    value={reps}
  >
    {reps}
  </progress>
</div>
{/if}

<style>
  .reps-info-box {
    display: grid;
    grid-template-columns: 140px;
    grid-template-rows: repeat(2, min-content);
    border-radius: 4px;
    align-items: center;
    gap: 4px;
  }
  .exercise {
    color: #000080;
    font-size: 0.75rem;
    width: 100%;
  }
  .reps {
    width: 100%;
    background: #259259;
    height: 5px;
    border-radius: 30px;
    transition: ease;
  }
</style>

