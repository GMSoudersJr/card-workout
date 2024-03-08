<script lang="ts">
  import type { TWorkout } from "../../../types/workout";
  import type { TExerciseName } from "../../../types/exerciseName";
	import {EExerciseNames} from "../../../enums/exerciseNames";
  export let workout: TWorkout<TExerciseName>;
  export let index: number;
  $: workoutName = workout.name ? workout.name : `Workout # ${index + 1}`
  $: workoutNumber = () => {
    let indexString = index.toString();
    let workoutNumberArray = indexString.split('');
    const lengthOfWorkoutNumber = 4;
    while (workoutNumberArray.length < lengthOfWorkoutNumber) {
      workoutNumberArray.unshift('0');
    };
    return workoutNumberArray.join('')
  };
  $: workoutDate = new Date(workout.time?.start as number).toLocaleDateString();
  $: workoutTime = () => {
    if (workout.time === undefined || workout.time === null) return;
    if (workout.time.start === undefined || workout.time.start === null) return;
    if (workout.time.end === undefined || workout.time.end === null) return;
    const elapsedMilliSeconds = workout.time?.end - workout.time?.start;
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
</script>

<div class="workout-card">
  <div class="header">
    <div class="workout-number">{workoutNumber()}</div>
    <div class="workout-name">{workoutName}</div>
    <div class="workout-date">{workoutDate}</div>
  </div>
  <div class="workout-time">{workoutTime()}</div>
  <div class="exercises-container">
    {#each exercises as exercise, index (index)}
    <div class="exercise-name">{exercise}</div>
    {/each}
  </div>
</div>

<style>
  .workout-card {
    width: 280px;
    height: calc(280px / 1.618);
    border: 1px solid green;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content) 1fr;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: min-content;
    justify-content: center;
  }
  .workout-date {
    border: 1px solid green;
    display: grid;
    justify-content: center;
  }
  .workout-name {
    font-size: large;
    border: 1px solid green;
    display: grid;
    justify-content: center;
  }
  .workout-number {
    border: 1px solid green;
    display: grid;
    justify-content: center;
  }
  .workout-time {
    display: grid;
    text-align: center;
    font-size: x-large;
  }
  .exercises-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 2fr);
  }
  .exercise-name {
    font-size: medium;
  }
</style>

