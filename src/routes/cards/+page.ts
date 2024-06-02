import type { PageLoad } from './$types';
import { cards } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		title: cards.title,
		description: cards.description
	};
};
