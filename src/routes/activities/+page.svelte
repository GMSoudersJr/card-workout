<script lang="ts">
  import DeleteDialog from '$lib/components/activities/DeleteDialog.svelte';
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
	import { onMount } from 'svelte';
	import type { TSavedWorkout } from '../../types/savedWorkout';
	import WorkoutCard from '$lib/components/activities/WorkoutCard.svelte';
  import {
    deleteWorkoutFromLocalStorageWith,
    reformatLocalStorageWorkouts
  } from '$lib/utils';
	import { goto } from '$app/navigation';
  import { suitExercises } from '../../store';

  onMount(async () => {
    setWorkouts();
  });

  async function setWorkouts() {
    //workouts = getLocalStorageWorkouts();
    workouts = reformatLocalStorageWorkouts();
    if ( workouts.length === 0 ) {
      suitExercises.reset();
      await goto('/');
    }
    workouts = workouts.reverse();
    console.log(workouts);
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
      {#each workouts as workout, index (workout.time?.startedAt)}
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

