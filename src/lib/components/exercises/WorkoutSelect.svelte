<script lang="ts">
	import { EWorkouts } from '../../../enums/workouts';

	let selected: string;
	const workouts = Object.values(EWorkouts);
</script>

<div class="workout-selection-container">
	<label class="workout-selection-label" id="workout-selection-label" for="workout-selection">
		Select a workout:
	</label>
	<select name="workout-selection" id="workout-selection" bind:value={selected}>
		<option value="">- Choose One -</option>
		{#each workouts as workout (workout)}
			<option value={workout}>{workout}</option>
		{/each}
	</select>
	<p>Selection: {selected}</p>
</div>

<style>
	.workout-selection-container {
		display: grid;
		grid-template-columns: max-content;
		grid-template-rows: repeat(2, min-content);
		place-self: center;
	}
</style>
