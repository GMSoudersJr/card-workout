<script lang="ts">
  import {
    theDeckOfCards,
    discardedCards,
    theRemainingDeck,
    randomCardIndex,
    theCurrentCard,
    suitExercises,
    workoutStopwatch,
  } from '../../../store';
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";
  import { ECardRankSymbol } from "../../../enums/cardRankSymbol";
  import type { TCardRank } from '../../../types/cardRank';
  import type { TSuit } from '../../../types/suit';
	import {onMount, tick, createEventDispatcher} from 'svelte';
  import type { TExerciseName } from '../../../types/exerciseName';
  import { EExerciseNames } from '../../../enums/exerciseNames';
  import { setFocus } from '$lib/utils';
	import type {TSavedWorkout} from '../../../types/savedWorkout';
  import { exercisesHaveNotBeenChosen } from "$lib/utils";
  import { getTouches } from '../../../functions/forSwiping';

  const dispatch = createEventDispatcher();

  async function handleClick() {
    continueStopwatch();
    let widthOfUnderCard = 25;
    let clientWidth = document.getElementById('discarded-cards-only')?.clientWidth;
    if ( clientWidth === undefined) return;

    if ( clientWidth / 52 > 25 ) { widthOfUnderCard = clientWidth / 52; }
    if ( $theRemainingDeck.length >= 0 && $discardedCards.length <= 51 ) {
      discardedCards.add($theCurrentCard[0]);
      theDeckOfCards.discard($theCurrentCard[0].deckIndex);
      suitExercises.addReps($theCurrentCard[0]);
      let numberOfDiscardedCards = $discardedCards.length;
      let widthOfCards = 100 + ((numberOfDiscardedCards - 1) * widthOfUnderCard);
      //await tick();
      let lengthToScroll = Math.ceil(widthOfCards - clientWidth);
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

    if ( $discardedCards.length === 52 ) {
      if ($suitExercises.some(exercisesHaveNotBeenChosen)) return;
      const localStorageWorkoutState = localStorage.getItem('workouts');
      let previousWorkouts: TSavedWorkout[];
      if (localStorageWorkoutState === null || localStorageWorkoutState === undefined) {
        previousWorkouts = [];
      } else {
        previousWorkouts = JSON.parse(localStorageWorkoutState) as TSavedWorkout[];
      }
      workoutStopwatch.stop();
      workoutStopwatch.clearIntervals();
      let workout: TSavedWorkout = {
        name: `Workout # ${previousWorkouts.length + 1}`,
        exercises: $suitExercises.map((suitExercise) => {
          if (suitExercise.exercise?.name === undefined ||
              suitExercise.exercise?.name == null) return;
          return suitExercise.exercise.name;
        }),
        time: {
          startedAt: $workoutStopwatch.startedAt,
          elapsed: $workoutStopwatch.elapsedTime,
        },
      };
      previousWorkouts.push(workout);

      localStorage.setItem('workouts', JSON.stringify(previousWorkouts));
    }

  }

  // For swiping
  let xDown: number;
  let yDown: number;

  function handleStart(event: TouchEvent) {
    event.preventDefault();
    const firstTouch = getTouches(event)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleEnd(event: TouchEvent) {
    if ( !xDown || !yDown ) return

    let cardAction: 'discard' | 'putBack' | undefined;

    let xUp = event.changedTouches[0].clientX;
    let yUp = event.changedTouches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    // return early if swipe is less than or equal to 20 pixels.
    if (Math.abs(xDiff) <= 20 && Math.abs(yDiff) <= 20) return cardAction;

    // Decides what to do with the card based on value of the slope
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
      if ( xDiff > 0 ) {
        cardAction = "putBack";
      } else {
        cardAction = "discard";
      }
    } else {
      if ( yDiff > 0 ) {
        cardAction = "discard";
      } else {
        cardAction = "putBack";
      }

    }

    if ( cardAction === 'discard' ) handleClick();
    if ( cardAction === 'putBack' ) handlePutBack();
  }

  function continueStopwatch(): void {
    if ( $workoutStopwatch.running ) return;
    if ( $suitExercises.some(exercisesHaveNotBeenChosen) ) return;
    workoutStopwatch.continue();
  }

  function handlePutBack() {
    continueStopwatch();
    let theDeckIndexOfTheCardToPutBack: number;
    if ( $theCurrentCard[0] ) {
      theDeckIndexOfTheCardToPutBack = $theCurrentCard[0].deckIndex;
      theDeckOfCards.putBack(theDeckIndexOfTheCardToPutBack);
      if ( $randomCardIndex === theDeckIndexOfTheCardToPutBack ) {
        dispatch('pluckedTheSameCard', {
          message: 'Plucked same card! Try again!'
        });
      }
      theCurrentCard.data($theDeckOfCards[$randomCardIndex]);
      theDeckOfCards.pluck($randomCardIndex);
    }
  }

  // Using keyDown because arrow keys only fire on keydown
  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        handleClick();
      break;
      case 'ArrowDown':
        handlePutBack();
      break;
      case 'ArrowLeft':
        handlePutBack();
      break;
      case 'ArrowRight':
        handleClick();
      break;
    }
  }

  onMount(async () => {
    if ( id.includes('discarded') ) return;
    let card = document.getElementById(`${id}`);
    card?.addEventListener('touchstart', handleStart);
    card?.addEventListener('touchend', handleEnd);
  });

  export let rankSymbol: TCardRank;
  export let suitSymbol: TSuit;
  export let id: string;
  export let textColor: string;
  export let exerciseName: TExerciseName | undefined;
  export let reps: number | undefined;
  export let disabled: boolean;
  $: exerciseNameText = EExerciseNames[exerciseName as keyof typeof EExerciseNames];
  $: rank = ECardRankSymbol[rankSymbol as keyof typeof ECardRankSymbol]
  $: suit = ESuitSymbolUnicode[suitSymbol as keyof typeof ESuitSymbolUnicode]
</script>

<button
  id={id}
  data-testid="playing-card"
  class="playing-card"
  on:click={handleClick}
  aria-disabled={disabled}
  disabled={disabled}
  use:setFocus
  on:keydown={handleKeyDown}
>
  <section class="rank-and-suit">

      <div class="rank source-sans-3-text" style:color={textColor}>
        {rank || ''}
      </div>

      <div class="suit" style:color={textColor}>
        {@html suit || ''}
      </div>

  </section>

  <section class="card-exercise-info">
  {#if exerciseName}
    <p class="oswald-header card-exercise-reps">{reps}</p>
    <p class="oswald-header card-exercise-name">{exerciseNameText.toUpperCase()}</p>
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
    box-shadow: -5px 5px 10px #D9D9D9, 3px 0px 10px #D9D9D9;
  }
  .card-exercise-info {
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
    box-shadow: none;
  }
</style>
