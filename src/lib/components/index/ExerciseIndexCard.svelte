<script lang="ts">
	import {linkEmoji, thinkingEmoji} from "$lib/emojis";
	import {EExerciseNames} from "../../../enums/exerciseNames";
	import type {TExercise} from "../../../types/exercise";
	import type {TExerciseName} from "../../../types/exerciseName";

  export let exercise: TExercise<TExerciseName>;
  const exerciseName = EExerciseNames[exercise.name as keyof typeof EExerciseNames];
</script>

<div class="exercise-card">
  <div class="header-and-link">
    <h1 class="oswald-header header">
      {exerciseName.toUpperCase()}
    </h1>
    {#if exercise.demos}
      {#each exercise.demos as demo (demo)}
        {#if  demo === ''}
          <p class="noto-emoji-font emoji">{thinkingEmoji}</p>
        {:else}
          <a href={demo} class="noto-emoji-font emoji link-emoji">{linkEmoji}</a>
        {/if}
      {/each}
    {/if}
  </div>
  {#if exercise.emojis}
  <section class="emoji-section">
  {#each exercise.emojis as emoji (emoji)}
    <p class="noto-emoji-font emoji">{emoji}</p>
  {/each}
  </section>
  {/if}
</div>

<style>
  .header {
    color: #000080;
  }
  a.emoji {
    text-decoration: none;
  }
  .exercise-card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    background: linear-gradient(90deg, #F1F1F1, #FFFFFF) ;
    row-gap: 0.5rem;
    border-radius: 8px;
    border-left: 8px solid #000080;
    padding-left: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .emoji-section {
    display: flex;
    flex-direction: row;
  }
  .emoji {
    font-size: 1.5rem;
    color: #000080;
  }
  .link-emoji {
    color: #259259;
  }
  .header-and-link {
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: min-content;
    justify-content: start;
    align-items: center;
    column-gap: 0.5rem;
  }
</style>

