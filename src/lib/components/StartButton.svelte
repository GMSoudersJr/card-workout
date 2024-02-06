<script lang="ts">
  import {
    theDeckOfCards,
    currentCard,
    randomCardIndex
  } from '../../store';

  function handleStart() {
    console.log($theDeckOfCards);
    const randomCard = $theDeckOfCards.at($randomCardIndex)
    theDeckOfCards.pluck($randomCardIndex);
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
    font-size: large;
    color: #000080;
  }
</style>
