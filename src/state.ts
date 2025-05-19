import { State } from './types';
import { randomDeck } from './utils';

export const createState = (seed: number): State => {
  const [nextSeed, deck] = randomDeck(seed);

  return {
    seed: nextSeed,
    scores: {
      budget: 50,
      riderHappiness: 50,
      appQuality: 50,
      deliveryTime: 50,
    },
    deck,
    lose: false,
    day: 1,
  };
};
