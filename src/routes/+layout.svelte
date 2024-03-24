<script lang="ts">
  import ViewTransition from './navigation.svelte';
  import '../app.css';
	import {onMount} from 'svelte';
	import {goto} from '$app/navigation';

  async function detectServiceWorkerUpdate() {
    const registration = await navigator.serviceWorker.ready;

    registration.addEventListener('updatefound', () => {
      const newServiceWorker = registration.installing;

      newServiceWorker?.addEventListener('statechange', () => {
        if (newServiceWorker.state === 'installed') {
          if (confirm('New update available! Reload to update?')) {
            newServiceWorker.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
          }
        }
      });
    });
  };

  onMount(async() => {
    detectServiceWorkerUpdate();
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
