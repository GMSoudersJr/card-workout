<script lang="ts">
	$: grayscale = 100 - (count * 100) / 13;
	export let icon: string;
	export let count: number;
	export let color: string;
</script>

<div class="suit-info-box">
	<div style:color class="suit">
		{@html icon}
	</div>
	<p class="count source-sans-3-text" style={`filter: grayscale(${grayscale}%)`}>
		{count}
	</p>
</div>

<style>
	.suit-info-box {
		display: grid;
		grid-template-columns: 1fr 1.616fr;
		grid-template-rows: min-content;
		border: 1px solid #000080;
		border-radius: 4px;
	}
	.suit {
		background-color: #ffffff;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	.count {
		color: #ffffff;
		background: #39ff14;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.suit,
	.count {
		display: grid;
		justify-content: center;
		align-items: center;
		padding: 2px 3px;
		text-align: center;
		font-weight: 600;
		font-size: large;
	}
</style>
