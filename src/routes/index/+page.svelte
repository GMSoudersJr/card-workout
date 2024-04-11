<script lang="ts">
  import type { PageData } from "./$types";
  import SearchBar from "$lib/components/index/SearchBar.svelte";
  import ExerciseIndexCard from "$lib/components/index/ExerciseIndexCard.svelte";
	import FilterSection from "$lib/components/index/FilterSection.svelte";

  function handleSearchChange(event: CustomEvent) {
    exerciseList = exercises.filter((exercise) => {
      return exercise.name?.includes(event.detail.value.toUpperCase())
    });
  };

  function handleFilterUpdate(event: CustomEvent) {
    console.log(event.detail);
  }

  export let data: PageData;
  const { exercises } = data;
  let exerciseList = exercises;
</script>

<div class="index-page-container">
  <SearchBar
    on:searchingForExercise={handleSearchChange}
  />
  <details>
    <summary class="oswald-header">FILTERS:</summary>
    <FilterSection on:filterUpdate={handleFilterUpdate} />
  </details>
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

