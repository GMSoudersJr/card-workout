<script lang="ts">
  import { considerations } from '$lib/strings/forExercisePage';
</script>

<section
  class="considerations-container"
  id="considerations-container"
>
  <h3 class="oswald-header">
    {considerations.header}
  </h3>
  <ul
    class="exercise-hint-list source-sans-3-text"
    id="exercise-consideration-list"
  >
     {#each considerations.list as aConsideration (aConsideration)}
       <li
         class="exercise-consideration-listitem"
       >
         <p>
           {@html aConsideration}
         </p>
       </li>
     {/each}
  </ul>
</section>

<style>
  .considerations-container {
    justify-self: center;
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 4px;
  }
  ul {
    list-style-position: inside;
    padding-left: 1.4rem;
  }
  li {
    list-style: '*';
  }
  li:nth-child(1),
  li:nth-child(4) {
    & p::first-letter {
      color: #000000;
    }
  }
  li:nth-child(2),
  li:nth-child(3) {
    & p::first-letter {
      color: #FF0000;
    }
  }
  li:not(:last-child) {
    margin-bottom: 2px;
  }
  p {
    padding-left: 0.5rem;
  }
</style>

