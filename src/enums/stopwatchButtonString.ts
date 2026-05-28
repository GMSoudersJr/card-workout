export const EStopwatchButtonString = {
	PAUSE: 'PAUSE',
	RESUME: 'RESUME'
} as const;

export type EStopwatchButtonString =
	(typeof EStopwatchButtonString)[keyof typeof EStopwatchButtonString];
