<script lang="ts">
	interface Props {
		nopeNotNowMessage: string;
	}

	let { nopeNotNowMessage }: Props = $props();
</script>

<p id="plucked-same-card-message" class="oswald-header">
	{nopeNotNowMessage.toUpperCase()}
</p>

<style>
	p {
		color: #000080;
		place-self: center;
	}
</style>
