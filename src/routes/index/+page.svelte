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

  let checkedBoxes = {
    category: [] as TExerciseCategory[],
    position: [] as TExercisePosition[],
    target: [] as TBodyPart[],
    variation: [] as TExerciseVariation[]
  };

  function handleSearchChange(event: CustomEvent): void {
    exerciseNameSearchString = event.detail.value.toUpperCase();

    updateExerciseListByExerciseName();
  };

  function handleCheckboxUpdate(event: CustomEvent): void {
    const updatedCheckedboxes = event.detail.checkboxes;

    if (
      updatedCheckedboxes.category.length === 0 &&
      updatedCheckedboxes.position.length === 0 &&
      updatedCheckedboxes.target.length === 0 &&
      updatedCheckedboxes.variation.length === 0
    ) {
      console.log("reached me");
      console.log(updatedCheckedboxes);
      checkedBoxes = updatedCheckedboxes;
      exerciseList = exercises.filter((exercise) => {
        return exercise.name?.includes(exerciseNameSearchString);
      });
      return;
    }

    checkedBoxes.category = updatedCheckedboxes.category as TExerciseCategory[];
    checkedBoxes.position = updatedCheckedboxes.position as TExercisePosition[];
    checkedBoxes.target = updatedCheckedboxes.target as TBodyPart[];
    checkedBoxes.variation = updatedCheckedboxes.variation as TExerciseVariation[];

    updateExerciseListByCheckedBoxes();

  };

  function updateExerciseListByExerciseName(): void {
    if ( exerciseNameSearchString === '' ) {
      if (
        checkedBoxes.category.length === 0 &&
        checkedBoxes.position.length === 0 &&
        checkedBoxes.target.length === 0 &&
        checkedBoxes.variation.length === 0
      ) {
        exerciseList = exercises;
        return;
      }

     updateExerciseListByCheckedBoxes();
     return;
    };

    exerciseList = exercises.filter((exercise) => {
      exercise.name?.includes(exerciseNameSearchString);
      return;
    });

  };

  function updateExerciseListByCheckedBoxes(): void {
    exerciseList = exercises.filter(( exercise ) => {
      const exercisePositions = exercise.positions as TExercisePosition[];
      const exerciseCategories = exercise.categories as TExerciseCategory[];
      const exerciseVariations = exercise.variations as TExerciseVariation[];
      const exerciseTargets = exercise.bodyParts as TBodyPart[];

      for (let position of checkedBoxes.position) {
        if (exercisePositions.includes(position)) return true;
      };

      for (let variation of checkedBoxes.variation) {
        if (exerciseVariations.includes(variation)) return true;
      };

      for (let category of checkedBoxes.category) {
        if (exerciseCategories.includes(category)) return true;
      };

      for (let target of checkedBoxes.target) {
        if (exerciseTargets.includes(target)) return true;
      };

    });

  };

  onMount(async () => {
  });

  export let data: PageData;
  const { exercises } = data;
  let exerciseList = exercises;
</script>

<div class="index-page-container">
  <SearchBar
    on:searchingForExercise={handleSearchChange}
  />
  {$theExerciseIndexCheckboxStore.category}
  <CheckboxOptionsSection
    on:checkboxUpdate={handleCheckboxUpdate}
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

