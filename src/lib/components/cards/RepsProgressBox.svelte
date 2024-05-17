<script lang="ts">
  import { EExerciseNames } from "../../../enums/exerciseNames";
  import type { TExerciseName } from "../../../types/exerciseName";

  export let reps: number;
  export let exercise: TExerciseName | undefined;
  $: exerciseName = EExerciseNames[exercise as keyof typeof EExerciseNames];
</script>

{#if exercise}
<div
  class="reps-info-box"
>
  <label for={`${exerciseName.toUpperCase()}`} class="exercise oswald-header" >
    <p class="reps-info-exercise-name">
      {exerciseName.toUpperCase()}
    </p>
    <p class="reps-info-reps">
      {reps}
    </p>
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
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 0.5rem;
  }
  .exercise {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: 1fr;
    color: #000080;
    font-size: 0.75rem;
    width: 100%;
  }
  .reps-info-exercise-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .reps-info-reps {
    place-self: end;
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

