<script lang="ts">
  import { wasteBasketEmoji } from '$lib/emojis';
	import {getLocalStorageWorkouts} from '$lib/utils';
	import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  async function handleClick() {
    const workouts = getLocalStorageWorkouts();
    const indexOfWorkoutToDelete = workouts.findIndex((workout) => {
      return workout.time?.start === workoutStartTime
    });
    workouts.splice(indexOfWorkoutToDelete, 1);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    dispatch('workoutDeleted');
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
