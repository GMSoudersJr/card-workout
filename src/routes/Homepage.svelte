<script lang="ts">
  import {
    exerciseEmoji,
    recieptEmoji,
	thinkingEmoji,
	cardIndexEmoji,
	deckEmoji,
  } from '$lib/emojis';
  import {
    links,
    heading,
    subHeading,
  } from '$lib/strings/forHomepage';
	import {getLocalStorageWorkouts} from '$lib/utils';
	import {onMount} from 'svelte';
  const theHomepageLinks = [
    {
      href: `/${links.activities}`,
      text: links.activities.toUpperCase(),
      emoji: recieptEmoji
    },
    {
      href: `/${links.decks}`,
      text: links.decks.toUpperCase(),
      emoji: deckEmoji
    },
    {
      href: `/${links.index}`,
      text: links.index.toUpperCase(),
      emoji: cardIndexEmoji
    },
    {
      href: `/${links.exercises}`,
      text: links.exercises.toUpperCase(),
      emoji: exerciseEmoji
    },
    {
      href: `/${links.faq}`,
      text: links.faq.toUpperCase(),
      emoji: thinkingEmoji
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
    <h1 class="oswald-header">{heading}</h1>
    <h4 class="oswald-header">{subHeading}</h4>
  </div>
  <nav class="nav-container">
  {#each theHomepageLinks as homepageLink (homepageLink.text)}
    {#if homepageLink.text !== links.activities.toUpperCase()}
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
    {:else if hasPreviousWorkouts && homepageLink.text === links.activities.toUpperCase()}
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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.618fr 1fr;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: radial-gradient(circle at bottom, #FFFFFF, #259259);
    padding: 0.5rem;
    padding-bottom: 1rem;
  }
  .header {
    color: #FFFFFF;
    font-weight: 900;
    text-align: center;
  }
  .header > h1 {
    font-size: 3rem;
  }
  .header > h4 {
    font-size: 1.5rem;
  }
  .nav-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    row-gap: 0.25rem;
    justify-items: center;
    align-items: center;
  }
  .nav-item {
    height: 60px;
    width: calc(60px * 1.618 * 3);
    background: #000080;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #FFFFFF;
  }
  .nav-item:first-child {
    border-top-left-radius: 40px;
  }
  .nav-item:last-child {
    border-bottom-right-radius: 40px;
  }
  .nav-item:nth-child(n - 4) {
    font-size: 1.75rem;
  }
</style>

