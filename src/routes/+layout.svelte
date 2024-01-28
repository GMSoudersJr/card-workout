<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    width: 100vw;
    padding: 0.5rem;
    display: grid;
    grid-template-rows: min-content 1fr;
    justify-items: center;
  }
</style>
