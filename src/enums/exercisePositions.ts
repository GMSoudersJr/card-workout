export const EExercisePositions = {
	FLOOR: 'Floor',
	PRONE: 'Prone',
	KNEELING: 'Kneeling',
	SEATED: 'Seated',
	SIDE: 'Side',
	STANDING: 'Standing',
	SUPINE: 'Supine'
} as const;

export type EExercisePositions = (typeof EExercisePositions)[keyof typeof EExercisePositions];
