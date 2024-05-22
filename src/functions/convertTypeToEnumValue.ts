import type { TBodyPart } from '../types/bodyPart';
import type { TBodySection } from '../types/bodySection';
import type { TCardRank } from '../types/cardRank';
import type { TCardRankSymbol } from '../types/cardRankSymbol';
import type { TCardValue } from '../types/cardValue';
import type { TExerciseCategory } from '../types/exerciseCategory';
import type { TExerciseName } from '../types/exerciseName';
import type { TExercisePosition } from '../types/exercisePosition';
import type { TExerciseVariation } from '../types/exerciseVariation';
import type { TMuscle } from '../types/muscle';
import type { TRadioButtonLabelName } from '../types/radioButtonLabelName';
import type { TReps } from '../types/reps';
import type { TSuit } from '../types/suit';
import type { TSuitColors } from '../types/suitColors';

import { EBodyParts } from '../enums/bodyParts';
import { EBodySections } from '../enums/bodySections';
import { ECardRank } from '../enums/cardRank';
import { ECardRankSymbol } from '../enums/cardRankSymbol';
import { ECardValue} from '../enums/cardValue';
import { EExerciseCategories } from '../enums/exerciseCategories';
import { EExerciseNames } from '../enums/exerciseNames';
import { EExercisePositions } from '../enums/exercisePositions';
import { EExerciseVariations } from '../enums/exerciseVariations';
import { EMuscles } from '../enums/muscles';
import { ERadioButtonLabelNames } from '../enums/radioButtonLabelNames';
import { EReps } from '../enums/reps';
import { ESuit } from '../enums/suit';
import { ESuitColors } from '../enums/suitColors';
import { ESuitSymbolUnicode } from '../enums/suitSymbolUnicode';

export function convertTypeValueToEnumValue(
	detailType: (
		TBodyPart |
		TBodySection |
		TCardRank |
		TCardRankSymbol |
		TCardValue |
		TExerciseCategory |
		TExerciseName |
		TExercisePosition |
		TExerciseVariation |
		TMuscle |
		TRadioButtonLabelName |
		TReps |
		TSuit |
		TSuitColors
	),
	detailEnum: (
		typeof EBodyParts |
		typeof EBodySections |
		typeof ECardRank |
		typeof ECardRankSymbol |
		typeof ECardValue |
		typeof EExerciseCategories |
		typeof EExerciseNames |
		typeof EExercisePositions |
		typeof EExerciseVariations |
		typeof EMuscles |
		typeof ERadioButtonLabelNames |
		typeof EReps |
		typeof ESuit |
		typeof ESuitColors |
		typeof ESuitSymbolUnicode
	)
): string {

		return detailEnum[detailType as keyof typeof detailEnum] as string;
}


export function convertTypeValuesToEnumValues(
	detailsType: (
		TBodyPart[] |
		TBodySection[] |
		TCardRank[] |
		TCardRankSymbol[] |
		TCardValue[] |
		TExerciseCategory[] |
		TExerciseName[] |
		TExercisePosition[] |
		TExerciseVariation[] |
		TMuscle[] |
		TRadioButtonLabelName[] |
		TReps[] |
		TSuit[] |
		TSuitColors[]
	),
	detailsEnum: (
		typeof EBodyParts |
		typeof EBodySections |
		typeof ECardRank |
		typeof ECardRankSymbol |
		typeof ECardValue |
		typeof EExerciseCategories |
		typeof EExerciseNames |
		typeof EExercisePositions |
		typeof EExerciseVariations |
		typeof EMuscles |
		typeof ERadioButtonLabelNames |
		typeof EReps |
		typeof ESuit |
		typeof ESuitColors
	)
): string[] {

	const result = detailsType.map((detail) => {
		return detailsEnum[detail as keyof typeof detailsEnum] as string;
	});

	return result;

}
