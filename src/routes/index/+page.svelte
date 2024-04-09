<script lang="ts">
  import type { PageData } from "./$types";
  import SearchBar from "$lib/components/index/SearchBar.svelte";
  import ExerciseIndexCard from "$lib/components/index/ExerciseIndexCard.svelte";
	import FilterBox from "$lib/components/index/FilterBox.svelte";
  function handleSearchChange(event: CustomEvent) {
    console.log(event.detail)
    exerciseList = exercises.filter((exercise) => {
      return exercise.name?.includes(event.detail.value.toUpperCase())
    });
  }

  export let data: PageData;
  const { exercises } = data;
  let exerciseList = exercises;
</script>

<div class="index-page-container">
  <SearchBar
    on:searchingForExercise={handleSearchChange}
  />
  <FilterBox />
  <section class="exercise-index-cards-container">
    {#each exerciseList as exercise (exercise.name)}
    <ExerciseIndexCard {exercise}/>
    {/each}
  </section>
</div>

<style>
  .index-page-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 2rem;

    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .exercise-index-cards-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 1rem;

  }
</style>

