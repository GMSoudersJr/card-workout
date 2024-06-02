import type { PageLoad } from './$types';
import { workouts } from '$lib/workoutsDB';
import { decks } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		workouts,
		title: decks.title,
		description: decks.description
	};
};
