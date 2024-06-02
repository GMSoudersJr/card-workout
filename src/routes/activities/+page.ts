import type { PageLoad } from './$types';
import { activities } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		title: activities.title,
		description: activities.description,
		metaImageUrl: activities.metaImageUrl
	};
};
