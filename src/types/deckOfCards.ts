import type { PlayingCard } from '../classes/playingCard';

export type TDeckOfCards = {
	cards: PlayingCard[];
	cardsLeft: number;
	topCard: PlayingCard | undefined;
	hasNext: boolean;
	hasPrevious: boolean;
	usedCards: PlayingCard[] | undefined;
};
