import { c as create_ssr_component, l as createEventDispatcher, h as add_attribute, j as each, e as escape, i as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { c as convertTypeValueToEnumValue, E as EExerciseNames } from "../../../chunks/convertTypeToEnumValue.js";
import { g as theExerciseIndexCheckboxStore } from "../../../chunks/store.js";
import { E as EExercisePositions, a as EExerciseVariations } from "../../../chunks/exerciseVariations.js";
var EBodyParts = /* @__PURE__ */ ((EBodyParts2) => {
  EBodyParts2["ARMS"] = "Arms";
  EBodyParts2["ANKLES"] = "Ankles";
  EBodyParts2["ELBOWS"] = "Elbows";
  EBodyParts2["FINGERS"] = "Fingers";
  EBodyParts2["HANDS"] = "Hands";
  EBodyParts2["FEET"] = "Feet";
  EBodyParts2["TOES"] = "Toes";
  EBodyParts2["CORE"] = "Core";
  EBodyParts2["FOREARMS"] = "Forearm";
  EBodyParts2["UPPER_ARMS"] = "Upper Arm";
  EBodyParts2["SHOULDERS"] = "Shoulders";
  EBodyParts2["LOWER_BACK"] = "Lower Back";
  EBodyParts2["UPPER_BACK"] = "Upper Back";
  EBodyParts2["TORSO"] = "Torso";
  EBodyParts2["NECK"] = "Neck";
  EBodyParts2["ABDOMINAL"] = "Abdominal";
  EBodyParts2["LOWER_LEG"] = "Lower Leg";
  EBodyParts2["UPPER_LEG"] = "Upper Leg";
  EBodyParts2["HIPS"] = "Hips";
  EBodyParts2["WRISTS"] = "Wrists";
  EBodyParts2["WHOLE_BODY"] = "Whole Body";
  return EBodyParts2;
})(EBodyParts || {});
var EExerciseCategories = /* @__PURE__ */ ((EExerciseCategories2) => {
  EExerciseCategories2["CALISTHENICS"] = "Calisthenics";
  EExerciseCategories2["MOBILITY"] = "Mobility";
  EExerciseCategories2["PRIMAL_MOVEMENTS"] = "Primal Movements";
  EExerciseCategories2["STABILITY"] = "Stability";
  EExerciseCategories2["YOGA"] = "Yoga";
  return EExerciseCategories2;
})(EExerciseCategories || {});
const css$4 = {
  code: ".search-bar-container.svelte-1kj44sn{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, min-content)}input[type='search'].svelte-1kj44sn{padding:12px;font-size:1rem;border:1px solid #000080;color:#000080}label.svelte-1kj44sn{font-size:1.2rem;color:#000080}",
  map: null
};
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchedExerciseName = "";
  createEventDispatcher();
  $$result.css.add(css$4);
  return `<section class="search-bar-container svelte-1kj44sn"><label for="search-bar" class="oswald-header svelte-1kj44sn" data-svelte-h="svelte-16340c8">EXERCISE NAME:</label> <input id="search-bar" type="search" class="oswald-header svelte-1kj44sn"${add_attribute("value", searchedExerciseName, 0)}> </section>`;
});
const css$3 = {
  code: ".header.svelte-1nf0kp6{color:#000080;font-size:x-large}.index-card.svelte-1nf0kp6{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3, min-content);background:linear-gradient(90deg, #f1f1f1, #ffffff);row-gap:0.5rem;border-radius:5px;border-left:5px solid #000080;padding-left:12px;padding-top:6px;padding-bottom:6px}.emoji-section.svelte-1nf0kp6{display:flex;flex-direction:row}.emoji.svelte-1nf0kp6{font-size:1rem;color:#000080}",
  map: null
};
const ExerciseIndexCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { exercise } = $$props;
  const exerciseName = convertTypeValueToEnumValue(exercise.name, EExerciseNames).toUpperCase();
  const hrefExerciseName = exercise.name?.toLowerCase();
  if ($$props.exercise === void 0 && $$bindings.exercise && exercise !== void 0)
    $$bindings.exercise(exercise);
  $$result.css.add(css$3);
  return `<div class="index-card svelte-1nf0kp6"><div class="exercise-name-demo-link">${exercise.embeds ? `${each(exercise.embeds, (embed) => {
    return `${embed === "" ? `<h1 class="oswald-header header svelte-1nf0kp6">${escape(exerciseName)}</h1>` : `<h1 class="oswald-header header svelte-1nf0kp6"><a${add_attribute("href", `/index/${hrefExerciseName}`, 0)}>${escape(exerciseName)}</a> </h1>`}`;
  })}` : ``}</div> ${exercise.emojis ? `<section class="emoji-section svelte-1nf0kp6">${each(exercise.emojis, (emoji) => {
    return `<p class="noto-emoji-font emoji svelte-1nf0kp6">${escape(emoji)}</p>`;
  })}</section>` : ``} </div>`;
});
const css$2 = {
  code: ".checkbox-container.svelte-138saze{display:grid;grid-template-columns:min-content auto;grid-template-rows:min-content;justify-content:start;column-gap:0.25rem}input[type='checkbox'].svelte-138saze{accent-color:#259259}.checkbox-label.svelte-138saze,.checkbox-heading.svelte-138saze{color:#000080}",
  map: null
};
const CheckBoxWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { enumEntries } = $$props;
  let { heading } = $$props;
  let checkboxData = Object.entries(enumEntries);
  if ($$props.enumEntries === void 0 && $$bindings.enumEntries && enumEntries !== void 0)
    $$bindings.enumEntries(enumEntries);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$2);
  return `<section><h4 class="oswald-header checkbox-heading svelte-138saze">${escape(heading.toUpperCase())}:</h4> ${each(checkboxData, (data) => {
    return `<div class="checkbox-container svelte-138saze"><input${add_attribute("id", `${heading}-${data[0]}`, 0)}${add_attribute("name", data[0], 0)} type="checkbox"${add_attribute("value", data[0], 0)} class="svelte-138saze"> <label${add_attribute("for", `${heading}-${data[0]}`, 0)} class="source-sans-3-text checkbox-label svelte-138saze">${escape(data[1])}</label> </div>`;
  })} </section>`;
});
const css$1 = {
  code: "summary.svelte-49p44j{font-size:1.2rem}summary.svelte-49p44j::marker{font-size:1.5rem;color:#259259}.section-container.svelte-49p44j{display:grid;grid-template-columns:repeat(2, 1fr);row-gap:0.5rem}.summary-label.svelte-49p44j{color:#000080}",
  map: null
};
const CheckboxOptionsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theExerciseIndexCheckboxStore;
  $$unsubscribe_theExerciseIndexCheckboxStore = subscribe(theExerciseIndexCheckboxStore, (value) => value);
  createEventDispatcher();
  $$result.css.add(css$1);
  $$unsubscribe_theExerciseIndexCheckboxStore();
  return `<details id="details-options"><summary class="oswald-header summary-label svelte-49p44j" data-svelte-h="svelte-1r0tx34">OPTIONS:</summary> <section class="section-container svelte-49p44j"><div class="category">${validate_component(CheckBoxWidget, "CheckBoxWidget").$$render(
    $$result,
    {
      heading: "category",
      enumEntries: EExerciseCategories
    },
    {},
    {}
  )}</div> <div class="position">${validate_component(CheckBoxWidget, "CheckBoxWidget").$$render(
    $$result,
    {
      heading: "position",
      enumEntries: EExercisePositions
    },
    {},
    {}
  )}</div> <div class="target">${validate_component(CheckBoxWidget, "CheckBoxWidget").$$render(
    $$result,
    {
      heading: "target",
      enumEntries: EBodyParts
    },
    {},
    {}
  )}</div> <div class="variation">${validate_component(CheckBoxWidget, "CheckBoxWidget").$$render(
    $$result,
    {
      heading: "variation",
      enumEntries: EExerciseVariations
    },
    {},
    {}
  )}</div></section> </details>`;
});
const css = {
  code: ".index-page-container.svelte-1d0mh52{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(3, min-content);row-gap:2rem;padding-left:0.5rem;padding-right:0.5rem;overflow-x:hidden;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.exercise-index-cards-list.svelte-1d0mh52{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto-fill, min-content);row-gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theExerciseIndexCheckboxStore;
  $$unsubscribe_theExerciseIndexCheckboxStore = subscribe(theExerciseIndexCheckboxStore, (value) => value);
  let { data } = $$props;
  const { exercises } = data;
  let exerciseList = exercises;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_theExerciseIndexCheckboxStore();
  return `<div class="index-page-container svelte-1d0mh52">${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} ${validate_component(CheckboxOptionsSection, "CheckboxOptionsSection").$$render($$result, {}, {}, {})} <ul class="exercise-index-cards-list svelte-1d0mh52">${each(exerciseList, (exercise) => {
    return `<li class="exercise-index-cards-listitem">${validate_component(ExerciseIndexCard, "ExerciseIndexCard").$$render($$result, { exercise }, {}, {})} </li>`;
  })}</ul> </div>`;
});
export {
  Page as default
};
