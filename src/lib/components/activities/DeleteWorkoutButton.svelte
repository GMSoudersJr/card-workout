<script lang="ts">
  import { wasteBasketEmoji } from '$lib/emojis';
	import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  async function handleClick() {
    dispatch('workoutSelectedForDeletion', {
      chosenWorkoutStartTime: workoutStartTime
    });
    const deleteDialog = document.getElementById('delete-dialog') as HTMLDialogElement;
    deleteDialog.showModal();
    /*
    if ( dialogAnswer === 'deleteIt' ) {
      deleteWorkoutFromLocalStorage();
      //dispatch('workoutDeleted');
    }
    */
  };

  export let workoutStartTime: number | undefined;
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
