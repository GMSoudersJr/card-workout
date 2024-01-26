<script lang="ts">
  import { discardedCards, currentCard } from '../../store';
	import PlayingCardWidget from '$lib/components/PlayingCardWidget.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import ShuffleButton from '$lib/components/ShuffleButton.svelte';
</script>

<main>
  {#if $currentCard.length == 0}
    <StartButton />
  {/if}
  {#if $currentCard.length >= 1}
    <PlayingCardWidget
      id={$currentCard[0].name}
      rankSymbol={$currentCard[0].rank}
      suitSymbol={$currentCard[0].suit}
      textColor={$currentCard[0].textColor}
      disabled={false}
    />
  {/if}
  {#if $discardedCards.length >= 51}
    <ShuffleButton />
  {/if}
</main>

<style>
  .title {
    text-align: center;
  }
  main {
    padding-top: 8px;
    display: grid;
    grid-template-rows: repeat(3, min-content);
    row-gap: 1rem;
    justify-content: center;
  }
</style>
