import type { TExercise } from '../types/exercise';
import type { TExerciseName } from '../types/exerciseName';
import type { TBodySection } from '../types/bodySection';
import type { TBodyPart } from '../types/bodyPart';
import type { TMuscle } from '../types/muscle';
import type { TExerciseCategory } from '../types/exerciseCategory';
import type { TExercisePosition } from '../types/exercisePosition';
import type { TExerciseVariation } from '../types/exerciseVariation';

export class Exercise implements TExercise<TExerciseName> {
	name: TExerciseName;
	constructor(name: TExerciseName) {
		this.name = name;
		this.positions = undefined;
		this.bodySections = undefined;
		this.bodyParts = undefined;
		this.muscles = undefined;
		this.categories = undefined;
		this.demos = undefined;
	}
	positions?: TExercisePosition[] | undefined;
	variations?: TExerciseVariation[] | undefined;
	bodySections?: TBodySection[] | undefined;
	bodyParts?: TBodyPart[] | undefined;
	muscles?: TMuscle[] | undefined;
	categories?: TExerciseCategory[] | undefined;
	demos?: string[] | undefined;
}
