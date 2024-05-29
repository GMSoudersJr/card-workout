import type { PageLoad } from './$types';
import { exercises } from '$lib/exercisesDB';

export const load: PageLoad = ({ params }) => {
	const exercise = exercises.filter(
		(exercise) => exercise.name === params.exerciseName.toUpperCase()
	)[0];
	return { exercise };
};
