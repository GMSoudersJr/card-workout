export const EWorkouts = {
	CORE: 'Core',
	FOOT: 'Foot',
	FULL_BODY: 'Full Body',
	LOWER_BODY: 'Lower Body',
	STRETCHING: 'Stretching',
	UPPER_BODY: 'Upper Body'
} as const;

export type EWorkouts = (typeof EWorkouts)[keyof typeof EWorkouts];
