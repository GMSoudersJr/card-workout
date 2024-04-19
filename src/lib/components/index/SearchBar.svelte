<script lang="ts">
	import {createEventDispatcher} from "svelte";

  let searchedExerciseName = '';
  const dispatch = createEventDispatcher();

  function handleInput() {
    dispatch('searchingForExercise', {
      value: searchedExerciseName
    });
  }

</script>

<section class="search-bar-container">
  <label for="search-bar" class="oswald-header">EXERCISE NAME:</label>
  <input
    id="search-bar"
    type="search"
    class="oswald-header"
    bind:value={searchedExerciseName}
    on:input={handleInput}
  >
</section>

<style>
  .search-bar-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
  }
  input[type=search] {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #000080;
    color: #000080;
  }
  label {
    font-size: 1.2rem;
    color: #000080;
  }
</style>

