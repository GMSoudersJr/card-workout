<script lang="ts">
	import { EExerciseNames } from "../../../enums/exerciseNames";
	import { ESuitColors } from "../../../enums/suitColors";
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";
  import type { TSuitExercise } from "../../../types/suitExercise";
  import type { TSuit } from "../../../types/suit";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const exerciseNames = Object.values(EExerciseNames);
  const exerciseKeys = Object.keys(EExerciseNames);

  function handleChange() {
    dispatch('exerciseSelected', {suit: suitName, exerciseName: selected});
  }

  export let suitExercise: TSuitExercise<TSuit>;
  let suitName = suitExercise.suit;
  let icon = ESuitSymbolUnicode[suitName as keyof typeof ESuitSymbolUnicode];
  let selected: string | undefined = suitExercise.exercise?.name;
  let labelColor = ESuitColors[suitName as keyof typeof ESuitColors];
</script>

<div class="exercise-selection-container">
  <label
    class="exercise-selection-label"
    id={`${suitName}-exercise-selection-label`}
    for={`${suitName}-exercise-select`}
    style:color={labelColor}
  >
    {@html icon}
  </label>
  <select
    name="suit-exercise-selection"
    id={`${suitName}-exercise-select`}
    bind:value={selected}
    on:change={handleChange}
    class="source-sans-3-text"
  >
    <option
      value={undefined}
    >
      {`${suitName} Exercise`}
    </option>
  {#each exerciseNames as  exerciseName, i (exerciseName)}
    <option value={exerciseKeys[i]}>{exerciseName}</option>
  {/each}
  </select>
</div>


<style>
  .exercise-selection-container {
    border: 2px solid #000080;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: min-content;
    justify-items: center;
    align-items: center;
    padding: 0px 0px;
  }
  .exercise-selection-label {
    font-size: x-large;
    justify-self: center;
  }
  select {
    color: #000080;
    background-color: #FFFFFF;
    border: none;
    border-radius: 8px;
    width: 100%;
    font-size: 1rem;
    height: 40px;
  }
</style>
