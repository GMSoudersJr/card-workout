<script lang="ts">
</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="nav-link"> ⬅ Home </a>
    <h1 class="heading">Exercises</h1>
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
    row-gap: 1rem;
  }
  .nav-and-heading {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-template-areas: "nav heading .";
  }
  .nav-link {
    grid-area: nav;
    font-size: large;
    text-decoration: none;
    color: #000000;
  }
  .heading {
    grid-area: heading;
    place-self: center;
  }
</style>
