<script lang="ts">
  import ViewTransition from './navigation.svelte';
  import '../app.css';
</script>

<ViewTransition />
<main>
  <slot />
</main>

<style>
  main {
    width: 100vw;
    height: 100svh;
    padding: 0.5rem;
    border: 5px solid #259259;
  }
</style>
