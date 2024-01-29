<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    width: 100vw;
    height: 100dvh;
    padding: 0.5rem;
    display: grid;
    border: 5px solid #259259;
    grid-template-rows: min-content 1fr;
    justify-items: center;
  }
</style>
