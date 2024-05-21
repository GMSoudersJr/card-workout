export type TExerciseCard<TPlayingCard, TExercise> = {
	playingCard: TPlayingCard;
	exercise: TExercise;
	get reps(): number;
};
