<script lang="ts">
  import { send } from '$lib/transition';
  import { flip } from 'svelte/animate';
  import {
    discardedCards,
    theCurrentCard,
    suitExercises,
  } from '../../store';
  import PlayingCardWidget from '$lib/components/cards/PlayingCardWidget.svelte';
  import StartButton from '$lib/components/cards/StartButton.svelte';
  import ShuffleButton from '$lib/components/cards/ShuffleButton.svelte';
  import {
    messageAboveTheStartButton,
    messageBelowTheStartButton,
    messageAboveTheShuffleButton,
    messageBelowTheShuffleButton
  } from '$lib/strings/forCardsPage';
	import NopeNotNowButton from '$lib/components/cards/NopeNotNowButton.svelte';
	import PluckedTheSameCard from '$lib/components/cards/PluckedTheSameCard.svelte';

  function handlePluckedTheSameCard(event: CustomEvent) {
    nopeNotNowMessage = event.detail.message;
    displayNopeNotNowMessage = true;
    setTimeout(() => {
      displayNopeNotNowMessage = false;
    }, 1_250);
  }
  function handlePluckedDifferentCard(event: CustomEvent) {
    nopeNotNowMessage = event.detail.message;
    displayNopeNotNowMessage = false;
  }

  $: displayNopeNotNowMessage = false;
  let nopeNotNowMessage: string;
</script>

<div class="page-container">
  <aside id="left-aside" class="left-aside">
  </aside>

  <section class="current-card-section" id="current-card-section">
  {#if $theCurrentCard.length == 0 && $discardedCards.length == 0}
    <p class="oswald-header above-start-button">
      {#if !$suitExercises[0].exerciseName}
        {messageAboveTheStartButton.forPlainCards.toUpperCase()}
        {:else}
        {messageAboveTheStartButton.forExerciseCards.toUpperCase()}
      {/if}
    </p>
  <StartButton />
    <p class="oswald-header below-start-button">
      {#if !$suitExercises[0].exerciseName}
        {messageBelowTheStartButton.forPlainCards.toUpperCase()}
        {:else}
        {messageBelowTheStartButton.forExerciseCards.toUpperCase()}
      {/if}
    </p>
  {:else if $theCurrentCard.length > 0}
    {#each $theCurrentCard as currentCard (currentCard.name)}
      <div class="card-outer-container"
        out:send={{ key: currentCard.name }}
        in:send={{ key: currentCard.name }}
        animate:flip={{ duration: 200 }}
      >
        <PlayingCardWidget
          id={currentCard.name}
          rankSymbol={currentCard.rank}
          suitSymbol={currentCard.suit}
          exerciseName={currentCard.exerciseName}
          textColor={currentCard.textColor}
          reps={currentCard.value}
          disabled={currentCard.hasBeenDiscarded}
        />
      </div>
    {/each}
  {:else if $discardedCards.length == 52 && $theCurrentCard.length == 0}
    <p class="oswald-header above-shuffle-button">
      {#if !$suitExercises[0].exerciseName}
        {messageAboveTheShuffleButton.forPlainCards.toUpperCase()}
        {:else}
        {messageAboveTheShuffleButton.forExerciseCards.toUpperCase()}
      {/if}
    </p>
    <ShuffleButton />
    <p class="oswald-header below-shuffle-button">
      {#if !$suitExercises[0].exerciseName}
        {messageBelowTheShuffleButton.forPlainCards.toUpperCase()}
        {:else}
        {messageBelowTheShuffleButton.forExerciseCards.toUpperCase()}
      {/if}
    </p>
  {/if}
  </section>

  <aside id="right-aside" class="right-aside">
    <div>
      {#if displayNopeNotNowMessage && $discardedCards.length <= 50}
        <PluckedTheSameCard {nopeNotNowMessage} />
      {/if}
    </div>
    {#if $theCurrentCard.length > 0 && $discardedCards.length <= 50 }
      <NopeNotNowButton
        on:pluckedDifferentCard={handlePluckedDifferentCard}
        on:pluckedTheSameCard={handlePluckedTheSameCard}
      />
    {/if}
  </aside>
</div>

<style>
  .page-container {
    display: grid;
    grid-template-columns: 1fr 161.8px 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
  .current-card-section {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
  .right-aside {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding: 10px;
    justify-items: center;
  }
  .right-aside,
  .left-aside {
    height: 100%;
    width: 100%;
    text-align: center;
    align-content: center;
  }
  .above-start-button,
  .below-start-button,
  .above-shuffle-button,
  .below-shuffle-button {
    text-align: center;
  }
</style>
