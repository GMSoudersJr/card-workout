<script lang="ts">
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
	import {onMount} from 'svelte';
	import type { TSavedWorkout } from '../../types/savedWorkout';
  import type { TExerciseName } from '../../types/exerciseName';
	import WorkoutCard from '$lib/components/activities/WorkoutCard.svelte';
	import {getLocalStorageWorkouts} from '$lib/utils';

  onMount(async () => {
    workouts = getLocalStorageWorkouts();
    workouts.reverse();
  });

  function handleWorkoutDeleted() {
    workouts = getLocalStorageWorkouts();
    workouts = workouts.reverse();
  }

  let workouts: TSavedWorkout[];
</script>


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
            on:workoutDeleted={handleWorkoutDeleted}
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

