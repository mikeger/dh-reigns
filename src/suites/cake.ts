import { Suite } from '../types';

export const cake: Suite = {
  startCard: {
    character: 'Nina, Office Manager',
    description: 'You decide it’s time to bake a cake for your colleagues. What kind?',
    skipSteps: 0,
    yes: {
      description: 'Triple chocolate with raspberry',
      scores: {
        riderHappiness: 10,
        budget: -1,
      },
    },
    no: {
      description: 'Gluten-free carrot cake',
      scores: {
        riderHappiness: 8,
        budget: -3,
      },
    },
  },
};