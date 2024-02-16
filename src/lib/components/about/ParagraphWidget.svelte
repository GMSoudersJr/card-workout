<script lang="ts">
  export let heading: string;
  export let listOfParagraphs: string[];
</script>

<section class="about-section">
  <h3 class="about-section-header oswald-header">
    {heading.toUpperCase()}
  </h3>
  {#each listOfParagraphs as paragraph, i (i)}
    <p class="about-paragraph source-sans-3-text">
      {@html paragraph}
    </p>
  {/each}

</section>

<style>
  .about-section-header {
    color: #259259;
  }
  p:not(:last-child) {
    padding-bottom: 0.25rem;
  }
</style>

