<script lang="ts">
  import {
    memoEmoji,
    cardEmoji,
    exerciseEmoji,
    recieptEmoji,
  } from '$lib/emojis';
	import {getLocalStorageWorkouts} from '$lib/utils';
	import {onMount} from 'svelte';
  const theHomepageLinks = [
    {
      href: '/activities',
      text: 'ACTIVITIES',
      emoji: recieptEmoji
    },
    {
      href: '/cards',
      text: 'CARDS',
      emoji: cardEmoji
    },
    {
      href: '/exercises',
      text: 'EXERCISES',
      emoji: exerciseEmoji
    },
    {
      href: '/about',
      text: 'ABOUT',
      emoji: memoEmoji
    },
  ];

  onMount(async () => {
    const previousWorkouts = getLocalStorageWorkouts();
    hasPreviousWorkouts = !!previousWorkouts.length;
  });
  let hasPreviousWorkouts = false;
</script>

<div class="page-container">
  <div class="header">
    <h1 class="oswald-header">SUIT YOURSELF</h1>
  </div>
  <nav class="nav-container">
  {#each theHomepageLinks as homepageLink (homepageLink.text)}
    {#if homepageLink.text !== 'ACTIVITIES'}
    <a
      class="nav-item oswald-header"
      href={homepageLink.href}
    >
      <p>
      {homepageLink.text}
      </p>
      <p class="emoji-link noto-emoji-font">
      {homepageLink.emoji}
      </p>
    </a>
    {:else if hasPreviousWorkouts && homepageLink.text === 'ACTIVITIES'}
    <a
      class="nav-item oswald-header"
      href={homepageLink.href}
    >
      <p>
      {homepageLink.text}
      </p>
      <p class="emoji-link noto-emoji-font">
      {homepageLink.emoji}
      </p>
    </a>
    {/if}
  {/each}
  </nav>
</div>

<style>
  .page-container {
    height: 100%;
    width: 100%;
    background: radial-gradient(circle at bottom center, #39FF14, #000080);
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  .header {
    color: #FFFFFF;
  }
  .nav-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 1rem;
  }
  .nav-item {
    width: 100%;
    padding: 12px 15px;
    border: 4px solid #000080;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000080;
    font-size: x-large;
  }
</style>

