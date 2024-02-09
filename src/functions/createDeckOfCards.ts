import { ESuit } from '../enums/suit';
import { ECardRank } from '../enums/cardRank';
import { PlayingCard } from '../classes/playingCard'
import type { TSuit } from '../types/suit';
import type { TCardRank } from '../types/cardRank';
import { createPlayingCard } from './createPlayingCard';

export const createDeckOfCards = () => {
	let result: PlayingCard[] = [];
	const suits = Object.keys(ESuit);
	const ranks = Object.keys(ECardRank);
	for (let i = 0; i < suits.length; i++) {
		let suit = suits[i];
		for (let j = 0; j < ranks.length; j++) {
			let rank = ranks[j];
			const playingCard = createPlayingCard(PlayingCard, rank as TCardRank, suit as TSuit);
			result.push(playingCard);
		}
	}
	return result;
}

