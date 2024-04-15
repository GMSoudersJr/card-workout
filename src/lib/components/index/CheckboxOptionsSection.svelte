<script lang="ts">
	import CheckBoxWidget from "$lib/components/index/CheckBoxWidget.svelte";
	import {createEventDispatcher} from "svelte";
	import {EBodyParts} from "../../../enums/bodyParts";
	import {EExerciseCategories} from "../../../enums/exerciseCategories";
	import {EExercisePositions} from "../../../enums/exercisePositions";
	import {EExerciseVariations} from "../../../enums/exerciseVariations";

	const dispatch = createEventDispatcher();

	type CheckedBoxes = {
		[key: string]: string[]
	}

	let checkboxes: CheckedBoxes = {
		category: [],
		position: [],
		variation: [],
		target: [],
	};

	function updateCheckboxes(event: CustomEvent): void {
		const newData = event.detail;
		const checkboxOptionToUpdate = newData.sectionUpdated;
		checkboxes[checkboxOptionToUpdate] = newData.value;
		dispatch('checkboxUpdate', {
			checkboxes
		});
	};
</script>

<section class="section-container">
	<div class="category">
		<CheckBoxWidget
			heading={'category'}
			enumEntries={EExerciseCategories}
			on:checkboxChange={updateCheckboxes}
		/>
	</div>

	<div class="position">
		<CheckBoxWidget
			heading={'position'}
			enumEntries={EExercisePositions}
			on:checkboxChange={updateCheckboxes}
		/>
	</div>

	<div class="variation">
		<CheckBoxWidget
			heading={'variation'}
			enumEntries={EExerciseVariations}
			on:checkboxChange={updateCheckboxes}
		/>
	</div>

	<div class="target">
		<CheckBoxWidget
			heading={'target'}
			enumEntries={EBodyParts}
			on:checkboxChange={updateCheckboxes}
		/>
	</div>

</section>

<style>
	.section-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>

