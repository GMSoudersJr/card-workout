import type { TPlayingCard } from '../types/playingCard';
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import type { PlayingCardConstructor } from '../constructors/playingCardConstructor';

export const createPlayingCard = (
	playingCard: PlayingCardConstructor,
	rank: TCardRank,
	suit: TSuit
): TPlayingCard<TCardRank, TSuit> => {
	return new playingCard(suit, rank);
};
