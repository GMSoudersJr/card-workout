import { c as create_ssr_component, i as subscribe, e as escape, j as each, v as validate_component } from "../../../chunks/ssr.js";
import { s as suitExercises, r as randomCardIndex, a as theDeckOfCards, e as theCurrentCard, d as discardedCards } from "../../../chunks/store.js";
import { s as startButtonText, b as activitiesButtonText, m as messageAboveTheStartButton, c as messageBelowTheStartButton, P as PlayingCardWidget, d as messageAboveTheShuffleButton, e as messageBelowTheShuffleButton } from "../../../chunks/PlayingCardWidget.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
const css$4 = {
  code: "button.svelte-1t05jk2{justify-self:center;padding:8px 15px;border-radius:8px;width:100px;font-size:large;color:#000080}",
  map: null
};
const StartButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_suitExercises;
  let $$unsubscribe_randomCardIndex;
  let $$unsubscribe_theDeckOfCards;
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => value);
  $$unsubscribe_randomCardIndex = subscribe(randomCardIndex, (value) => value);
  $$unsubscribe_theDeckOfCards = subscribe(theDeckOfCards, (value) => value);
  $$result.css.add(css$4);
  $$unsubscribe_suitExercises();
  $$unsubscribe_randomCardIndex();
  $$unsubscribe_theDeckOfCards();
  return `<button class="oswald-header svelte-1t05jk2">${escape(startButtonText.toUpperCase())} </button>`;
});
const css$3 = {
  code: "button.svelte-1t05jk2{justify-self:center;padding:8px 15px;border-radius:8px;width:100px;font-size:large;color:#000080}",
  map: null
};
const ShuffleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<button class="oswald-header svelte-1t05jk2" data-svelte-h="svelte-1ftwsjo">SHUFFLE </button>`;
});
const css$2 = {
  code: "p.svelte-qmmk6q{color:#000080;place-self:center}",
  map: null
};
const PluckedTheSameCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nopeNotNowMessage } = $$props;
  if ($$props.nopeNotNowMessage === void 0 && $$bindings.nopeNotNowMessage && nopeNotNowMessage !== void 0)
    $$bindings.nopeNotNowMessage(nopeNotNowMessage);
  $$result.css.add(css$2);
  return `<p id="plucked-same-card-message" class="oswald-header svelte-qmmk6q">${escape(nopeNotNowMessage.toUpperCase())} </p>`;
});
const css$1 = {
  code: "button.svelte-1t05jk2{justify-self:center;padding:8px 15px;border-radius:8px;width:100px;font-size:large;color:#000080}",
  map: null
};
const WorkoutCompleteButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="oswald-header svelte-1t05jk2">${escape(activitiesButtonText.toUpperCase())} </button>`;
});
const css = {
  code: ".page-container.svelte-u8qsj8{display:grid;grid-template-columns:1fr 161.8px 1fr;grid-template-rows:1fr;justify-items:center;align-items:center}.current-card-section.svelte-u8qsj8{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:auto-fill;justify-items:center;align-items:center}.no-cards-showing.svelte-u8qsj8{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto, 1fr);align-items:center}.right-aside.svelte-u8qsj8{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, 1fr);padding:10px;justify-items:center}.right-aside.svelte-u8qsj8,.left-aside.svelte-u8qsj8{height:100%;width:100%;text-align:center;align-content:center}.above-start-button.svelte-u8qsj8,.below-start-button.svelte-u8qsj8,.above-shuffle-button.svelte-u8qsj8,.below-shuffle-button.svelte-u8qsj8{text-align:center;color:#000080}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayNopeNotNowMessage;
  let $theCurrentCard, $$unsubscribe_theCurrentCard;
  let $discardedCards, $$unsubscribe_discardedCards;
  let $suitExercises, $$unsubscribe_suitExercises;
  $$unsubscribe_theCurrentCard = subscribe(theCurrentCard, (value) => $theCurrentCard = value);
  $$unsubscribe_discardedCards = subscribe(discardedCards, (value) => $discardedCards = value);
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => $suitExercises = value);
  let nopeNotNowMessage;
  $$result.css.add(css);
  displayNopeNotNowMessage = false;
  $$unsubscribe_theCurrentCard();
  $$unsubscribe_discardedCards();
  $$unsubscribe_suitExercises();
  return `<div class="page-container svelte-u8qsj8"><aside id="left-aside" class="left-aside svelte-u8qsj8"></aside> <section class="current-card-section svelte-u8qsj8" id="current-card-section">${$theCurrentCard.length == 0 && $discardedCards.length == 0 ? `<div id="cards-intro" class="no-cards-showing svelte-u8qsj8">${!$suitExercises[0].exercise?.name ? `${each(messageAboveTheStartButton.forPlainCards, (message) => {
    return `<p class="oswald-header above-start-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message.toUpperCase()}<!-- HTML_TAG_END --> </p>`;
  })}` : `${each(messageAboveTheStartButton.forExerciseCards, (message) => {
    return `<p class="oswald-header above-start-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message.toUpperCase()}<!-- HTML_TAG_END --> </p>`;
  })}`} ${validate_component(StartButton, "StartButton").$$render($$result, {}, {}, {})} ${!$suitExercises[0].exercise?.name ? `${each(messageBelowTheStartButton.forPlainCards, (message) => {
    return `<p class="oswald-header below-start-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message}<!-- HTML_TAG_END --> </p>`;
  })}` : `${each(messageBelowTheStartButton.forExerciseCards, (message) => {
    return `<p class="oswald-header below-start-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message}<!-- HTML_TAG_END --> </p>`;
  })}`}</div>` : `${$theCurrentCard.length > 0 ? `${each($theCurrentCard, (currentCard) => {
    return `<div class="card-outer-container">${validate_component(PlayingCardWidget, "PlayingCardWidget").$$render(
      $$result,
      {
        id: currentCard.name,
        rankSymbol: currentCard.rank,
        suitSymbol: currentCard.suit,
        exerciseName: currentCard.exerciseName,
        textColor: currentCard.textColor,
        reps: currentCard.value,
        disabled: currentCard.hasBeenDiscarded
      },
      {},
      {}
    )} </div>`;
  })}` : `${$discardedCards.length == 52 && $theCurrentCard.length == 0 ? `<div id="cards-outro" class="no-cards-showing svelte-u8qsj8">${!$suitExercises[0].exercise?.name ? `${each(messageAboveTheShuffleButton.forPlainCards, (message) => {
    return `<p class="oswald-header above-shuffle-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message.toUpperCase()}<!-- HTML_TAG_END --> </p>`;
  })}` : `${each(messageAboveTheShuffleButton.forExerciseCards, (message) => {
    return `<p class="oswald-header above-shuffle-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message.toUpperCase()}<!-- HTML_TAG_END --> </p>`;
  })}`} ${!$suitExercises[0].exercise?.name ? `${validate_component(ShuffleButton, "ShuffleButton").$$render($$result, {}, {}, {})}` : `${validate_component(WorkoutCompleteButton, "WorkoutCompleteButton").$$render($$result, {}, {}, {})}`} ${!$suitExercises[0].exercise?.name ? `${each(messageBelowTheShuffleButton.forPlainCards, (message) => {
    return `<p class="oswald-header below-shuffle-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message.toUpperCase()}<!-- HTML_TAG_END --> </p>`;
  })}` : `${each(messageBelowTheShuffleButton.forExerciseCards, (message) => {
    return `<p class="oswald-header below-shuffle-button svelte-u8qsj8"><!-- HTML_TAG_START -->${message.toUpperCase()}<!-- HTML_TAG_END --> </p>`;
  })}`}</div>` : ``}`}`}</section> <aside id="right-aside" class="right-aside svelte-u8qsj8"><div>${displayNopeNotNowMessage && $discardedCards.length <= 50 ? `${validate_component(PluckedTheSameCard, "PluckedTheSameCard").$$render($$result, { nopeNotNowMessage }, {}, {})}` : ``}</div></aside> </div>`;
});
export {
  Page as default
};
