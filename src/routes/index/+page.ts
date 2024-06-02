import type { PageLoad } from './$types';
import { exercises } from '$lib/exercisesDB';
import { index } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		exercises,
		title: index.title,
		description: index.description
	};
};
