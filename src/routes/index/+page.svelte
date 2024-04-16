<script lang="ts">
  import type { PageData } from "./$types";
  import type { TExercisePosition } from "../../types/exercisePosition";
  import SearchBar from "$lib/components/index/SearchBar.svelte";
  import ExerciseIndexCard from "$lib/components/index/ExerciseIndexCard.svelte";
	import CheckboxOptionsSection from "$lib/components/index/CheckboxOptionsSection.svelte";
	import type { TExerciseCategory } from "../../types/exerciseCategory";
	import type { TExerciseVariation } from "../../types/exerciseVariation";
	import type { TBodyPart } from "../../types/bodyPart";

  let exerciseNameSearchString = "";

  let checkedBoxes = {
    categories: [] as TExerciseCategory[],
    positions: [] as TExercisePosition[],
    targets: [] as TBodyPart[],
    variations: [] as TExerciseVariation[]
  };

  function handleSearchChange(event: CustomEvent) {
    exerciseNameSearchString = event.detail.value.toUpperCase();

    updateExerciseListByExerciseName();
  };

  function handleCheckboxUpdate(event: CustomEvent) {
    const updatedCheckedboxes = event.detail.checkboxes;

    if (
      updatedCheckedboxes.category.length === 0 &&
      updatedCheckedboxes.position.length === 0 &&
      updatedCheckedboxes.target.length === 0 &&
      updatedCheckedboxes.variation.length === 0
    ) {
      return exerciseList = exercises.filter((exercise) => {
        return exercise.name?.includes(exerciseNameSearchString);
      });
    }

    checkedBoxes.categories = updatedCheckedboxes.category as TExerciseCategory[];
    checkedBoxes.positions = updatedCheckedboxes.position as TExercisePosition[];
    checkedBoxes.targets = updatedCheckedboxes.target as TBodyPart[];
    checkedBoxes.variations = updatedCheckedboxes.variation as TExerciseVariation[];

    updateExerciseListByCheckedBoxes();

  };

  function updateExerciseListByExerciseName() {
    if ( exerciseNameSearchString === '' ) {
      if (
        checkedBoxes.categories.length === 0 &&
        checkedBoxes.positions.length === 0 &&
        checkedBoxes.targets.length === 0 &&
        checkedBoxes.variations.length === 0
      ) {
        return exerciseList = exercises;
      }

     return updateExerciseListByCheckedBoxes();
    };

    exerciseList = exercises.filter((exercise) => {
      return exercise.name?.includes(exerciseNameSearchString);
    });

  };

  function updateExerciseListByCheckedBoxes() {
    exerciseList = exercises.filter(( exercise ) => {
      const exercisePositions = exercise.positions as TExercisePosition[];
      const exerciseCategories = exercise.categories as TExerciseCategory[];
      const exerciseVariations = exercise.variations as TExerciseVariation[];
      const exerciseTargets = exercise.bodyParts as TBodyPart[];

      for (let position of checkedBoxes.positions) {
        if (exercisePositions.includes(position)) return true;
      };

      for (let variation of checkedBoxes.variations) {
        if (exerciseVariations.includes(variation)) return true;
      };

      for (let category of checkedBoxes.categories) {
        if (exerciseCategories.includes(category)) return true;
      };

      for (let target of checkedBoxes.targets) {
        if (exerciseTargets.includes(target)) return true;
      };

    });

  };

  export let data: PageData;
  const { exercises } = data;
  let exerciseList = exercises;
</script>

<div class="index-page-container">
  <SearchBar
    on:searchingForExercise={handleSearchChange}
  />
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

