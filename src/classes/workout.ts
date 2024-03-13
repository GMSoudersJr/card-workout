import type { TWorkout } from '../types/workout';
import type { TSuitExercise } from '../types/suitExercise'
import type { TSuit } from '../types/suit';
import type { TExerciseName } from '../types/exerciseName';

export class Workout implements TWorkout<TSuitExercise<TSuit>[]> {
	constructor (
		exercises: TSuitExercise<TSuit>[]
	) {
		this.name = undefined;
		this.exercises = exercises.map((entry) => {
			if (entry.exercise === undefined || entry.exercise === null) return

			return entry.exercise.name
		});
		this.time = undefined;
	}
	name?: string;
	exercises: (TExerciseName | undefined)[];
	time: {
		start: number | undefined,
		end: number | undefined
	} | undefined;
}
