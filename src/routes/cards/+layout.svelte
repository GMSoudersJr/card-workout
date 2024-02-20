<script lang="ts">
  import CardsInfoWidget from "$lib/components/cards/CardsInfoWidget.svelte";
  import DiscardedCardsWidget from "$lib/components/cards/DiscardedCardsWidget.svelte";
</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="home-link oswald-header">
       HOME
    </a>
    <h1 class="heading oswald-header">
      SUIT YOURSELF
    </h1>
    <a
      href="/exercises"
      id="exercises-link"
      class="nav-link oswald-header exercise-link"
    >
      EXERCISES
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
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    grid-template-areas: "homeLink heading exerciseLink";
  }
  .home-link {
    grid-area: homeLink;
    text-decoration: none;
    color: #000080;
    justify-self: start;
    padding-left: 10px;
  }
  .exercise-link {
    grid-area: exerciseLink;
    text-decoration: none;
    color: #000080;
    justify-self: end;
    padding-right: 10px;
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
