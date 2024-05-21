<script lang="ts">
	import ViewTransition from './navigation.svelte';
	import { cardEmoji, newEmoji, rocketEmoji } from '$lib/emojis';
	import toast, { Toaster } from 'svelte-french-toast';
	import GetAppToast from '$lib/components/GetAppToast.svelte';
	import GetUpdateToast from '$lib/components/GetUpdateToast.svelte';
	import '../app.css';
	import { installed, launchFromHomeScreen, notInstalled, thanks } from '$lib/strings/forToasts';
	import { onMount } from 'svelte';
	// commented out this because login is causing errors when user offline
	//import {goto} from '$app/navigation';

	interface BeforeInstallPromptEvent extends Event {
		readonly platforms: Array<string>;
		readonly userChoice: Promise<{
			outcome: 'accepted' | 'dismissed';
			platform: string;
		}>;
		prompt(): Promise<void>;
	}

	let newServiceWorker: ServiceWorker | null;

	async function detectServiceWorkerUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			newServiceWorker = registration.installing;

			newServiceWorker?.addEventListener('statechange', () => {
				if (newServiceWorker?.state === 'installed') {
					toast(GetUpdateToast, {
						duration: 7500,
						icon: newEmoji
					});
				}
			});
		});
	}

	function updateServiceWorker(newServiceWorker: ServiceWorker) {
		newServiceWorker?.postMessage({ type: 'SKIP_WAITING' });
		window.location.reload();
	}

	let deferredPrompt: BeforeInstallPromptEvent | null;

	async function installApp() {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			// Find out whether the user confirmed the installation or not
			const { outcome } = await deferredPrompt.userChoice;
			deferredPrompt = null;
			if (outcome === 'accepted') {
				toast.success(thanks, { duration: 2500 });
			} else if (outcome === 'dismissed') {
				toast.error(notInstalled, { duration: 3500 });
				toast.remove();
			}
		}
	}

	onMount(async () => {
		detectServiceWorkerUpdate();

		// Show if before install prompt event is supported.
		if ('BeforeInstallPromptEvent' in window) {
			console.log('before istall prompt event supported.');
		}

		window.addEventListener('appinstalled', () => {
			// Do something when the app is installed
			// Show a toast declaring that the app was installed.
			toast.remove();
			toast.success(installed, { duration: 3500 });
			toast(launchFromHomeScreen, {
				duration: 3500,
				icon: rocketEmoji
			});
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
		toast(GetAppToast, {
			duration: 7500,
			icon: cardEmoji
		});
	}

	function handleWindowClick(event: MouseEvent) {
		const target = event.target as HTMLButtonElement;
		if (target.value === 'installSuitYourself') {
			installApp();
		} else if (target.value === 'updateServiceWorker') {
			if (newServiceWorker === null || newServiceWorker === undefined) return;
			updateServiceWorker(newServiceWorker);
		} else {
			toast.remove();
		}
	}
</script>

<svelte:window on:click={handleWindowClick} on:beforeinstallprompt={handleBeforeInstallPrompt} />
<Toaster />
<ViewTransition />
<main>
	<slot />
</main>

<style>
	main {
		width: 100vw;
		height: 100svh;
	}
</style>
