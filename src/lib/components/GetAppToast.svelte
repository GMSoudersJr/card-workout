<script lang="ts">
  import toast_, { type Toast } from 'svelte-french-toast';
  import {
    instantAccess,
    useOffline,
    getTheApp
  } from '$lib/strings/forToasts';

  export let toast: Toast;

  function handleClick() {
    toast_.dismiss(toast.id);
  }
</script>

<span>
  <h4 class="source-sans-3-text">
    {instantAccess}
  </h4>
  <p class="source-sans-3-text">
    {useOffline}
  </p>
  <br>
  <button
    on:click={handleClick}
    class="oswald-header"
    value="installSuitYourself"
  >
    {getTheApp}
  </button>
</span>


<style>
  button {
    padding: 5px 12px;
    border-radius: 8px;
    float: right;
  }
</style>

