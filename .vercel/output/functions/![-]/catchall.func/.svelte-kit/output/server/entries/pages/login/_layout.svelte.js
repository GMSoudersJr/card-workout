import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".login-layout.svelte-d2blcq{height:100%;background:radial-gradient(circle at bottom center, #39ff14, #000080);display:grid;justify-content:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="login-layout svelte-d2blcq">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
