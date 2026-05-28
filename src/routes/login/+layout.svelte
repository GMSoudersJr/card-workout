<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="login-layout">
	{@render children?.()}
</div>

<style>
	.login-layout {
		height: 100%;
		background: radial-gradient(circle at bottom center, #39ff14, #000080);
		display: grid;
		justify-content: center;
	}
</style>
