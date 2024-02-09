<script lang="ts">
	import {EExercises} from "../../../enums/exercises";
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";

  export let suitExercise;
  let suitName = $suitExercise.suit;
  let icon = ESuitSymbolUnicode[suitName as keyof typeof ESuitSymbolUnicode];
  let selected: string;
  const exercises = Object.values(EExercises);
</script>

<div class="exercise-selection-container">
  <label
    class="exercise-selection-label"
    id={`${suitName}-exercise-selection-label`}
    for={`${suitName}-exercise-selection`}
  >
    {@html icon}:
  </label>
  <select
    name="suit-exercise-selection"
    id={`${suitName}-exercise-selection`}
    bind:value={selected}
  >
    {#each exercises as exercise (exercise)}
      <option value={exercise}>{exercise}</option>
    {/each}
  </select>
</div>


<style>
</style>
