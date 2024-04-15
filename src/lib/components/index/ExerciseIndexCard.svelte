<script lang="ts">
	import {thinkingEmoji} from "$lib/emojis";

	import {EExerciseNames} from "../../../enums/exerciseNames";

	import type {TExercise} from "../../../types/exercise";
	import type {TExerciseName} from "../../../types/exerciseName";


  export let exercise: TExercise<TExerciseName>;
  const exerciseName = EExerciseNames[exercise.name as keyof typeof EExerciseNames];
</script>

<div class="exercise-card">
  <h1 class="oswald-header">{exerciseName.toUpperCase()}</h1>
  {#if exercise.demos}
    {#each exercise.demos as demo (demo)}
      <span class="demo">Demo:
      {#if  demo === ''}
        <p>{thinkingEmoji}</p>
      {:else}
        <a href={demo}>link</a>
      {/if}
      </span>
    {/each}
  {/if}
</div>

<style>
  .exercise-card {
    display: grid;
    border-radius: 8px;
    border: 1px solid #259259;
    padding: 5px 10px 
  }
  .demo {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: min-content;
    align-items: center;
    column-gap: 0.25rem;
  }
</style>

