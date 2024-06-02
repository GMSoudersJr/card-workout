<script lang="ts">
	import ViewTransition from './navigation.svelte';
	import { page } from '$app/stores';
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

<svelte:head>
	<title>
		{$page.data.title}
	</title>
	<meta name="description" content={`${$page.data.description}`} />
	<meta property="og:title" content={`${$page.data.title}`} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${$page.url.href}`} />
	<meta
		property="og:image"
		content="https://lh3.googleusercontent.com/pw/AP1GczPHyrnVVzMFUQXV0y0EkGHwHm0olxLMYVTrL46nzB0U4DLAn4GCgwtW7BQ4l1Bhl5PqJbAQsG1t9pO3AvJSjKbIw0J9uaBPMAnGS5nVNCTVjXJ2wjy6_f718YCQOhzSBRB2NOjFlwG7v1ekgfrBp1zhiA=w1200-h675-s-no-gm?authuser=0"
	/>
	<meta property="og:description" content={`${$page.data.description}`} />
	<meta property="og:site_name" content="SUIT YOURSELF" />
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:title" content={`${$page.data.title}`}>
	<meta property="twitter:description" content={`${$page.data.description}`}>
	<meta
		property="twitter:image"
		content="https://lh3.googleusercontent.com/pw/AP1GczPHyrnVVzMFUQXV0y0EkGHwHm0olxLMYVTrL46nzB0U4DLAn4GCgwtW7BQ4l1Bhl5PqJbAQsG1t9pO3AvJSjKbIw0J9uaBPMAnGS5nVNCTVjXJ2wjy6_f718YCQOhzSBRB2NOjFlwG7v1ekgfrBp1zhiA=w1200-h675-s-no-gm?authuser=0"
	>
</svelte:head>

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
