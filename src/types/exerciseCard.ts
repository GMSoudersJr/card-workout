export type TExerciseCard<TPlayingCard, TExercise, TReps> = {
	playingCard: TPlayingCard;
	exercise: TExercise;
	get reps(): number;
}
