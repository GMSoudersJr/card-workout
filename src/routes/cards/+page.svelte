<script lang="ts">
  import { receive, send } from '$lib/transition';
  import { flip } from 'svelte/animate';
  import { discardedCards, currentCard } from '../../store';
	import PlayingCardWidget from '$lib/components/PlayingCardWidget.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import ShuffleButton from '$lib/components/ShuffleButton.svelte';
</script>

<main>
  {#if $currentCard.length == 0 && $discardedCards.length == 0}
  <StartButton />
  {:else if $currentCard.length > 0}
  <ul>
    {#each $currentCard as currentCard (currentCard.name)}
      <li
        out:send={{ key: currentCard.name }}
        in:receive={{ key: currentCard.name }}
        animate:flip={{ duration: 200 }}
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
  </ul>
  {:else if $discardedCards.length == 52 && $currentCard.length == 0}
  <ShuffleButton />
  {/if}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
  }
  ul {
    height: 100%;
    width: 100%;
    justify-content: center;
    justify-self: center;
    align-content: center;
    display: grid;
    grid-template-rows: min-content;
  }
  li {
    list-style: none;
  }
</style>
