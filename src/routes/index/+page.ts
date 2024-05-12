import type { PageLoad } from './$types';
import { exercises } from '$lib/exercisesDB';

export const load: PageLoad = () => {
	return {
		exercises
	}
}
