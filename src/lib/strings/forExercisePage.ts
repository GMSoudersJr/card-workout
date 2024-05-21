import { ESuitSymbolUnicode } from '../../enums/suitSymbolUnicode';
import { EExerciseNames } from '../../enums/exerciseNames';

export const considerations = {
	header: 'CONSIDERATIONS:',
	list: [
		`${ESuitSymbolUnicode.CLUBS} - 'C' for Core (Ab exercises) / 'C' for Cardio`,
		`${ESuitSymbolUnicode.DIAMONDS} - 'D' for Dynamic / 4 Limbs Move`,
		`${ESuitSymbolUnicode.HEARTS} - 'H' for HIIT / An exercise you love`,
		`${ESuitSymbolUnicode.SPADES} - 'S' for Squats (Leg exercises) / 'S' for Side...`,
		`Make it yours and have fun!`
	]
};

export const exampleWorkout = {
	header: 'EXAMPLE WORKOUT:',
	list: [
		`${ESuitSymbolUnicode.CLUBS} ${EExerciseNames.CRUNCHES}`,
		`${ESuitSymbolUnicode.DIAMONDS} ${EExerciseNames.JUMPING_JACKS}`,
		`${ESuitSymbolUnicode.HEARTS} ${EExerciseNames.PUSH_UPS}`,
		`${ESuitSymbolUnicode.SPADES} ${EExerciseNames.ATG_SPLIT_SQUATS}`
	]
};
