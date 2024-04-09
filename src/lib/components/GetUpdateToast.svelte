<script lang="ts">
  import toast_, { type Toast } from 'svelte-french-toast';
  import {
    newUpdate,
    reloadToUpdate,
    getTheUpdate
  } from '$lib/strings/forToasts';

  export let toast: Toast;

  function handleClick() {
    toast_.dismiss(toast.id);
  }
</script>

<span>
  <h4 class="source-sans-3-text">
    {newUpdate}
  </h4>
  <p class="source-sans-3-text">
    {reloadToUpdate}
  </p>
  <br>
  <button
    on:click={handleClick}
    class="oswald-header"
    value="updateServiceWorker"
  >
    {getTheUpdate}
  </button>
</span>


<style>
  button {
    padding: 5px 12px;
    border-radius: 8px;
    float: right;
  }
</style>


