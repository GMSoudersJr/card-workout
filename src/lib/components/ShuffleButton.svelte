<script lang="ts">
  import {
    theCurrentCard,
    theDeckOfCards,
    discardedCards,
    suitExercises,
  } from '../../store';

  function handleShuffle() {
    theDeckOfCards.shuffle();
    discardedCards.reset();
    theCurrentCard.reset();
    suitExercises.reset();
  }

</script>

  <button
    class="oswald-header"
    on:click={handleShuffle}
  >
  SHUFFLE
</button>

<style>
  button {
    justify-self: center;
    padding: 8px 15px;
    border-radius: 8px;
    width: 100px;
    font-size: large;
    color: #000080;
  }
</style>

