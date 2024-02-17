<script>
  import { copyright } from '$lib/strings/forAboutPage';
  import Socials from './Socials.svelte';
</script>

<footer>
  <Socials />
  <p>{copyright}</p>
</footer>

<style>
  footer {
    width: 100%;
    text-align: center;
    padding: 3px;
    color: var(--colorCharcoal);
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer p {
    font-family: var(--fontFamilyRegular);
    font-size: 16px;
    line-height: 24px;
  }

</style>
