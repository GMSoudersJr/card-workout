import type { PageLoad } from './$types';
import { faq } from '$lib/strings/forSeo';

export const load: PageLoad = () => {
	return {
		title: faq.title,
		description: faq.description
	};
};
