import type { PageLoad } from './$types';
import { exercises } from '$lib/exercisesDB';

export const load: PageLoad = () => {
	return {
		exercises,
		title: 'Index | SUIT YOURSELF',
		description: `Want to know more about the exercises in SUIT YOURSELF? This is the list with a possible link to a demo.`
	};
};
