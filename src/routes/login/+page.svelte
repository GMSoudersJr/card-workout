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
  const enhancements: SubmitFunction = async ({ formData, cancel}) => {
    const username = formData.get('username')?.toString().trim();
    if (username === undefined || username === null) return;
    localStorage.setItem('username', username);
    // cancels call to the server
    // going to make it a fake login for now. Only set the local storage

    cancel();
    await goto('/');

    return async () => {

    }
  };
</script>


<div class="login-page-container">
  <h1 class="oswald-header title">SUIT YOURSELF</h1>
  <div class="login-container">
    <h2 class="oswald-header header">LOGIN</h2>
    <form
      class="form login-form"
      id="login-form"
      method="post"
      action="?/login"
      use:enhance={enhancements}
    >
      <label
        class="source-sans-3-text label-text"
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
    <a href="/" class="source-sans-3-text">
      Play without logging in
    </a>
  </div>
</div>

<style>
  .header,
  .label-text,
  .title {
    color: #FFFFFF;
  }
  .title {
    place-self: center;
  }
  .login-page-container {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
  }
  .login-form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    row-gap: 0.5rem;
  }
  .login-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 1rem;

  }
  input[type=submit],
  input[type=text] {
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 1rem;
    color: #000080;
  }
  a {
    text-decoration: none;
    color: #000080;
  }
  a:hover {
    color: #FFFFFF;
  }
</style>
