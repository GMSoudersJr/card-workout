<script lang="ts">
  import { wasteBasketEmoji } from '$lib/emojis';
	import {createEventDispatcher} from 'svelte';
	import type { TSavedWorkout } from '../../../types/savedWorkout';

  const dispatch = createEventDispatcher();

  async function handleClick() {
    if (workout.time?.startedAt === undefined || workout.time.startedAt === null) return
    dispatch('workoutSelectedForDeletion', {
      chosenWorkoutStartTime: workout.time.startedAt,
      message: `Delete ${workout.name} from ${new Date(workout.time.startedAt).toLocaleDateString()}?`
    });
    const deleteDialog = document.getElementById('delete-dialog') as HTMLDialogElement;
    deleteDialog.showModal();
  };

  export let workout: TSavedWorkout;
</script>

<button
  class="workout-delete-button noto-emoji-font"
  on:click={handleClick}
>
  {wasteBasketEmoji}
</button>

<style>
  .workout-delete-button {
    border-radius: 8px;
    padding: 3px 6px;
    color: #000080;
  }
</style>
