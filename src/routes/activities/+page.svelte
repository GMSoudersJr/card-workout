<script lang="ts">
	import {onMount} from 'svelte';
	import type { TWorkout } from '../../types/workout';
  import type { TExerciseName } from '../../types/exerciseName';
	import WorkoutCard from '$lib/components/activities/WorkoutCard.svelte';

  onMount(async () => {
    let savedWorkouts = localStorage.getItem('workouts');
    if (savedWorkouts === undefined || savedWorkouts === null) return;
    workouts = JSON.parse(savedWorkouts) as TWorkout<TExerciseName>[];
  });
  let workouts: TWorkout<TExerciseName>[];
</script>


<div class="activities-page-container">
  <section class="workout-cards-grid">
    {#if workouts}
      {#each workouts as workout, index (index)}
      <WorkoutCard {workout} {index} />
      {/each}
    {/if}
  </section>
</div>

<style>
  .workout-cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
</style>

