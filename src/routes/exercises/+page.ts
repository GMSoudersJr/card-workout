import type { PageLoad } from './$types';
import { exercises } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		title: exercises.title,
		description: exercises.description,
		metaImageUrl: exercises.metaImageUrl
	};
};
