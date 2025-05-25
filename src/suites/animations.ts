

import { Suite } from '../types';

export const animations: Suite = {
  startCard: {
    character: 'Liam, UX Designer',
    description: 'I have an idea — what if the app had flying food animations when an order is picked up?',
    skipSteps: 0,
    yes: {
      description: 'Absolutely! Let’s make it magical ✨',
      scores: {
        appQuality: 5,
        riderHappiness: 10,
        budget: -3,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Liam, UX Designer',
        description: 'Should we also animate the rider avatar with a cape and rocket boots?',
        yes: {
          description: 'Let’s make it heroic 🦸',
          scores: {
            riderHappiness: 15,
            budget: -5,
            appQuality: 5,
          },
        },
        no: {
          description: 'Let’s keep it realistic',
          scores: {
            appQuality: 5,
            riderHappiness: 5,
          },
        },
      },
    },
    no: {
      description: 'Let’s keep it minimal',
      scores: {
        riderHappiness: -5,
      },
    },
  },
};