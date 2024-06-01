import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Recent Activities | SUIT YOURSELF',
		description: `A list of recently completed decks of workouts. Review dates, times, exercises, and even repeat or delete them with the touch of a button.`
	}
}
