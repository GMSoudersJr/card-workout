<script lang="ts">
  import { receive, send } from '$lib/transition';
  import { flip } from 'svelte/animate';
  import {
    discardedCards,
    theCurrentCard,
  } from '../../store';
  import PlayingCardWidget from '$lib/components/cards/PlayingCardWidget.svelte';
  import StartButton from '$lib/components/cards/StartButton.svelte';
  import ShuffleButton from '$lib/components/cards/ShuffleButton.svelte';
</script>

<div class="page-container">
  <aside id="exercise-info" class="exercise-info">
    Info
  </aside>

  <section class="current-card-section" id="current-card-section">
  {#if $theCurrentCard.length == 0 && $discardedCards.length == 0}
    <p class="oswald-header">
      PRESS START TO BEGIN
    </p>
  <StartButton />
    <p class="oswald-header">
      TAP THE CARD TO DISCARD IT
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
          exercise={currentCard.exerciseName}
          textColor={currentCard.textColor}
          reps={currentCard.value}
          disabled={currentCard.hasBeenDiscarded}
        />
      </div>
    {/each}
  {:else if $discardedCards.length == 52 && $theCurrentCard.length == 0}
    <p class="oswald-header">THE DECK IS FINISHED</p>
    <ShuffleButton />
    <p class="oswald-header">SHUFFLING CLEANS THE CARDS</p>
  {/if}
  </section>

  <aside id="exercise-demo" class="exercise-demo">
    Demo
  </aside>
</div>

<style>
  .page-container {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
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
</style>
