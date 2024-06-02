import type { PageLoad } from './$types';
import { workouts } from '$lib/workoutsDB';

export const load: PageLoad = () => {
	return {
		workouts,
		title: 'Decks | SUIT YOURSELF',
		description: `A list of workout decks that contain 4 exercises, a workout title, and description. The quick-start way to the 400-rep challenge.`
	};
};
