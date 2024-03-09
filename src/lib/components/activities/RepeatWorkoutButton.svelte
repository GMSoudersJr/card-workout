<script lang="ts">
	import type { TExerciseName } from "../../../types/exerciseName";
  import { repeatEmoji } from '$lib/emojis';
  import { suitExercises } from "../../../store";
  import { ESuit } from "../../../enums/suit";
	import type {TSuit} from "../../../types/suit";
	import {goto} from "$app/navigation";

  const suits = Object.keys(ESuit);

  async function handleClick() {
    exercisesToRepeat.forEach((exercise, index) => {
      if ( exercise === undefined || exercise === null ) return;
      suitExercises.updateExercise(suits[index] as TSuit, exercise);
    });

    await goto('/cards');

  };

  export let workoutName: string;
  export let exercisesToRepeat: (TExerciseName | undefined)[];
</script>

<button
  class="workout-repeat-button"
  on:click={handleClick}
>
  <p class="source-sans-3-text">
    RETRY
  <span class="noto-emoji-font">
    {repeatEmoji}
  </span>
  </p>
</button>

<style>
  .workout-repeat-button {
    border-radius: 8px;
    padding: 3px 6px;
    color: #000080;
  }
</style>
