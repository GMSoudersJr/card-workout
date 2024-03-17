<script lang="ts">
  import { workoutStopwatch } from "../../../store";
  let displayTime = 0
  let displayInterval: number;

  function handleStart() {
    workoutStopwatch.start();
    displayInterval = setInterval(() => {
      displayTime = $workoutStopwatch.elapsedTime;
    }, 100);
  }

  function handleStop() {
    workoutStopwatch.stop();
    clearInterval(displayInterval);
  }

  function handleReset() {
    clearInterval(displayInterval);
    workoutStopwatch.reset();
    displayTime = $workoutStopwatch.elapsedTime;
  }

</script>

<div class="workout-stopwatch-container">
  <div class="workout-stopwatch">
    <p class="display-time">
      Display: {displayTime}
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

