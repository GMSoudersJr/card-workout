<script lang="ts">
  export let heading: string;
  export let unorderedList: string[];
</script>

<section class="about-section">
  <h3 class="about-section-header oswald-header">
    {heading.toUpperCase()}
  </h3>
  <ul class="about-list">
    {#each unorderedList as listitem, i (i)}
      <li class="about-listitem source-sans-3-text">
        {@html listitem}
      </li>
    {/each}

  </ul>
</section>

<style>
  .about-list {
    list-style-position: inside;
  }
</style>

