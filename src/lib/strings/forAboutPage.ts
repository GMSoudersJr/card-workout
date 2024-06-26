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
