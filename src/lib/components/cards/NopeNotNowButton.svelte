<script>
  import {
    theDeckOfCards,
    theCurrentCard,
  } from "../../../store";

  function handleClick() {
    console.log($theCurrentCard, $theDeckOfCards);
  }
</script>

<button
  class="nope-not-now-button oswald-header"
  id="nope-not-now-button"
  on:click={handleClick}
>
  NOPE NOT NOW
</button>


<style>
  .nope-not-now-button {
    width: 80%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    place-self: center;
  }
</style>

