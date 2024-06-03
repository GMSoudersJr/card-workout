<script lang="ts">
	import { page } from '$app/stores';
	import { thinkingEmoji } from '$lib/emojis';

	console.log('index', $page);
</script>

<div class="page-container">
	<h1 class="noto-emoji-font">{thinkingEmoji}</h1>
	<h1 class="oswald-header">{$page.status}: {$page.error?.message.toUpperCase()}</h1>
	<h2>
		<a href="/" class="oswald-header"> Go Home </a>
	</h2>
</div>

<style>
	.page-container {
		display: grid;
		height: 100%;
		grid-template-columns: 100%;
		grid-template-rows: repeat(auto-fill, min-content);
		row-gap: 2rem;
		justify-items: center;
		align-content: center;
		background-color: #000080;
	}
	h1,
	a {
		color: white;
	}
</style>
