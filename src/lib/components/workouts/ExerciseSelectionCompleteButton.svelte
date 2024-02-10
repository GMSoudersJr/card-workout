<script lang="ts">
  import { suitExercises } from "../../../store";

  function handleClick() {
    console.log($suitExercises);
  }
</script>

<button on:click={handleClick}>
  Let's Go!
</button>

<style>
  button {
    justify-self: center;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: medium;
    color: #000080;
  }
</style>
