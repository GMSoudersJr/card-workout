<script lang="ts">
  import type { PageData } from "./$types";
  import type { TExercisePosition } from "../../types/exercisePosition";
  import SearchBar from "$lib/components/index/SearchBar.svelte";
  import ExerciseIndexCard from "$lib/components/index/ExerciseIndexCard.svelte";
	import FilterSection from "$lib/components/index/FilterSection.svelte";
	import type {TExerciseCategory} from "../../types/exerciseCategory";
	import type {TExerciseVariation} from "../../types/exerciseVariation";
	import type {TBodyPart} from "../../types/bodyPart";

  let exerciseNameSearchString: "";
  function handleSearchChange(event: CustomEvent) {
    exerciseList = exercises.filter((exercise) => {
      exerciseNameSearchString = event.detail.value.toUpperCase();
      return exercise.name?.includes(exerciseNameSearchString);
    });
  };

  function handleFilterUpdate(event: CustomEvent) {
    const filters = event.detail.filter;
    const checkedPositions = filters.position as TExercisePosition[];
    const checkedCategories = filters.category as TExerciseCategory[];
    const checkedVariations = filters.variation as TExerciseVariation[];
    const checkedTargets = filters.target as TBodyPart[];

    if (
      checkedTargets.length === 0 &&
      checkedCategories.length === 0 &&
      checkedPositions.length === 0 &&
      checkedVariations.length === 0
    ) {
      return exerciseList = exercises.filter((exercise) => {
        return exercise.name?.includes(exerciseNameSearchString);
      });
    };

    exerciseList = exercises.filter(( exercise ) => {
      const exercisePositions = exercise.positions as TExercisePosition[];
      const exerciseCategories = exercise.categories as TExerciseCategory[];
      const exerciseVariations = exercise.variations as TExerciseVariation[];
      const exerciseTargets = exercise.bodyParts as TBodyPart[];

      for (let position of checkedPositions) {
        if (exercisePositions.includes(position)) return true;
      };

      for (let variation of checkedVariations) {
        if (exerciseVariations.includes(variation)) return true;
      };

      for (let category of checkedCategories) {
        if (exerciseCategories.includes(category)) return true;
      };

      for (let target of checkedTargets) {
        if (exerciseTargets.includes(target)) return true;
      };

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
  {exerciseList.length}
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
    grid-template-rows: repeat(3, min-content);
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

