<script lang="ts">
	import {createEventDispatcher} from "svelte";
  import { theExerciseIndexCheckboxStore } from "../../../store";
	import type {TBodyPart} from "../../../types/bodyPart";
	import type {TExerciseCategory} from "../../../types/exerciseCategory";
	import type {TExercisePosition} from "../../../types/exercisePosition";
	import type {TExerciseVariation} from "../../../types/exerciseVariation";

  const dispatch = createEventDispatcher();

  function handleClick(event: Event): void {
    const target = event.target as HTMLInputElement;
    const checkboxValue = target.value;

    switch (heading) {
      case 'category':
        theExerciseIndexCheckboxStore.updateCategory(checkboxValue as TExerciseCategory);
      break;
      case 'position':
        theExerciseIndexCheckboxStore.updatePosition(checkboxValue as TExercisePosition);
      break;
      case 'variation':
        theExerciseIndexCheckboxStore.updateVariation(checkboxValue as TExerciseVariation);
      break;
      case 'target':
        theExerciseIndexCheckboxStore.updateTarget(checkboxValue as TBodyPart);
      break;
    }

    dispatch('checkboxStoreUpdated');

  }
  export let enumEntries: Object;
  export let heading: string;

  let checkboxData = Object.entries(enumEntries);
</script>

<section>
  <h4 class="oswald-header">{heading.toUpperCase()}:</h4>
  {#each checkboxData as data (data[0])}
  <div class="checkbox-container">
  <input
    id={`${heading}-${data[0]}`}
    name={data[0]}
    type="checkbox"
    value={data[0]}
    on:click={handleClick}
  >
    <label
      for={`${heading}-${data[0]}`}
      class="source-sans-3-text"
    >
      {data[1]}
    </label>
  </div>
  {/each}
</section>

<style>
  .checkbox-container {
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: min-content;
    justify-content: start;
    column-gap: 0.25rem;
  }
  input[type=checkbox] {
    accent-color: #259259;
  }
</style>

