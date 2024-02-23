<script lang="ts">
  import CardsInfoWidget from "$lib/components/cards/CardsInfoWidget.svelte";
  import DiscardedCardsWidget from "$lib/components/cards/DiscardedCardsWidget.svelte";
</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="home-link noto-emoji-font emoji-nav-link">
      🏠
    </a>
    <h1 class="heading oswald-header">
      SUIT YOURSELF
    </h1>
    <a
      href="/exercises"
      id="exercises-link"
      class="emoji-nav-link noto-emoji-font exercise-link"
    >
      🤸
    </a>
  </div>
  <aside class="discarded-cards-aside">
    <DiscardedCardsWidget />
  </aside>
  <slot />
  <aside class="deck-of-cards-info-aside">
    <CardsInfoWidget />
  </aside>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 181.8px 1fr min-content;
  }
  .nav-and-heading {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    justify-items: center;
    grid-template-areas: "homeLink heading exerciseLink";
  }
  .home-link {
    grid-area: homeLink;
    text-decoration: none;
    color: #000080;
  }
  .emoji-nav-link {
    font-size: 1.5rem;
  }
  .exercise-link {
    grid-area: exerciseLink;
    text-decoration: none;
    color: #000080;
  }
  .heading {
    grid-area: heading;
    place-self: center;
    text-align: center;
  }
  .discarded-cards-aside {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #259259;
    overflow: hidden;
    padding: 10px;
    border-radius: 8px;
  }
  .deck-of-cards-info-aside {
    width: 100%;
    height: 25svh;
    background-color: #D9D9D9;
    display: grid;
    padding: 1rem;
    padding-bottom: 0;
  }
</style>
