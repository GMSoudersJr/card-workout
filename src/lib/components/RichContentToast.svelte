<script lang="ts">
  import toast_, { type Toast } from 'svelte-french-toast';

  export let toast: Toast;

  function handleClick() {
    toast_.dismiss(toast.id);
  }
</script>

<span>
  <h4 class="source-sans-3-text">
    Instant access to your workouts!
  </h4>
  <p class="source-sans-3-text">
    Use SUIT YOURSELF offline!
  </p>
  <br>
  <button
    on:click={handleClick}
    class="oswald-header"
    value="installSuitYourself"
  >
    GET THE APP
  </button>
</span>


<style>
  button {
    padding: 5px 12px;
    border-radius: 8px;
    float: right;
  }
</style>

