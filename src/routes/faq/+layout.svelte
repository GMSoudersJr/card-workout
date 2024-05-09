<script lang="ts">
  import {
    homeEmoji,
    exerciseEmoji
  } from '$lib/emojis';
</script>

<main>
  <div class="header">
    <a href="/" class="home-link emoji-nav-link noto-emoji-font">
      {homeEmoji}
    </a>
    <h1 class="heading oswald-header">
      FAQ
    </h1>
    <a
      href="/exercises"
      id="exercises-link"
      class="nav-link emoji-nav-link noto-emoji-font exercise-link"
    >
      {exerciseEmoji}
    </a>
  </div>
  <slot />
</main>

<style>
  main {
    height: calc(100svh - 25px);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    justify-items: center;
    grid-template-areas: "homeLink heading exerciseLink";
  }
  .emoji-nav-link {
    font-size: 1.5rem;
  }
  .home-link {
    grid-area: homeLink;
    text-decoration: none;
    color: #000080;
  }
  .exercise-link {
    grid-area: exerciseLink;
    text-decoration: none;
    color: #000080;
  }
  .heading {
    grid-area: heading;
    place-self: center;
  }
</style>
