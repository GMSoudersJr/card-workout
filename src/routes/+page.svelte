<script lang="ts">
  import { PlayingCard } from '../classes/PlayingCard';
  import { DeckOfCards } from '../classes/deckOfCards';
  import { createPlayingCard } from '../functions/createPlayingCard';
  import { createDeckOfCards } from '../functions/createDeckOfCards';

  const card = new PlayingCard("CLUBS", "KING");

  const card2 = createPlayingCard(PlayingCard, "TWO", "SPADES");
  const deckOfCards = createDeckOfCards(DeckOfCards);
  console.log(deckOfCards);
  console.log(card2);
</script>

<h1>This will be the login page</h1>
