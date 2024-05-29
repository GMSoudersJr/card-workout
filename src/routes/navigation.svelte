<script lang="ts">
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-expect-error: there are no types for this yet
		if (document.startViewTransition === undefined || document.startViewTransition === null) return;

		return new Promise((resolve) => {
			// @ts-expect-error: there are no types for this yet
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>
