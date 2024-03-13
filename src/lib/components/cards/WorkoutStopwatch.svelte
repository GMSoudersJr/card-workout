<script>
  import { workoutStopwatch } from "../../../store";

  $: elapsedTime = $workoutStopwatch.elapsedTime;
</script>

<div class="workout-stopwatch-container">
  <div class="workout-stopwatch">
    <p class="elapsed-time">
      {elapsedTime}
    </p>
  </div>
  <button
    disabled={$workoutStopwatch.running}
    on:click={workoutStopwatch.start}
  >
    Start
  </button>
  <button
    disabled={!$workoutStopwatch.running}
    on:click={workoutStopwatch.stop}
  >
    Stop
  </button>
  <button
    disabled={!$workoutStopwatch.running}
    on:click={workoutStopwatch.reset}
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

