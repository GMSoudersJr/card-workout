<script lang="ts">
  import { currentCard, deckOfCards, discardedCards } from '../../store';

  function handleShuffle() {
    deckOfCards.shuffle();
    discardedCards.reset();
    currentCard.reset();
    //@ts-ignore
    document.getElementById('discarded-cards-only').scrollLeft = 0;
  }

</script>

  <button
    on:click={handleShuffle}
  >
  Shuffle
</button>

<style>
  button {
    justify-self: center;
    padding: 8px 15px;
    border-radius: 8px;
    width: 100px;
    font-size: large;
  }
</style>

