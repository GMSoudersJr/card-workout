<script lang="ts">
  import { discardedCards, currentCard } from '../../store';
	import PlayingCardWidget from '$lib/components/PlayingCardWidget.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import ShuffleButton from '$lib/components/ShuffleButton.svelte';
</script>

<h1 class="title">Cards</h1>

{#if $currentCard.length == 0}
  <StartButton />
{/if}
{#if $currentCard.length >= 1}
  <PlayingCardWidget />
{/if}
{#if $discardedCards.length >= 51}
  <ShuffleButton />
{/if}

<style>
  .title {
    text-align: center;
  }
</style>
