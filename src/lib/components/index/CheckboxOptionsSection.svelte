<script lang="ts">
	import CheckBoxWidget from "$lib/components/index/CheckBoxWidget.svelte";
	import { createEventDispatcher, onMount } from "svelte";
	import { EBodyParts } from "../../../enums/bodyParts";
	import { EExerciseCategories } from "../../../enums/exerciseCategories";
	import { EExercisePositions } from "../../../enums/exercisePositions";
	import { EExerciseVariations } from "../../../enums/exerciseVariations";
	import { theExerciseIndexCheckboxStore } from "../../../store";
	import type { TBodyPart } from "../../../types/bodyPart";
	import type { TExerciseCategory } from "../../../types/exerciseCategory";
	import type { TExercisePosition } from "../../../types/exercisePosition";
	import type { TExerciseVariation } from "../../../types/exerciseVariation";

	const dispatch = createEventDispatcher();

  function handleCheckedAlready(checkedBoxes: NodeListOf<Element>): void {

    checkedBoxes.forEach((element) => {

      const [ heading, checkedValue ] = element.id.split("-");

			switch (heading) {
				case 'category':
					theExerciseIndexCheckboxStore.updateCategory(checkedValue as TExerciseCategory);
				break;
				case 'position':
					theExerciseIndexCheckboxStore.updatePosition(checkedValue as TExercisePosition);
				break;
				case 'variation':
					theExerciseIndexCheckboxStore.updateVariation(checkedValue as TExerciseVariation);
				break;
				case 'target':
					theExerciseIndexCheckboxStore.updateTarget(checkedValue as TBodyPart);
				break;
			}

    });

		dispatch('checkboxStoreUpdated');

  }

  onMount(async() => {
    const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    if ( checkedBoxes.length > 0 ) handleCheckedAlready(checkedBoxes);
  });

</script>

<details id="details-options">
	<summary class="oswald-header summary-label">OPTIONS:</summary>

	<section class="section-container">
		<div class="category">
			<CheckBoxWidget
				heading={'category'}
				enumEntries={EExerciseCategories}
				on:checkboxStoreUpdated
			/>
		</div>

		<div class="position">
			<CheckBoxWidget
				heading={'position'}
				enumEntries={EExercisePositions}
				on:checkboxStoreUpdated
			/>
		</div>

		<div class="target">
			<CheckBoxWidget
				heading={'target'}
				enumEntries={EBodyParts}
				on:checkboxStoreUpdated
			/>
		</div>

		<div class="variation">
			<CheckBoxWidget
				heading={'variation'}
				enumEntries={EExerciseVariations}
				on:checkboxStoreUpdated
			/>
		</div>

	</section>

</details>

<style>
	summary {
		font-size: 1.2rem;
	}
	summary::marker {
		font-size: 1.5rem;
		color: #259259;
	}
	.section-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 0.5rem;
	}
	.summary-label {
		color: #000080;
	}
</style>

