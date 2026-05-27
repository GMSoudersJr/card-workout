import { c as create_ssr_component, h as add_attribute } from "../../../chunks/ssr.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
const css = {
  code: ".header.svelte-1d74n8p,.label-text.svelte-1d74n8p,.title.svelte-1d74n8p{color:#ffffff}.title.svelte-1d74n8p{place-self:center}.login-page-container.svelte-1d74n8p{display:grid;height:100%;grid-template-columns:1fr;grid-template-rows:repeat(auto-fill, 1fr)}.login-form.svelte-1d74n8p{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto-fill, min-content);row-gap:0.5rem}.login-container.svelte-1d74n8p{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3, min-content);row-gap:1rem}input[type='submit'].svelte-1d74n8p,input[type='text'].svelte-1d74n8p{border-radius:8px;padding:8px 12px;font-size:1rem;color:#000080}a.svelte-1d74n8p{text-decoration:none;color:#000080}a.svelte-1d74n8p:hover{color:#ffffff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="login-page-container svelte-1d74n8p"><h1 class="oswald-header title svelte-1d74n8p" data-svelte-h="svelte-1u4w57x">SUIT YOURSELF</h1> <div class="login-container svelte-1d74n8p"><h2 class="oswald-header header svelte-1d74n8p" data-svelte-h="svelte-nno79n">LOGIN</h2> <form class="form login-form svelte-1d74n8p" id="login-form" method="post" action="?/login"><label class="source-sans-3-text label-text svelte-1d74n8p" id="username-label" for="username-input" data-svelte-h="svelte-177odjb">Username:</label> <input class="input-text source-sans-3-text svelte-1d74n8p" id="username-input" name="username" type="text"${add_attribute("value", form?.username ?? "", 0)}> <input id="login-input-submit" class="input-submit oswald-header svelte-1d74n8p" type="submit" value="SUBMIT"></form> <a href="/" class="source-sans-3-text svelte-1d74n8p" data-svelte-h="svelte-1ihqhku">Play without a username</a></div> </div>`;
});
export {
  Page as default
};
