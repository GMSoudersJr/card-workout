<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    width: 100vw;
    height: 100svh;
    padding: 0.5rem;
    display: grid;
    border: 5px solid #259259;
    justify-items: center;
    align-items: center;
  }
</style>
