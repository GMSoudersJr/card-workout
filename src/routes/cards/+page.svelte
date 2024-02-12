<script lang="ts">
  import { receive, send } from '$lib/transition';
  import { flip } from 'svelte/animate';
  import {
    discardedCards,
    theCurrentCard,
  } from '../../store';
	import PlayingCardWidget from '$lib/components/PlayingCardWidget.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import ShuffleButton from '$lib/components/ShuffleButton.svelte';
</script>

<main>
  {#if $theCurrentCard.length == 0 && $discardedCards.length == 0}
  <StartButton />
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
          exercise={currentCard.exercise}
          textColor={currentCard.textColor}
          reps={currentCard.value}
          disabled={currentCard.hasBeenDiscarded}
        />
      </div>
    {/each}
  {:else if $discardedCards.length == 52 && $theCurrentCard.length == 0}
  <ShuffleButton />
  {/if}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
</style>
