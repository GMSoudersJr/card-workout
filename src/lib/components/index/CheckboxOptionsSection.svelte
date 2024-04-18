<script lang="ts">
	import CheckBoxWidget from "$lib/components/index/CheckBoxWidget.svelte";
	import {createEventDispatcher, onMount} from "svelte";
	import {EBodyParts} from "../../../enums/bodyParts";
	import {EExerciseCategories} from "../../../enums/exerciseCategories";
	import {EExercisePositions} from "../../../enums/exercisePositions";
	import {EExerciseVariations} from "../../../enums/exerciseVariations";
	import {theExerciseIndexCheckboxStore} from "../../../store";
	import type {TBodyPart} from "../../../types/bodyPart";
	import type {TExerciseCategory} from "../../../types/exerciseCategory";
	import type {TExercisePosition} from "../../../types/exercisePosition";
	import type {TExerciseVariation} from "../../../types/exerciseVariation";

	const dispatch = createEventDispatcher();

	type CheckedBoxes = {
		[key: string]: string[]
	}

	const checkboxes: CheckedBoxes = {
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

  async function handleCheckedAlready(checkedBoxes: NodeListOf<Element>) {
    checkedBoxes.forEach((entry) => {
      const [ key, value ] = entry.id.split("-");
			checkboxes[key].push(value);

			switch (key) {
				case 'category':
					theExerciseIndexCheckboxStore.updateCategory([value] as TExerciseCategory[]);
				break;
				case 'position':
					theExerciseIndexCheckboxStore.updatePosition([value] as TExercisePosition[]);
				break;
				case 'variation':
					theExerciseIndexCheckboxStore.updateVariation([value] as TExerciseVariation[]);
				break;
				case 'target':
					theExerciseIndexCheckboxStore.updateTarget([value] as TBodyPart[]);
				break;
			}

    });
		return checkboxes;
  }

  onMount(async() => {
    const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    if ( checkedBoxes.length > 0 ) {
			handleCheckedAlready(checkedBoxes).then((checkboxes) => {
				dispatch('checkboxUpdate', {
					checkboxes
				});
			}).catch((error) => {
				console.log(error);
			});
    }
  });

	function handleUncheck(event: CustomEvent): void {
		const newData = event.detail;
		const { sectionUpdated, value } = newData;

		if ( checkboxes[sectionUpdated].includes(value) ) {
			checkboxes[sectionUpdated].splice(checkboxes[sectionUpdated].indexOf(value), 1);
		}

		dispatch('checkboxUpdate', {
			checkboxes
		});

	}

</script>

<details>
	<summary class="oswald-header">OPTIONS:</summary>

	<section class="section-container">
		<div class="category">
			<CheckBoxWidget
				heading={'category'}
				enumEntries={EExerciseCategories}
				on:checkboxChange={updateCheckboxes}
				on:uncheckedBox={handleUncheck}
			/>
		</div>

		<div class="position">
			<CheckBoxWidget
				heading={'position'}
				enumEntries={EExercisePositions}
				on:checkboxChange={updateCheckboxes}
				on:uncheckedBox={handleUncheck}
			/>
		</div>

		<div class="variation">
			<CheckBoxWidget
				heading={'variation'}
				enumEntries={EExerciseVariations}
				on:checkboxChange={updateCheckboxes}
				on:uncheckedBox={handleUncheck}
			/>
		</div>

		<div class="target">
			<CheckBoxWidget
				heading={'target'}
				enumEntries={EBodyParts}
				on:checkboxChange={updateCheckboxes}
				on:uncheckedBox={handleUncheck}
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
	}
</style>

