<script lang="ts">
	import {goto} from "$app/navigation";
	import {activitiesButtonText} from "$lib/strings/forCardsPage";



  async function handleClick() {
    await goto('/activities');
  }
</script>

<button
  class="oswald-header"
  on:click={handleClick}
>
  {@html activitiesButtonText.toUpperCase()}
</button>

<style>
  button {
    justify-self: center;
    padding: 8px 15px;
    border-radius: 8px;
    width: 100px;
    font-size: large;
    color: #000080;
  }
</style>

