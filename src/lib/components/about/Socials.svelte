<script lang="ts">
	import { socials } from '$lib/socials';
</script>

<section class="contact" id="contact">
	{#each socials as social (social.id)}
		<a
			href={social.href}
			target="_blank"
			referrerpolicy="no-referrer"
			id={social.id}
			class={social.class}
			title={social.title}
		>
			<img id={`${social.id}-icon`} class="icon" src={social.iconUrl} alt={social.alt} />
		</a>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		align-items: center;
		column-gap: 3rem;
	}
	a {
		text-decoration: none;
	}
	.icon {
		height: 25px;
		width: 25px;
	}
</style>
