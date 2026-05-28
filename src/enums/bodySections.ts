export const EBodySections = {
	ARMS: 'Arms',
	BACK: 'Back',
	CHEST: 'Chest',
	NECK: 'Neck',
	CORE: 'Core',
	FEET: 'Feet',
	HANDS: 'Hands',
	HIPS: 'Hips',
	LEGS: 'Legs',
	SHOULDERS: 'Shoulders',
	WHOLE_BODY: 'Whole Body'
} as const;

export type EBodySections = (typeof EBodySections)[keyof typeof EBodySections];
