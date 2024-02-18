<script lang="ts">
  import { EExerciseNames } from "../../../enums/exerciseNames";
  import type { TExerciseName } from "../../../types/exerciseName";

  export let reps: number;
  export let exercise: TExerciseName | undefined;
  $: exerciseName = EExerciseNames[exercise as keyof typeof EExerciseNames];
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
    grid-template-columns: 135px;
    grid-template-rows: repeat(2, min-content);
    border-radius: 4px;
    align-items: center;
    gap: 8px;
  }
  .exercise {
    color: #000080;
    font-size: 0.75rem;
    width: 100%;
  }
  .reps {
    width: 100%;
    height: 5px;
    border-radius: 8px;
    background-color: #259259;
    box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
  }
  .reps::-webkit-progress-bar {
    background-color: #FFFFFF;
    border-radius: 8px;
  }
  .reps::-webkit-progress-value {
    background-color: #39FF14;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 3px #000080;
  }
</style>

