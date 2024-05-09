import type { TBodyPart } from './bodyPart';
import type { TExerciseCategory } from './exerciseCategory';
import type { TMuscle } from './muscle';
import type { TBodySection } from './bodySection';
import type { TExercisePosition } from './exercisePosition';
import type { TExerciseVariation } from './exerciseVariation';

export type TExercise<TExerciseName> = {
	name: TExerciseName | undefined;
	positions?: TExercisePosition[] | undefined;
	bodySections?: TBodySection[] | undefined;
	bodyParts?: TBodyPart[] | undefined;
	muscles?: TMuscle[] | undefined;
	variations?: TExerciseVariation[] | undefined;
	categories?: TExerciseCategory[] | undefined;
	demos?: string[] | undefined;
	emojis?: string[] | undefined;
};
