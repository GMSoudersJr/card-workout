<script lang="ts">
	import ListWidget from "$lib/components/about/ListWidget.svelte";
	import ParagraphWidget from "$lib/components/about/ParagraphWidget.svelte";
  import {
    motivation,
    repCount,
    howToUse,
  } from "$lib/strings/forAboutPage";

</script>

<div class="about-page">
  <ParagraphWidget
    heading={motivation.heading}
    listOfParagraphs={motivation.list}
  />
  <ListWidget
    heading={repCount.heading}
    unorderedList={repCount.list}
  />
  <ListWidget
    heading={howToUse.heading}
    unorderedList={howToUse.list}
  />
</div>

<style>
  .about-page {
    height: 100%;
    max-width: 600px;
    justify-self: center;
    overflow-y: auto;
  }
</style>
