import { a as cardEmoji, u as upEmoji, b as rightEmoji, f as downEmoji, l as leftEmoji } from "./emojis.js";
import { c as create_ssr_component, i as subscribe, l as createEventDispatcher, h as add_attribute, a as add_styles, e as escape } from "./ssr.js";
import { r as randomCardIndex, a as theDeckOfCards, e as theCurrentCard, s as suitExercises, w as workoutStopwatch, f as workoutName, d as discardedCards, t as theRemainingDeck, E as ECardRankSymbol } from "./store.js";
import { E as ESuitSymbolUnicode } from "./suitSymbolUnicode.js";
import { c as convertTypeValueToEnumValue, E as EExerciseNames } from "./convertTypeToEnumValue.js";
var ERadioButtonLabelNames = /* @__PURE__ */ ((ERadioButtonLabelNames2) => {
  ERadioButtonLabelNames2["DECK"] = "Deck";
  ERadioButtonLabelNames2["RANK"] = "Rank";
  ERadioButtonLabelNames2["SUIT"] = "Suit";
  ERadioButtonLabelNames2["REPS"] = "Reps";
  ERadioButtonLabelNames2["TIME"] = "Time";
  return ERadioButtonLabelNames2;
})(ERadioButtonLabelNames || {});
const radioButtonLabelNames = {
  deck: ERadioButtonLabelNames.DECK,
  rank: ERadioButtonLabelNames.RANK,
  suit: ERadioButtonLabelNames.SUIT,
  reps: ERadioButtonLabelNames.REPS,
  time: ERadioButtonLabelNames.TIME
};
const remainingCardsString = "Remaining:";
const startButtonText = "start";
const activitiesButtonText = `activities`;
const messageAboveTheStartButton = {
  forPlainCards: ["these are plain cards!", "press start to begin"],
  forExerciseCards: ["ready?!", "set!"]
};
const discardDirections = `${cardEmoji} <span class="noto-emoji-font">${upEmoji}</span> / <span class="noto-emoji-font">${rightEmoji}</span>`;
const putBackDirections = `${cardEmoji} <span class="noto-emoji-font">${downEmoji}</span> / <span class="noto-emoji-font">${leftEmoji}</span>`;
const messageBelowTheStartButton = {
  forPlainCards: [`DISCARD: ${discardDirections}`, `PUT BACK: ${putBackDirections}`],
  forExerciseCards: [`COMPLETE: ${discardDirections}`, `LATER: ${putBackDirections}`]
};
const messageAboveTheShuffleButton = {
  forPlainCards: ["you finished the deck"],
  forExerciseCards: ["workout finished!"]
};
const messageBelowTheShuffleButton = {
  forPlainCards: ["shuffling resets the cards"],
  forExerciseCards: ["See your time(s) in activities"]
};
const css = {
  code: ".playing-card.svelte-1panbbm{width:100px;aspect-ratio:1 / 1.618;border-radius:8px;border:1px solid #000080;display:grid;justify-content:center;align-items:center;grid-template-columns:25px 1fr 25px;grid-template-rows:48.5px 1fr 48.5px;grid-template-areas:'rank-and-suit . .'\n			'exercise-name exercise-name exercise-name'\n			'. . rank-and-suit-rotate';background:#fff;transform:scale(1.618);overflow:hidden;box-shadow:-5px 5px 10px #d9d9d9,\n			3px 0px 10px #d9d9d9}.card-exercise-info.svelte-1panbbm{grid-area:exercise-name;color:#000080;padding-left:10px;padding-right:10px}.rank.svelte-1panbbm,.suit.svelte-1panbbm{height:100%}.rank.svelte-1panbbm{font-size:medium;font-weight:400}.rank-and-suit.svelte-1panbbm{grid-area:rank-and-suit;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(2, 1fr);justify-content:center;align-items:center}.rank-and-suit-rotate.svelte-1panbbm{grid-area:rank-and-suit-rotate}.suit-vertical-flip.svelte-1panbbm,.rank-vertical-horizontal-flip.svelte-1panbbm{transform:rotate(180deg)}button.svelte-1panbbm:disabled,button[disabled].svelte-1panbbm{background:#d9d9d9;filter:grayscale(10%);transform:scale(1);box-shadow:none}",
  map: null
};
const PlayingCardWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let exerciseNameText;
  let rank;
  let suit;
  let $$unsubscribe_randomCardIndex;
  let $$unsubscribe_theDeckOfCards;
  let $$unsubscribe_theCurrentCard;
  let $$unsubscribe_suitExercises;
  let $$unsubscribe_workoutStopwatch;
  let $$unsubscribe_workoutName;
  let $$unsubscribe_discardedCards;
  let $$unsubscribe_theRemainingDeck;
  $$unsubscribe_randomCardIndex = subscribe(randomCardIndex, (value) => value);
  $$unsubscribe_theDeckOfCards = subscribe(theDeckOfCards, (value) => value);
  $$unsubscribe_theCurrentCard = subscribe(theCurrentCard, (value) => value);
  $$unsubscribe_suitExercises = subscribe(suitExercises, (value) => value);
  $$unsubscribe_workoutStopwatch = subscribe(workoutStopwatch, (value) => value);
  $$unsubscribe_workoutName = subscribe(workoutName, (value) => value);
  $$unsubscribe_discardedCards = subscribe(discardedCards, (value) => value);
  $$unsubscribe_theRemainingDeck = subscribe(theRemainingDeck, (value) => value);
  createEventDispatcher();
  let { rankSymbol } = $$props;
  let { suitSymbol } = $$props;
  let { id } = $$props;
  let { textColor } = $$props;
  let { exerciseName } = $$props;
  let { reps } = $$props;
  let { disabled } = $$props;
  if ($$props.rankSymbol === void 0 && $$bindings.rankSymbol && rankSymbol !== void 0)
    $$bindings.rankSymbol(rankSymbol);
  if ($$props.suitSymbol === void 0 && $$bindings.suitSymbol && suitSymbol !== void 0)
    $$bindings.suitSymbol(suitSymbol);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.exerciseName === void 0 && $$bindings.exerciseName && exerciseName !== void 0)
    $$bindings.exerciseName(exerciseName);
  if ($$props.reps === void 0 && $$bindings.reps && reps !== void 0)
    $$bindings.reps(reps);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  exerciseNameText = convertTypeValueToEnumValue(exerciseName, EExerciseNames);
  rank = convertTypeValueToEnumValue(rankSymbol, ECardRankSymbol);
  suit = convertTypeValueToEnumValue(suitSymbol, ESuitSymbolUnicode);
  $$unsubscribe_randomCardIndex();
  $$unsubscribe_theDeckOfCards();
  $$unsubscribe_theCurrentCard();
  $$unsubscribe_suitExercises();
  $$unsubscribe_workoutStopwatch();
  $$unsubscribe_workoutName();
  $$unsubscribe_discardedCards();
  $$unsubscribe_theRemainingDeck();
  return `<button${add_attribute("id", id, 0)} class="playing-card svelte-1panbbm"${add_attribute("aria-disabled", disabled, 0)} ${disabled ? "disabled" : ""}><section class="rank-and-suit svelte-1panbbm"><div class="rank source-sans-3-text svelte-1panbbm"${add_styles({ "color": textColor })}>${escape(rank || "")}</div> <div class="suit svelte-1panbbm"${add_styles({ "color": textColor })}><!-- HTML_TAG_START -->${suit || ""}<!-- HTML_TAG_END --></div></section> <section class="card-exercise-info svelte-1panbbm">${exerciseName ? `<p class="oswald-header card-exercise-reps">${escape(reps)}</p> <p class="oswald-header card-exercise-name">${escape(exerciseNameText.toUpperCase())}</p>` : ``}</section> <section class="rank-and-suit rank-and-suit-rotate svelte-1panbbm"><div class="suit suit-vertical-flip svelte-1panbbm"${add_styles({ "color": textColor })}><!-- HTML_TAG_START -->${suit || ""}<!-- HTML_TAG_END --></div> <div class="rank rank-vertical-horizontal-flip source-sans-3-text svelte-1panbbm"${add_styles({ "color": textColor })}>${escape(rank ?? "")}</div></section> </button>`;
});
export {
  PlayingCardWidget as P,
  radioButtonLabelNames as a,
  activitiesButtonText as b,
  messageBelowTheStartButton as c,
  messageAboveTheShuffleButton as d,
  messageBelowTheShuffleButton as e,
  messageAboveTheStartButton as m,
  remainingCardsString as r,
  startButtonText as s
};
