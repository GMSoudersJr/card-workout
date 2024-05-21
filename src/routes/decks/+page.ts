import type { PageLoad } from './$types';
import { workouts } from '$lib/workoutsDB';

export const load: PageLoad = () => {
	return {
		workouts
	};
};
