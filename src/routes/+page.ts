import type { PageLoad } from './$types';
import { homepage } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		title: homepage.title,
		description: homepage.description
	};
};
