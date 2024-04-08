<script lang="ts">
	import Footer from "$lib/components/about/Footer.svelte";
import ListWidget from "$lib/components/about/ListWidget.svelte";
	import ParagraphWidget from "$lib/components/about/ParagraphWidget.svelte";
  import {
    motivation,
    repCount,
    howToUse,
    exercises,
    suggestions,
    problems,
  } from "$lib/strings/forAboutPage";

</script>

<div class="about-page">
  <ParagraphWidget
    heading={motivation.heading}
    listOfParagraphs={motivation.list}
  />
  <ListWidget
    heading={problems.heading}
    unorderedList={problems.list}
  />
  <ListWidget
    heading={exercises.heading}
    unorderedList={exercises.list}
  />
  <ListWidget
    heading={repCount.heading}
    unorderedList={repCount.list}
  />
  <ListWidget
    heading={howToUse.heading}
    unorderedList={howToUse.list}
  />
  <ListWidget
    heading={suggestions.heading}
    unorderedList={suggestions.list}
  />
  <Footer />
</div>

<style>
  .about-page {
    padding-top: 0.5rem;
    height: 100%;
    max-width: 600px;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 1rem;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .about-page::-webkit-scrollbar {
    display: none;
  }
</style>
