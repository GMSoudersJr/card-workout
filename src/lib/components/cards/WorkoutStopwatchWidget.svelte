<script lang="ts">
	import { formatStopWatchTime } from "$lib/utils";
	import {onMount} from "svelte";
  import { workoutStopwatch } from "../../../store";

  let displayTime = $workoutStopwatch.elapsedTime;
  let displayIntervalId: number;

  onMount(async() => {
    if ( $workoutStopwatch.running ) {
      displayIntervalId = setInterval(() => {
        displayTime = $workoutStopwatch.elapsedTime;
      }, 10);
    }
  })

  function handleStart() {
    workoutStopwatch.start();
    workoutStopwatch.updateDisplayIntervalId(
      setInterval(() => {
        displayTime = $workoutStopwatch.elapsedTime;
      }, 10)
    );
  }

  function handleStop() {
    workoutStopwatch.stop();
    workoutStopwatch.updateDisplayIntervalId(displayIntervalId);
  }

  function handleReset() {
    workoutStopwatch.reset();
    displayTime = $workoutStopwatch.elapsedTime;
  }

  $: stopwatchTime = formatStopWatchTime(displayTime);

</script>

<div class="workout-stopwatch-container">
  <div class="workout-stopwatch">
    <p class="display-time">
      Display: {stopwatchTime}
    </p>
  </div>
  <button
    disabled={$workoutStopwatch.running}
    on:click={handleStart}
  >
    Start
  </button>
  <button
    disabled={!$workoutStopwatch.running}
    on:click={handleStop}
  >
    Stop
  </button>
  <button
    disabled={$workoutStopwatch.running}
    on:click={handleReset}
  >
    Reset
  </button>
</div>


<style>
  .workout-stopwatch-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
  }
</style>

