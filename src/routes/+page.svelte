<script lang="ts">
  import { deckOfCards, discardedCards } from '../store';
  import { PlayingCard } from '../classes/PlayingCard';

  function handlePluck() {
    const randomCardIndex = Math.floor(Math.random() * $deckOfCards.length);
    const randomCard = $deckOfCards.at(randomCardIndex)
    pluckedCard = randomCard;
    deckOfCards.pluck(randomCardIndex);
    randomCard && discardedCards.add(randomCard)
  }

  function handleShuffle() {
    deckOfCards.shuffle;
    discardedCards.reset;
    console.log("discarded", $discardedCards)
    pluckedCard = undefined;
  }

  let pluckedCard: PlayingCard | undefined;
</script>

<h1>This will be the login page</h1>
<a href="/pluck">pluck</a>
<button on:click={handleShuffle}>
  Shuffle
</button>
{#if $deckOfCards.length > 0}
<button on:click={handlePluck}>
  pluck
</button>
{/if}
{#if pluckedCard}
  {pluckedCard.name}
{/if}
{$discardedCards.length}
