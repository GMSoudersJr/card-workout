<script lang="ts">
  import { deckOfCards, discardedCards, currentCard } from '../store';
  import { PlayingCard } from '../classes/PlayingCard';
	import PlayingCardWidget from '$lib/components/PlayingCardWidget.svelte';

  function handleStart() {
    const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
    const randomCard = $deckOfCards.at(randomCardIndex)
    pluckedCard = randomCard;
    deckOfCards.pluck(randomCardIndex);
    randomCard && discardedCards.add(randomCard)
    randomCard && currentCard.data(randomCard);
  }

  function handleShuffle() {
    deckOfCards.shuffle();
    discardedCards.reset();
    pluckedCard = undefined;
  }

  let pluckedCard: PlayingCard | undefined;
</script>

<h1>This will be the login page</h1>
{#if  $deckOfCards.length < 1}
<button on:click={handleShuffle}>
  Shuffle
</button>
{/if}
{#if $discardedCards.length < 1}
<button on:click={handleStart}>
  Start
</button>
{/if}
{#if pluckedCard}
  {$currentCard.name}
{/if}
{$discardedCards.length}
{#if pluckedCard}
<PlayingCardWidget>
</PlayingCardWidget>
{/if}
