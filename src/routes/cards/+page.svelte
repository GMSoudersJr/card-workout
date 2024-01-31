<script lang="ts">
  import { receive, send } from '$lib/transition';
  import { flip } from 'svelte/animate';
  import { discardedCards, currentCard } from '../../store';
	import PlayingCardWidget from '$lib/components/PlayingCardWidget.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import ShuffleButton from '$lib/components/ShuffleButton.svelte';
</script>

<main>
  {#if $currentCard.length == 0}
  <StartButton />
  {/if}
  <ul>
  {#if $currentCard.length >= 1}
    {#each $currentCard as currentCard (currentCard.name)}
      <li
        out:send={{ key: currentCard.name }}
        in:receive={{ key: currentCard.name }}
        animate:flip={{ duration: 5000 }}
      >
        <PlayingCardWidget
          id={currentCard.name}
          rankSymbol={currentCard.rank}
          suitSymbol={currentCard.suit}
          textColor={currentCard.textColor}
          disabled={false}
        />
      </li>
    {/each}
  {/if}
  </ul>
  {#if $discardedCards.length >= 51}
  <ShuffleButton />
  {/if}
</main>

<style>
  main {
    padding-top: 0.5rem;
    display: grid;
    grid-template-rows: repeat(3, min-content);
    row-gap: 1rem;
    justify-content: center;
  }
  ul {
    display: grid;
    grid-template-rows: min-content;
  }
  li {
    list-style: none;
  }
</style>
