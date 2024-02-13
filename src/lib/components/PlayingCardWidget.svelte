<script lang="ts">
  import {
    theDeckOfCards,
    discardedCards,
    theRemainingDeck,
    randomCardIndex,
    theCurrentCard,
  } from '../../store';
  import { ESuitSymbolUnicode } from "../../enums/suitSymbolUnicode";
  import { ECardRankSymbol } from "../../enums/cardRankSymbol";
	import type { TCardRank } from '../../types/cardRank';
	import type { TSuit } from '../../types/suit';
	import {tick} from 'svelte';
	import type {TExercise} from '../../types/exercises';
	import {EExercises} from '../../enums/exercises';

  async function handleClick() {
    let widthOfUnderCard = 25;
    let clientWidth = document.getElementById('discarded-cards-only')?.clientWidth;
    //@ts-ignore
    if ( clientWidth / 52 > 25 ) {
      //@ts-ignore
      widthOfUnderCard = clientWidth / 52;
    }
    if ( $theRemainingDeck.length >= 0 && $discardedCards.length <= 51 ) {
      discardedCards.add($theCurrentCard[0]);
      let numberOfDiscardedCards = $discardedCards.length;
      let widthOfCards = 100 + ((numberOfDiscardedCards - 1) * widthOfUnderCard);
      await tick();
      //@ts-ignore
      let lengthToScroll = Math.ceil(widthOfCards - clientWidth);
        //@ts-ignore
        // document.getElementById('discarded-cards-only').scrollLeft = lengthToScroll;
        document.getElementById('discarded-cards-only')?.scrollTo({
          top: 0,
          left: lengthToScroll,
          behavior: 'smooth'
        });
      }
      if ( $theRemainingDeck.length == 0 ) {
        theCurrentCard.reset();
      } else {
        //const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
        const randomCard = $theDeckOfCards.at($randomCardIndex)
        theDeckOfCards.pluck($randomCardIndex);
        randomCard && theCurrentCard.data(randomCard);
      }
  }

  export let rankSymbol: TCardRank;
  export let suitSymbol: TSuit;
  export let id: string;
  export let textColor: string;
  export let exercise: TExercise | undefined;
  export let reps: number | undefined;
  $: exerciseName = EExercises[exercise as keyof typeof EExercises];
  $: rank = ECardRankSymbol[rankSymbol as keyof typeof ECardRankSymbol]
  $: suit = ESuitSymbolUnicode[suitSymbol as keyof typeof ESuitSymbolUnicode]
  export let disabled: boolean;
</script>

<button
  id={id}
  data-testid="playing-card"
  class="playing-card"
  on:click={handleClick}
  aria-disabled={disabled}
  disabled={disabled}
>
  <section class="rank-and-suit">

      <div class="rank source-sans-3-text" style:color={textColor}>
        {rank || ''}
      </div>

      <div class="suit" style:color={textColor}>
        {@html suit || ''}
      </div>

  </section>

  <section
    class="card-exercise-name"
  >
  {#if exercise}
    <p class="oswald-header">{reps}</p>
    <p class="oswald-header">{exerciseName.toLocaleUpperCase()}</p>
  {/if}
  </section>

  <section class="rank-and-suit rank-and-suit-rotate">

      <div class="suit suit-vertical-flip" style:color={textColor}>
        {@html suit || ''}
      </div>

      <div class="rank rank-vertical-horizontal-flip source-sans-3-text" style:color={textColor}>
        {rank ?? ''}
      </div>

  </section>

</button>

<style>
  .playing-card {
    width: 100px;
    aspect-ratio: 1 / 1.618;
    border-radius: 8px;
    border: 1px solid #000080;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 25px 1fr 25px;
    grid-template-rows: 48.5px 1fr 48.5px;
    grid-template-areas:
    "rank-and-suit . ."
    "exercise-name exercise-name exercise-name"
    ". . rank-and-suit-rotate";
    background: #FFF;
    transform: scale(1.618);
    overflow: hidden;
  }
  .card-exercise-name {
    grid-area: exercise-name;
    color: #000080;
    padding-left: 10px;
    padding-right: 10px;
  }
  .rank, .suit {
    height: 100%;
  }
  .rank {
    font-size: medium;
    font-weight: 400;
  }

  .rank-and-suit {
    grid-area: rank-and-suit;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }
  .rank-and-suit-rotate {
    grid-area: rank-and-suit-rotate;
  }
  .suit-vertical-flip,
  .rank-vertical-horizontal-flip {
    transform: rotate(180deg);
  }
  button:disabled,
  button[disabled] {
    background: #D9D9D9;
    filter: grayscale(10%);
    transform: scale(1);
  }
</style>
