export type TPlayingCard<ECardRank, ESuit> = {
	rank: ECardRank;
	suit: ESuit;
	get name(): string;
	get value(): number;
	get symbol(): string;
};
