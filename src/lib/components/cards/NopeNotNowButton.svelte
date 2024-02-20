<script lang="ts">
	import {createEventDispatcher} from "svelte";

  import {
    theDeckOfCards,
    theCurrentCard,
    randomCardIndex,
  } from "../../../store";

  const dispatch = createEventDispatcher();

  function handleClick() {
    const hasNotBeenPluckedCount = $theDeckOfCards.filter((card) => {
      return card.hasBeenPlucked === false
    }).length;
    //console.log($theDeckOfCards);
    //console.log("has not been plucked count", hasNotBeenPluckedCount);
    let theDeckIndexOfTheCardToPutBack: number;
    if ( $theCurrentCard[0] ) {

      //console.log(`the last card was: `, $theCurrentCard[0])
      //console.log($theCurrentCard[0].name, $randomCardIndex, $theDeckOfCards);
      theDeckIndexOfTheCardToPutBack = $theCurrentCard[0].deckIndex;
      //console.log("RandomIndex# Before card put back", $randomCardIndex);
      //console.log(`Putting the card at ${$theCurrentCard[0].deckIndex} back`);
      theDeckOfCards.putBack(theDeckIndexOfTheCardToPutBack);
      //console.log(`the card at ${theDeckIndexOfTheCardToPutBack} was put back`, $theDeckOfCards);
      //console.log("RandomIndex# After card put back", $randomCardIndex);
      //console.log(`the card at ${$randomCardIndex} will be plucked.`);
      if ( $randomCardIndex === theDeckIndexOfTheCardToPutBack ) {
        //console.log("PLUCKED THE SAME CARD");
        dispatch('pluckedTheSameCard', {
          message: 'Plucked the same card. Try again!'
        });
      }
      theCurrentCard.data($theDeckOfCards[$randomCardIndex]);
      theDeckOfCards.pluck($randomCardIndex);
      //console.log($theDeckOfCards);
    }
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
    color: #000080;
    border: 2px solid #000080;
    border-radius: 50%;
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    place-self: center;
  }
</style>

