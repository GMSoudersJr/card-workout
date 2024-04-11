<script lang="ts">
	import CheckBoxWidget from "$lib/components/index/CheckBoxWidget.svelte";
	import {createEventDispatcher} from "svelte";
	import {EBodyParts} from "../../../enums/bodyParts";
	import {EExerciseCategories} from "../../../enums/exerciseCategories";
	import {EExercisePositions} from "../../../enums/exercisePositions";
	import {EExerciseVariations} from "../../../enums/exerciseVariations";

	const dispatch = createEventDispatcher();

	type Filter = {
		[key: string]: string[]
	}

	let filter: Filter = {
		category: [],
		position: [],
		variation: [],
		target: [],
	};

	function updateFilter(event: CustomEvent) {
		const newData = event.detail;
		const filterToUpdate = newData.sectionUpdated;
		filter[filterToUpdate] = newData.value;
		dispatch('filterUpdate', {
			filter
		});
	};
</script>

<section class="section-container">
	<div class="category">
		<CheckBoxWidget
			heading={'category'}
			enumEntries={EExerciseCategories}
			on:checkboxChange={updateFilter}
		/>
	</div>

	<div class="position">
		<CheckBoxWidget
			heading={'position'}
			enumEntries={EExercisePositions}
			on:checkboxChange={updateFilter}
		/>
	</div>

	<div class="variation">
		<CheckBoxWidget
			heading={'variation'}
			enumEntries={EExerciseVariations}
			on:checkboxChange={updateFilter}
		/>
	</div>

	<div class="target">
		<CheckBoxWidget
			heading={'target'}
			enumEntries={EBodyParts}
			on:checkboxChange={updateFilter}
		/>
	</div>

</section>

<style>
	.section-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>

