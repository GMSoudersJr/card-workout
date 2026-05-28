export const EExerciseCategories = {
	CALISTHENICS: 'Calisthenics',
	MOBILITY: 'Mobility',
	PRIMAL_MOVEMENTS: 'Primal Movements',
	STABILITY: 'Stability',
	YOGA: 'Yoga'
} as const;

export type EExerciseCategories = (typeof EExerciseCategories)[keyof typeof EExerciseCategories];
