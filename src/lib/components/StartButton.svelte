<script lang="ts">
  import { deckOfCards, currentCard } from '../../store';
  function handleStart() {
    const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
    const randomCard = $deckOfCards.at(randomCardIndex)
    deckOfCards.pluck(randomCardIndex);
    randomCard && currentCard.data(randomCard);
  }

</script>

<button on:click={handleStart}>
  Start
</button>

<style>
  button {
    justify-self: center;
    padding: 8px 15px;
    border-radius: 8px;
    width: 100px;
  }
</style>
