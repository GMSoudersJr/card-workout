<script lang="ts">
  import {
    theDeckOfCards,
    discardedCards,
    theRemainingDeck,
    randomCardIndex,
    theCurrentCard,
    suitExercises,
    workoutTimer,
  } from '../../../store';
  import { ESuitSymbolUnicode } from "../../../enums/suitSymbolUnicode";
  import { ECardRankSymbol } from "../../../enums/cardRankSymbol";
  import type { TCardRank } from '../../../types/cardRank';
  import type { TSuit } from '../../../types/suit';
	import {tick} from 'svelte';
  import type { TExerciseName } from '../../../types/exerciseName';
  import { EExerciseNames } from '../../../enums/exerciseNames';
  import { setFocus } from '$lib/utils';
	import type {TSavedWorkout} from '../../../types/savedWorkout';
  import { exercisesHaveNotBeenChosen } from "$lib/utils";

  async function handleClick() {
    let widthOfUnderCard = 25;
    let clientWidth = document.getElementById('discarded-cards-only')?.clientWidth;
    if ( clientWidth === undefined) return; 
    if ( clientWidth / 52 > 25 ) {
      widthOfUnderCard = clientWidth / 52;
    }
    if ( $theRemainingDeck.length >= 0 && $discardedCards.length <= 51 ) {
      discardedCards.add($theCurrentCard[0]);
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
        workoutTimer.end(Date.now());
        let workout: TSavedWorkout = {
          exercises: $suitExercises.map((suitExercise) => {
            if (suitExercise.exercise?.name === undefined ||
                suitExercise.exercise?.name == null) return;
            return suitExercise.exercise.name;
          }),
          time: {
            start: $workoutTimer.start,
            end: $workoutTimer.end
          }
        };
        previousWorkouts.push(workout);

        localStorage.setItem('workouts', JSON.stringify(previousWorkouts));
      }
  }

  export let rankSymbol: TCardRank;
  export let suitSymbol: TSuit;
  export let id: string;
  export let textColor: string;
  export let exerciseName: TExerciseName | undefined;
  export let reps: number | undefined;
  $: exerciseNameText = EExerciseNames[exerciseName as keyof typeof EExerciseNames];
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
  use:setFocus
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
