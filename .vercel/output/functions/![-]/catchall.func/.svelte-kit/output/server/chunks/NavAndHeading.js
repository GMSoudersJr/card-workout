import { c as create_ssr_component, e as escape, h as add_attribute } from "./ssr.js";
import { h as homeEmoji } from "./emojis.js";
const css = {
  code: ".nav-and-heading.svelte-dps3v7{width:100%;max-width:50rem;justify-self:center;display:grid;grid-template-columns:1fr 4fr 1fr;align-items:center;justify-items:center;grid-template-areas:'homeLink heading altLink'}.emoji-nav-link.svelte-dps3v7{font-size:1.5rem}.home-link.svelte-dps3v7{grid-area:homeLink;text-decoration:none;color:#000080}.alt-link.svelte-dps3v7{grid-area:altLink;text-decoration:none;color:#000080}.heading.svelte-dps3v7{grid-area:heading;place-self:center}",
  map: null
};
const NavAndHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  let { navEmoji } = $$props;
  let { altHref } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.navEmoji === void 0 && $$bindings.navEmoji && navEmoji !== void 0)
    $$bindings.navEmoji(navEmoji);
  if ($$props.altHref === void 0 && $$bindings.altHref && altHref !== void 0)
    $$bindings.altHref(altHref);
  $$result.css.add(css);
  return `<div class="nav-and-heading svelte-dps3v7"><a href="/" class="nav-link noto-emoji-font emoji-nav-link home-link svelte-dps3v7">${escape(homeEmoji)}</a> <h1 class="heading oswald-header svelte-dps3v7">${escape(heading.toUpperCase())}</h1> <a${add_attribute("href", altHref, 0)} class="alt-link noto-emoji-font emoji-nav-link svelte-dps3v7">${escape(navEmoji)}</a> </div>`;
});
export {
  NavAndHeading as N
};
