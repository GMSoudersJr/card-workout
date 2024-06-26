import type { PageLoad } from './$types';
import { exercises } from '$lib/exercisesDB';
import { convertTypeValueToEnumValue } from '../../../functions/convertTypeToEnumValue';
import { EExerciseNames } from '../../../enums/exerciseNames';
import { metaHomepageImageUrl } from '$lib/strings/forSeo';

export const load: PageLoad = async ({ params }) => {
	const exercise = exercises.filter(
		(exercise) => exercise.name === params.exerciseName.toUpperCase()
	)[0];

	const exerciseName = convertTypeValueToEnumValue(exercise.name!, EExerciseNames);

	return {
		exercise,
		title: `${exerciseName} | Index | SUIT YOURSELF`,
		description: `Wondering how to do "${exerciseName.toLowerCase()}"? This page provides body position, variations, and a YouTube video as well.`,
		metaImageUrl: metaHomepageImageUrl
	};
};
