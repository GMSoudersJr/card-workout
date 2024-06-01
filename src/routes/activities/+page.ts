import type { PageLoad } from './types';

export const load: PageLoad = () => {
	return {
		title: 'RECENT ACTIVITIES',
		description: `A list of the most recently completed decks of workouts.
			Review dates, time, exercises, and even repeat or delete them with the
			touch of a button.`
	}
}
