import { thisYear } from '$lib/utils';
import { upEmoji, downEmoji, leftEmoji, rightEmoji } from '$lib/emojis';

export const motivation = {
	heading: 'motivation',
	list: [
		`During the pandemic, I saw a video of a boxer using a deck of cards to
		determine how many push-ups to do. Since I love push-ups, I gave it a try.`,
		`After shuffling through a few decks, I found that sticking with one
		exercise was <em>overkill</em>, so I decided to mix it up. Each suit would represent
		a different exercise. That simple change led to full body workouts.`,
		`A few enthusiastic friends actually tried it after I told them. However,...`
	]
};

export const problems = {
	heading: `problems`,
	list: [`Carrying around a deck of cards`, `Hmm... I was doing which exercise for clubs?`]
};

export const repCount = {
	heading: 'cards = reps',
	list: [
		`<strong>2</strong>, <strong>3</strong>, <strong>4</strong>,
		 <strong>5</strong>, <strong>6</strong>, <strong>7</strong>,
		 <strong>8</strong>, <strong>9</strong>, and <strong>10</strong> =
		 <strong>that number</strong> of reps`,
		`<strong>J</strong>, <strong>Q</strong>, and <strong>K</strong> = <strong>10</strong> reps`,
		`<strong>A</strong> = <strong>16</strong> reps`,
		`Each <strong>suit</strong> = <strong>100</strong> reps!`,
		`The whole <strong>deck</strong> = <strong>400</strong> reps!!!!`,
		`Reps are counted after a card is discarded.`
	]
};

export const exercises = {
	heading: 'exercises',
	list: [
		`<em>Calisthenic Movements</em>, and <em>Yoga Poses</em>`,
		`No need for weights, simply move <em>yourself!</em>`
	]
};

export const howToUse = {
	heading: 'how to use',
	list: [
		`On "EXERCISES" page, select an exercise per suit.`,
		`Tap "Let's Go"!`,
		`Tap "START" to draw your first card!`,
		`Complete the reps, discard with a swipe <span class="noto-emoji-font">${upEmoji}</span> or <span class="noto-emoji-font">${rightEmoji}</span>`,
		`Put back in the deck, swipe <span class="noto-emoji-font">${downEmoji}</span> or <span class="noto-emoji-font">${leftEmoji}</span>`,
		`Deck stats available at the bottom of the page.`
	]
};

export const cardDeckWorkout = {
	heading: 'what is a card deck workout?',
	list: [
		`A card deck workout uses a standard 52-card deck to determine your reps. Each suit maps to a different exercise and each card's value tells you how many reps to do. You flip cards one at a time and work through the whole deck. The randomness keeps things interesting and means every workout plays out differently.`
	]
};

export const fullDeckReps = {
	heading: 'how many reps is a full deck?',
	list: [
		`A full deck adds up to 400 reps across four exercises, 100 reps per suit. Face cards count as 10 and aces count as 16. You can work through the whole deck in one session or set a time limit and see how far you get.`
	]
};

export const equipment = {
	heading: 'do i need any equipment?',
	list: [`No. Every exercise in the library is bodyweight only. All you need is enough space to move around.`]
};

export const workoutDuration = {
	heading: 'how long does a card deck workout take?',
	list: [
		`It depends on the exercises you choose and your pace, but most people finish a full deck in 20 to 45 minutes. Picking faster cardio movements like jumping jacks and high knees will push you through quicker. Slower strength movements like pull-ups and dips will take longer.`
	]
};

export const warmUp = {
	heading: 'can i use this as a warm-up?',
	list: [
		`Absolutely. Pick four mobility or low-intensity exercises from the library, set a time limit, and flip cards until time runs out. The mobility and yoga pose exercises in the library work well for this.`
	]
};

export const beginners = {
	heading: 'is this good for beginners?',
	list: [
		`Yes. You pick your own exercises, so you can start with movements you are comfortable with and swap in harder ones as you get stronger. The rep counts are fixed by the cards, but you control the difficulty through your exercise choices.`
	]
};

export const suggestions = {
	heading: 'suggestions',
	list: [
		`Choose exercises to get a full body workout!`,
		`Warm up and stretch before hand!`,
		`Use your imagination!`,
		`Have fun!`
	]
};

export const copyright = `© ${thisYear()} by Gerald M. Souders Jr.`;
