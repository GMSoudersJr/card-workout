<script>
  import { currentCard, deckOfCards, discardedCards } from '../../store';

  function handleShuffle() {
    deckOfCards.shuffle();
    discardedCards.reset();
    currentCard.reset();
  }

</script>

  <button
    on:click={handleShuffle}
  >
  Shuffle
</button>

<style>
  button {
    padding: 8px 15px;
    border-radius: 8px;
    width: 100px;
  }
</style>

