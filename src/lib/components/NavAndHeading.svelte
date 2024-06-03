<script lang="ts">
	import { homeEmoji } from '$lib/emojis';

	export let heading: string;
	export let navEmoji: string;
	export let altHref: string;
</script>

<div class="nav-and-heading">
	<a href="/" class="nav-link noto-emoji-font emoji-nav-link home-link">
		{homeEmoji}
	</a>
	<h1 class="heading oswald-header">{heading.toUpperCase()}</h1>
	<a href={altHref} class="alt-link noto-emoji-font emoji-nav-link">
		{navEmoji}
	</a>
</div>

<style>
	.nav-and-heading {
		width: 100%;
		max-width: 800px;
		justify-self: center;
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
		align-items: center;
		justify-items: center;
		grid-template-areas: 'homeLink heading altLink';
	}
	.emoji-nav-link {
		font-size: 1.5rem;
	}
	.home-link {
		grid-area: homeLink;
		text-decoration: none;
		color: #000080;
	}
	.alt-link {
		grid-area: altLink;
		text-decoration: none;
		color: #000080;
	}
	.heading {
		grid-area: heading;
		place-self: center;
	}
</style>
