<script lang="ts">
  import ViewTransition from './navigation.svelte';
  import { cardEmoji } from '$lib/emojis';
  import toast, { Toaster } from 'svelte-french-toast';
  import RichContentToast from '$lib/components/RichContentToast.svelte';
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
        toast.success("Thank you!", { duration: 2500 });
      } else if (outcome === 'dismissed'){
        toast.error("NOT installed!", { duration: 3500 });
        toast.remove();
      }
    }
  };

  onMount(async() => {
    detectServiceWorkerUpdate();

    // Show if before install prompt event is supported.
    if ( 'BeforeInstallPromptEvent' in window ) {
      console.log("before istall prompt event supported.");
    };

    window.addEventListener("appinstalled", (event) => {
      // Do something when the app is installed
      // Show a toast declaring that the app was installed.
      toast.remove();
      toast.success("Installed!", { duration: 3500 });
      deferredPrompt = null;
    });

    /*
    const username = localStorage.getItem('username');
    if ( username === undefined || username === null ) {
      await goto('/login');
    }
    */

  });

  async function handleBeforeInstallPrompt(event: Event) {
    // Prevents the default mini-infobar or install dialog from appearing on
    // mobile.
    event.preventDefault();
    // Save for later
    deferredPrompt = event as BeforeInstallPromptEvent;
    //Show customized install prompt for PWA
    // This will be a toast with a button to install the app
    toast(RichContentToast, { duration: 7500, icon: cardEmoji });
  };

  function handleWindowClick(event: MouseEvent) {
    const target = event.target as HTMLButtonElement;
    if (target.value !== 'installSuitYourself') toast.remove();
    installApp();
  };

</script>

<svelte:window
  on:click={handleWindowClick}
  on:beforeinstallprompt={handleBeforeInstallPrompt}
/>
<Toaster />
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
