<script lang="ts">
  import { EExerciseCategories } from "../../../enums/exerciseCategories";

  let categories = Object.entries(EExerciseCategories);
  let categoriesClicked: string[] = [];
  let categoryKeys = Object.keys(EExerciseCategories);
  function handleCategoryClick(event: Event) {
    const target = event.target as HTMLInputElement;
    const categoryClicked = target.value;
    console.log(categoryClicked);
    if ( categoriesClicked.includes(categoryClicked) ) {
      // remove it
    }
  }
</script>

<section>
  <h4 class="oswald-header">CATEGORY:</h4>
{#each categories as category (category[0])}
  <div>
    <input
      id={category[0]}
      name={category[0]}
      type="checkbox"
      value={category[0]}
      on:click={handleCategoryClick}
    >
    <label for={category[0]}>{category[1]}</label>
  </div>
{/each}
</section>

<style>
</style>

