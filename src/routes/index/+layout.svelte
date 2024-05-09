<script lang="ts">
  import {
    exerciseEmoji,
    homeEmoji
  } from "$lib/emojis";

</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="nav-link noto-emoji-font emoji-nav-link home-link">
      {homeEmoji}
    </a>
    <h1 class="heading oswald-header">INDEX</h1>
    <a href="/exercises" class="suit-yourself-link noto-emoji-font emoji-nav-link">
      {exerciseEmoji}
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
    grid-template-areas: "homeLink heading suitYourselfLink";
  }
  .emoji-nav-link {
    font-size: 1.5rem;
  }
  .home-link {
    grid-area: homeLink;
    text-decoration: none;
    color: #000080;
  }
  .suit-yourself-link {
    grid-area: suitYourselfLink;
    text-decoration: none;
    color: #000080;
  }
  .heading {
    grid-area: heading;
    place-self: center;
  }
</style>
