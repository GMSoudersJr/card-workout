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
    background: radial-gradient(circle at bottom center, #39FF14, #000080);
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  .header {
    color: #FFFFFF;
    text-align: center;
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

