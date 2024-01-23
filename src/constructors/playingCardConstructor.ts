import type { TCardRank } from "../types/cardRank"
import type { TPlayingCard } from "../types/playingCard"
import type { TSuit } from "../types/suit"

export type PlayingCardConstructor = {
	new(suit: TSuit, rank: TCardRank): TPlayingCard<TCardRank, TSuit>
};

