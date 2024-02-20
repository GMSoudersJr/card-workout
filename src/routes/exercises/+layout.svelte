<script lang="ts">
</script>

<main>
  <div class="nav-and-heading">
    <a href="/" class="nav-link oswald-header home-link">HOME</a>
    <h1 class="heading oswald-header">EXERCISES</h1>
    <a href="/cards" class="suit-yourself-link oswald-header">CARDS</a>

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
  }
  .nav-and-heading {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    grid-template-areas: "homeLink heading suitYourselfLink";
  }
  .home-link {
    grid-area: homeLink;
    text-decoration: none;
    justify-self: start;
    padding-left: 10px;
    color: #000080;
  }
  .suit-yourself-link {
    grid-area: suitYourselfLink;
    text-decoration: none;
    justify-self: end;
    padding-right: 10px;
    color: #000080;
  }
  .heading {
    grid-area: heading;
    place-self: center;
  }
</style>
