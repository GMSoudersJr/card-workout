<script lang="ts">
  import type { PageData } from "./$types";
  import type { TExercisePosition } from "../../types/exercisePosition";
  import SearchBar from "$lib/components/index/SearchBar.svelte";
  import ExerciseIndexCard from "$lib/components/index/ExerciseIndexCard.svelte";
	import CheckboxOptionsSection from "$lib/components/index/CheckboxOptionsSection.svelte";
	import type { TExerciseCategory } from "../../types/exerciseCategory";
	import type { TExerciseVariation } from "../../types/exerciseVariation";
	import type { TBodyPart } from "../../types/bodyPart";
	import {onMount} from "svelte";
	import {theExerciseIndexCheckboxStore} from "../../store";

  let exerciseNameSearchString = "";

  function handleSearchChange(event: CustomEvent): void {
    exerciseNameSearchString = event.detail.value.toUpperCase();

    updateExerciseListByExerciseName();
  };

  function updateExerciseListByExerciseName(): void {
    if ( exerciseNameSearchString === '' ) {
      if (
        $theExerciseIndexCheckboxStore.category.length === 0 &&
        $theExerciseIndexCheckboxStore.position.length === 0 &&
        $theExerciseIndexCheckboxStore.target.length === 0 &&
        $theExerciseIndexCheckboxStore.variation.length === 0
      ) {
        exerciseList = exercises;
        return;
      }

      updateListFromCheckboxStore();
     return;
    };

    exerciseList = exercises.filter((exercise) => {
      exercise.name?.includes(exerciseNameSearchString);
      return;
    });

  };

  function updateListFromCheckboxStore() {
    if (
      $theExerciseIndexCheckboxStore.category.length === 0 &&
      $theExerciseIndexCheckboxStore.position.length === 0 &&
      $theExerciseIndexCheckboxStore.target.length === 0 &&
      $theExerciseIndexCheckboxStore.variation.length === 0
    ) {
      exerciseList = exercises;
      return;
    }

    exerciseList = exercises.filter(( exercise ) => {
      const exercisePositions = exercise.positions as TExercisePosition[];
      const exerciseCategories = exercise.categories as TExerciseCategory[];
      const exerciseVariations = exercise.variations as TExerciseVariation[];
      const exerciseTargets = exercise.bodyParts as TBodyPart[];

      for (let position of $theExerciseIndexCheckboxStore.position) {
        if (exercisePositions.includes(position)) return true;
      };

      for (let variation of $theExerciseIndexCheckboxStore.variation) {
        if (exerciseVariations.includes(variation)) return true;
      };

      for (let category of $theExerciseIndexCheckboxStore.category) {
        if (exerciseCategories.includes(category)) return true;
      };

      for (let target of $theExerciseIndexCheckboxStore.target) {
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
  <CheckboxOptionsSection
    on:checkboxStoreUpdated={updateListFromCheckboxStore}
  />
  <ul class="exercise-index-cards-container">
    {#each exerciseList as exercise (exercise.name)}
    <li>
      <ExerciseIndexCard {exercise}/>
    </li>
    {/each}
  </ul>
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

