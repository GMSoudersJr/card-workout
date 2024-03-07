<script lang="ts">
  import ViewTransition from './navigation.svelte';
  import '../app.css';
	import {onMount} from 'svelte';
	import {goto} from '$app/navigation';

  onMount(async() => {
    const username = localStorage.getItem('username');
    if ( username === undefined || username === null ) {
      await goto('/login');
    }
  });
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
