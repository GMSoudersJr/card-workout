<script lang="ts">
	import { formatStopWatchTime } from "$lib/utils";
	import { onMount} from "svelte";
  import { workoutStopwatch } from "../../../store";

  let displayTime = $workoutStopwatch.elapsedTime;

  onMount(async() => {
    workoutStopwatch.updateDisplayIntervalId(
      setInterval(() => {
        displayTime = $workoutStopwatch.elapsedTime;
      }, 10)
    );
  });

  function handlePause() {
    workoutStopwatch.pause();
  }

  function handleContinue() {
    workoutStopwatch.continue();
  }

  $: stopwatchTime = formatStopWatchTime(displayTime);

</script>

<div class="workout-stopwatch-container">
  <h1 class="display-time source-sans-3-text">
    {stopwatchTime}
  </h1>
  {#if $workoutStopwatch.running && $workoutStopwatch.elapsedTime > 0}
  <button
    class="pause-button oswald-header"
    on:click={handlePause}
    disabled={!$workoutStopwatch.running}
  >
    PAUSE
  </button>
  {:else if !$workoutStopwatch.running && $workoutStopwatch.elapsedTime > 0}
  <button
    class="pause-button oswald-header"
    on:click={handleContinue}
    disabled={$workoutStopwatch.running}
  >
    CONTINUE
  </button>
  {/if}
</div>


<style>
  .workout-stopwatch-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    grid-template-areas:
    ". displayTime ."
    ". pauseButton .";
  }
  .display-time {
    color: #000080;
    display: grid;
    grid-area: displayTime;
    font-size: 2rem;
  }
  .pause-button {
    grid-area: pauseButton;
    padding: 5px 0;
    border-radius: 8px;
    color: #000080;
  }
</style>

