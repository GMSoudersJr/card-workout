<script lang="ts">
	import {EExerciseNames} from "../../../enums/exerciseNames";

  import type { PageData } from "./$types";

  export let data: PageData;
  const { exercise } = data;

  console.log(exercise);
  const {
    name,
    demos,
    embeds
  } = exercise;

  const exerciseName = EExerciseNames[name as keyof typeof EExerciseNames];
console.log(demos);
console.log("https://www.youtube.com/embed/lsWnuKq9CDU?si=BaiO2A888mCu8M0p")
</script>

<div class="index-exercise-page-container">
  <h1 class="exercise-name">
    {exerciseName}
  </h1>

  {#if embeds}
    <div class="demo-container">
    {#each embeds as embed, i (i)}
      <iframe
        width="560"
        height="315"
        class="demo"
        src={`https://www.youtube.com/embed/${embed}`}
        title="YouTube  video player"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      >
      </iframe>
    {/each}
    </div>
  {/if}

</div>

<style>
  .index-exercise-page-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    justify-items: center;
    align-items: center;

    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .demo-container {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fill, min-content);
    row-gap: 1rem;
  }
  .demo {
    border: 1px solid green;
    width: 100%;
    aspect-ratio: 16 / 9;
    place-self: center;
  }
</style>

