import { Suite } from '../types';

export const fridayRelease: Suite = {
  startCard: {
    character: 'Emma, Analyst',
    description:
      'We’re ready to ship the new feature, but it’s Friday. Release anyway?',
    skipSteps: 0,

    yes: {
      description: 'Ship it!',
      scores: { budget: 10, riderHappiness: 15 },

      nextCard: {
        skipSteps: 0,
        character: 'Emma, Analyst',
        description: 'Disaster! We’ve hit a production bug!',

        yes: {
          description: 'Hot-fix it now!',
          scores: { deliveryTime: -5, budget: -10 }, // team → deliveryTime
        },

        no: {
          description: 'It can wait until Monday.',
          scores: { riderHappiness: -10 }, // audience → riderHappiness
        },
      },
    },

    no: {
      description: 'Delay the release.',
      scores: { budget: -5, riderHappiness: -5 },
    },
  },
};
