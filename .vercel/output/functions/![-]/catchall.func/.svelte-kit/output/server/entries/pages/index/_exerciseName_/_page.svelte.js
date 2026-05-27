import { c as create_ssr_component, e as escape, j as each, v as validate_component, h as add_attribute } from "../../../../chunks/ssr.js";
import { c as convertTypeValueToEnumValue, E as EExerciseNames, a as convertTypeValuesToEnumValues } from "../../../../chunks/convertTypeToEnumValue.js";
import { E as EExercisePositions, a as EExerciseVariations } from "../../../../chunks/exerciseVariations.js";
const css$1 = {
  code: ".section-header.svelte-6smktu{color:#259259}.list.svelte-6smktu{list-style-position:inside;color:#000080}.list-item.svelte-6smktu{color:#000080}",
  map: null
};
const ListWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  let { unorderedList } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.unorderedList === void 0 && $$bindings.unorderedList && unorderedList !== void 0)
    $$bindings.unorderedList(unorderedList);
  $$result.css.add(css$1);
  return `<section class="section-container"><h3 class="section-header oswald-header svelte-6smktu">${escape(heading.toUpperCase())}</h3> <ul class="list svelte-6smktu">${each(unorderedList, (listitem, i) => {
    return `<li class="list-item source-sans-3-text svelte-6smktu">${escape(listitem)} </li>`;
  })}</ul> </section>`;
});
const css = {
  code: ".exercise-name.svelte-sev8nm{color:#000080}.index-exercise-page-container.svelte-sev8nm{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3, min-content);row-gap:1rem;padding-left:0.5rem;padding-right:0.5rem;justify-items:center;align-items:center;overflow-x:hidden;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.demo-container.svelte-sev8nm{display:grid;grid-template-columns:100%;grid-template-rows:repeat(auto-fill, min-content);row-gap:1rem}.embedded-video.svelte-sev8nm{width:100%;aspect-ratio:16 / 9;place-self:center}.information-container.svelte-sev8nm{max-width:560px;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto-fill, min-content);row-gap:1rem}.split-row.svelte-sev8nm{display:flex;gap:3rem;align-items:flex-start}",
  map: null
};
const baseYouTubeEmbedUrl = "https://www.youtube.com/embed/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { exercise } = data;
  const { name, embeds, positions, variations } = exercise;
  const exerciseName = convertTypeValueToEnumValue(name, EExerciseNames);
  const exercisePositions = convertTypeValuesToEnumValues(positions, EExercisePositions);
  const exerciseVariations = convertTypeValuesToEnumValues(variations, EExerciseVariations);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="index-exercise-page-container svelte-sev8nm"><h2 class="exercise-name oswald-header svelte-sev8nm">${escape(exerciseName.toUpperCase())}</h2> ${embeds ? `<section class="demo-container svelte-sev8nm">${each(embeds, (embed, i) => {
    return `<iframe${add_attribute("id", `${exercise.name?.toLowerCase()}-embedded-video`, 0)} width="560" height="315" class="embedded-video svelte-sev8nm"${add_attribute("src", `${baseYouTubeEmbedUrl}${embed}`, 0)} title="YouTube  video player" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  })}</section>` : ``} <div class="information-container svelte-sev8nm"><div class="split-row svelte-sev8nm">${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: "Positions",
      unorderedList: exercisePositions
    },
    {},
    {}
  )} ${validate_component(ListWidget, "ListWidget").$$render(
    $$result,
    {
      heading: "Variations",
      unorderedList: exerciseVariations
    },
    {},
    {}
  )}</div></div> </div>`;
});
export {
  Page as default
};
