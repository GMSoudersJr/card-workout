<script lang="ts">
	import {EExercises} from "../../../enums/exercises";
	import {ESuitColors} from "../../../enums/suitColors";
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";

  const exercises = Object.values(EExercises);
  const exerciseKeys = Object.keys(EExercises);

  function handleSelect() {
    suitExercise.updateExercise(selected);
    console.log($suitExercise);
  }

  export let suitExercise;
  let suitName = $suitExercise.suit;
  let icon = ESuitSymbolUnicode[suitName as keyof typeof ESuitSymbolUnicode];
  let selected: string;
  let labelColor = ESuitColors[suitName as keyof typeof ESuitColors];
</script>

<div class="exercise-selection-container">
  <label
    class="exercise-selection-label"
    id={`${suitName}-exercise-selection-label`}
    for={`${suitName}-exercise-selection`}
    style:color={labelColor}
  >
    {@html icon}
  </label>
  <select
    name="suit-exercise-selection"
    id={`${suitName}-exercise-selection`}
    bind:value={selected}
    on:change={handleSelect}
  >
    {#each exercises as  exercise, i (exercise)}
      <option value={exerciseKeys[i]}>{exercise}</option>
    {/each}
  </select>
</div>


<style>
  .exercise-selection-container {
    border: 2px solid #000080;
    border-radius: 8px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: min-content;
    justify-items: center;
    padding: 5px 8px;
    column-gap: 0.5rem;
  }
  .exercise-selection-label {
    font-size: x-large;
  }
  select {
    color: #000080;
    background: #FFFFFF;
    border: none;
  }
</style>
