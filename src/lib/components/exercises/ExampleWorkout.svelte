<script>
  import { exampleWorkout } from "$lib/strings/forExercisePage";
</script>

<section
  class="example-workout-section"
  data-testid="example-workout-section"
  id="example-workout-section"
>
  <h3 class="oswald-header">
{exampleWorkout.header}
  </h3>
  <ul
    class="example-workout-list"
    data-testid="example-workout-list"
    id="example-workout-list"
  >
     {#each exampleWorkout.list as anExampleExercise (anExampleExercise)}
       <li
         class="example-workout-listitem source-sans-3-text"
         data-testid="example-workout-listitem"
         id="example-workout-listitem"
       >
         <p>
           {@html anExampleExercise}
         </p>
       </li>
     {/each}
  </ul>
</section>


<style>
  .example-workout-section {
    justify-self: center;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 4px;
  }
  ul {
    list-style-position: inside;
    padding-left: 0.5rem;
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
  li {
    list-style: none;
  }
  li:not(:last-child) {
    margin-bottom: 2px;
  }
</style>

