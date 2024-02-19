import type { TBodyPart } from './bodyPart';
import type {TExerciseCategory} from './exerciseCategory';
import type { TMuscle } from './muscle';
import type { TBodySection } from './bodySection';

export type TExercise<TExerciseName> = {
	name: TExerciseName;
	positions?: string[] | undefined;
	bodySections?: TBodySection[] | undefined;
	bodyParts?: TBodyPart[] | undefined;
	muscles?: TMuscle[] | undefined;
	variations?: string[] | undefined;
	categories?: TExerciseCategory[] | undefined;
	demos?: string[] | undefined;
};
