<script lang="ts">
  import { slide } from "svelte/transition";
	import {EExerciseNames} from "../../../enums/exerciseNames";
	import RepeatWorkoutButton from "./RepeatWorkoutButton.svelte";
	import DeleteWorkoutButton from "./DeleteWorkoutButton.svelte";
	import {quintOut} from "svelte/easing";
	import type { TSavedWorkout } from "../../../types/savedWorkout";

  export let workout: TSavedWorkout;
  export let index: number;

  $: workoutName = workout.name ? workout.name : `Workout # ${index + 1}`;

  $: workoutDate = new Date(workout.time?.startedAt as number).toLocaleDateString();

  $: workoutTime = () => {
    if (workout.time === undefined || workout.time === null) return;
    if (workout.time.startedAt === undefined || workout.time.startedAt === null) return;
    if (workout.time.elapsed === undefined || workout.time.elapsed === null) return;
    const elapsedMilliSeconds = workout.time?.elapsed;
    const elapsedSeconds = elapsedMilliSeconds / 1000;
    let minutes = Math.floor(elapsedSeconds / 60);
    let minutesString: string;
    if ( minutes < 10 ) {
      minutesString = `0${minutes.toString()}`
    } else {
      minutesString = minutes.toString();
    }
    let seconds = (elapsedSeconds % 60);
    let secondsString: string;
    if ( seconds < 10 ) {
      secondsString = `0${seconds.toFixed(2)}`
    } else {
      secondsString = seconds.toFixed(2)
    }
    let time = `${minutesString}:${secondsString}`;
    return time;
  }

  $: exercises = workout.exercises.map((exercise) => {
    return EExerciseNames[exercise as keyof typeof EExerciseNames]
  });
  console.log("workout card", workout);
</script>

<div
  class="workout-card"
  out:slide={{ duration: 400, axis: 'y', easing: quintOut}}
>
  <div class="header">
    <date class="workout-date source-sans-3-text">{workoutDate}</date>
    <h1 class="workout-name oswald-header">{workoutName}</h1>
    <div class="workout-actions">
      <RepeatWorkoutButton
        exercisesToRepeat={workout.exercises}
        thisWorkoutName={workout.name}
      />
      <DeleteWorkoutButton
        {workout}
        on:workoutSelectedForDeletion
      />
    </div>
  </div>
  <div class="workout-time oswald-header">{workoutTime()}</div>
  <div class="exercises-container">
    {#each exercises as exercise, index (index)}
      {@debug exercises}
      <div class="exercise-name source-sans-3-text">
        {exercise.toUpperCase()}
      </div>
    {/each}
  </div>
</div>

<style>
  .workout-card {
    width: calc(100%);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content) 1fr;
    border-radius: 8px;
    padding: 0.5rem 0;
    background: linear-gradient(180deg, #D9D9D9, #f1f1f1);
    row-gap: 0.5rem;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: min-content;
    align-items: center;
    color: #000080;
  }
  .workout-name,
  .workout-date {
    display: grid;
    align-items: center;
    color: #000080;
  }
  .workout-date {
    padding-left: 0.9rem;
  }
  .workout-name {
    justify-content: center;
  }
  .workout-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content;
    justify-content: center;
    padding-right: 0.5rem;
    column-gap: 0.5rem;
  }
  .workout-time {
    display: grid;
    text-align: center;
    font-size: x-large;
    color: #259259;
  }
  .exercises-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 2fr);
  }
  .exercise-name {
    font-size: medium;
    text-align: center;
    color: #000080;
  }
</style>

