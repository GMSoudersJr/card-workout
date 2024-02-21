<script lang="ts">
	import {createEventDispatcher} from "svelte";
  import { fade } from "svelte/transition";

  import {
    theDeckOfCards,
    theCurrentCard,
    randomCardIndex,
  } from "../../../store";

  const dispatch = createEventDispatcher();

  function handleClick() {
    let theDeckIndexOfTheCardToPutBack: number;
    if ( $theCurrentCard[0] ) {

      theDeckIndexOfTheCardToPutBack = $theCurrentCard[0].deckIndex;
      theDeckOfCards.putBack(theDeckIndexOfTheCardToPutBack);
      if ( $randomCardIndex === theDeckIndexOfTheCardToPutBack ) {
        dispatch('pluckedTheSameCard', {
          message: 'Plucked same card! Try again!'
        });
      } else {
        dispatch('pluckedDifferentCard', {
          message: 'I hope you like it'
        });
      }
      theCurrentCard.data($theDeckOfCards[$randomCardIndex]);
      theDeckOfCards.pluck($randomCardIndex);
    }
  }
</script>

<button
  class="nope-not-now-button oswald-header"
  id="nope-not-now-button"
  on:click={handleClick}
  transition:fade={{ delay: 250, duration: 300 }}
>
  NOT NOW!
</button>


<style>
  .nope-not-now-button {
    width: 100%;
    max-width: 100px;
    aspect-ratio: 1 / 1;
    color: #FFFFFF;
    border: 1px solid #000080;
    border-radius: 50%;
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: radial-gradient(circle at right, #F0F0F0, #259259);
  }
  .nope-not-now-button:active {
    transform: translateX(2px);
    box-shadow: inset -8px 8px 16px #F0F0F0;
  }
</style>

