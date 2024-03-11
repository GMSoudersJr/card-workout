<script lang="ts">
  import DeleteDialog from '$lib/components/activities/DeleteDialog.svelte';
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
	import {onMount} from 'svelte';
	import type { TSavedWorkout } from '../../types/savedWorkout';
	import WorkoutCard from '$lib/components/activities/WorkoutCard.svelte';
	import {deleteWorkoutFromLocalStorageWith, getLocalStorageWorkouts} from '$lib/utils';

  onMount(async () => {
    setWorkouts();
  });

  function setWorkouts() {
    workouts = getLocalStorageWorkouts();
    workouts = workouts.reverse();
  }

  function handleDialogClose(event: CustomEvent) {
    const dialogDetail = event.detail;
    if ( dialogDetail.value !== 'deleteIt' ) return;
    deleteWorkoutFromLocalStorageWith(startTimeOfSelectedWorkoutToDelete);
    setWorkouts();
  }

  function setWorkoutStartTimeToDelete(event: CustomEvent) {
    const dialogDetail = event.detail;
    startTimeOfSelectedWorkoutToDelete = dialogDetail.chosenWorkoutStartTime;
  }

  function setDialogMessage(event: CustomEvent) {
    const dialogDetail = event.detail;
    dialogMessage = dialogDetail.message;
  };

  let startTimeOfSelectedWorkoutToDelete: number | undefined;
  let dialogMessage: string | undefined;
  let workouts: TSavedWorkout[];
</script>

<DeleteDialog
  {dialogMessage}
  on:dialogClosed={handleDialogClose}
/>
<div class="activities-page-container">
  <section class="workout-cards-grid">
    {#if workouts}
      {#each workouts as workout, index (workout.time?.start)}
        <div
          class="workout-card-conatiner"
          animate:flip={{ delay: 400, duration: 400, easing: quintOut }}
        >
          <WorkoutCard
            {workout}
            {index}
            on:workoutSelectedForDeletion={setWorkoutStartTimeToDelete}
            on:workoutSelectedForDeletion={setDialogMessage}
          />
        </div>
      {/each}
    {/if}
  </section>
</div>

<style>
  .activities-page-container {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .workout-cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  .activities-page-container::-webkit-scrollbar {
    display: none;
  }
</style>

