import { State } from './types';
import { intro } from './suites/intro';

export const createState = (seed: number): State => {
  return {
    seed,
    scores: {
      budget: 50,
      riderHappiness: 50,
      appQuality: 50,
      deliveryTime: 50,
    },
    deck: [{ suite: 'intro', card: intro.startCard }],
    lose: false,
    day: 1,
  };
};
