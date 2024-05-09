<script lang="ts">
  import {
	cardIndexEmoji,
    homeEmoji
  } from "$lib/emojis";

</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="nav-link noto-emoji-font emoji-nav-link home-link">
      {homeEmoji}
    </a>
    <h1 class="heading oswald-header">DECKS</h1>
    <a href="/index" class="exercise-index-link noto-emoji-font emoji-nav-link">
      {cardIndexEmoji}
    </a>
  </div>
  <slot />
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    justify-content: center;
    row-gap: 1rem;
    padding: 0.5rem;
  }
  .nav-and-heading {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    justify-items: center;
    grid-template-areas: "homeLink heading exerciseIndexLink";
  }
  .emoji-nav-link {
    font-size: 1.5rem;
  }
  .home-link {
    grid-area: homeLink;
    text-decoration: none;
    color: #000080;
  }
  .exercise-index-link {
    grid-area: exerciseIndexLink;
    text-decoration: none;
    color: #000080;
  }
  .heading {
    grid-area: heading;
    place-self: center;
  }
</style>
