<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData, ActionData } from "./$types";
  import type { SubmitFunction } from "@sveltejs/kit";
	import {goto} from "$app/navigation";
  export let data: PageData;
  export let form: ActionData;
  let username: string;
  function handleSubmit(event: Event) {
    console.log(event);
  }
  const enhancements: SubmitFunction = async ({ formData, formElement, action, cancel, submitter}) => {
    const username = formData.get('username')?.toString().trim();
    if (username === undefined || username === null) return;
    localStorage.setItem('username', username);
    // cancels call to the server
    // going to make it a fake login for now. Only set the local storage

    cancel();
    await goto('/');

    return async ({ result, update }) => {


    }
  };
</script>


<div id="login-container" class="login-container">
  <h1 class="oswald-header">LOGIN</h1>
  <form
    class="form login-form"
    id="login-form"
    method="post"
    action="?/login"
    use:enhance={enhancements}
  >
  <label
    class="source-sans-3-text"
    id="username-label"
    for="username-input"
  >
    Username:
  </label>
  <input
    class="input-text source-sans-3-text"
    id="username-input"
    name="username"
    type="text"
    value={form?.username ?? ''}
  >
    <input
      id="login-input-submit"
      class="input-submit oswald-header"
      type="submit"
      on:submit={handleSubmit}
      value="SUBMIT"
    >
  </form>
      {#if username}
        <p>Your username will be:</p>
        <p class="username-confirm-text">{username}</p>
      {:else}
        <a href="/">
          Play without logging in
        </a>
      {/if}

{#if form?.success}
  Logged in as {data.username}
{/if}
{#if form?.missing}
  idiot
{/if}
</div>

<style>
  .login-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    justify-items: center;
    row-gap: 1rem;
    place-self: center;
  }
  .login-form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    row-gap: 0.5rem;
  }
  .input-text,
  .input-submit {
    padding: 5px 8px;
  }
  .username-confirm-text {
    text-align: center;
    border: 1px solid black;
  }
</style>
