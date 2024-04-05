<script lang="ts">
  import ViewTransition from './navigation.svelte';
  import '../app.css';
	import {onMount} from 'svelte';
  // commented out this because login is causing errors when user offline
  //import {goto} from '$app/navigation';

  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
      outcome: 'accepted' | 'dismissed',
      platform: string
    }>;
    prompt(): Promise<void>;
  }

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

  let deferredPrompt: BeforeInstallPromptEvent | null;

  async function installApp() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Find out whether the user confirmed the installation or not
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      if (outcome === 'accepted') {
        // Show toast that it was installed
      } else if (outcome === 'dismissed'){
        // Show toast that it wasn't installed
      }
      displayInstallButton = false;
    }
  };

  onMount(async() => {
    detectServiceWorkerUpdate();

    // Show if before install prompt event is supported. It is, so let's move
    // on.
    if ( 'BeforeInstallPromptEvent' in window ) { beforeInstallPromptEventExists = true; }


    window.addEventListener("beforeinstallprompt", async (event) => {
      // Prevents the default mini-infobar or install dialog from appearing on
      // mobile.
      event.preventDefault();
      //How to fix this?
      deferredPrompt = event;
      //Show customized install prompt for PWA
      // This will be a toast with a button to install the app
      displayInstallButton = true;
    });

    window.addEventListener("appinstalled", (event) => {
      // Do something when the app is installed
      // Show a toast declaring that the app was installed.
      console.log("App Installed")
    });

    /*
    const username = localStorage.getItem('username');
    if ( username === undefined || username === null ) {
      await goto('/login');
    }
    */

  });
  let installable = false;
  let beforeInstallPromptEventExists = false;
  let displayInstallButton = false;
</script>

<ViewTransition />
<main>
  {#if beforeInstallPromptEventExists}
    <p>BeforeInstallPromptEvent exists</p>
  {/if}
  {#if displayInstallButton}
    <button on:click={installApp}>Install Suit Yourself</button>
  {/if}
  {#if installable}
    <p>{ installable }</p>
  {/if}
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
