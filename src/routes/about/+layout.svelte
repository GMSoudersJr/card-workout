<script lang="ts">
</script>

<main>
  <div class="header">
    <a href="/" class="home-link oswald-header">
       HOME
    </a>
    <h1 class="heading oswald-header">
      ABOUT
    </h1>
    <a
      href="/exercises"
      id="exercises-link"
      class="nav-link oswald-header exercise-link"
    >
      EXERCISES
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
  }
</style>
