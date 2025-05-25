import { Suite } from '../types';

export const vacation: Suite = {
  startCard: {
    character: 'Olga, Team Lead',
    description: 'It’s time to go on vacation. Do you take a break?',
    skipSteps: 0,
    yes: {
      description: 'Yes, I need a break!',
      scores: {
        riderHappiness: 15,
        budget: -10,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Olga, Team Lead',
        description: 'Do you bring special treats for your colleagues?',
        yes: {
          description: 'Bring local specialties',
          scores: {
            riderHappiness: 10,
            budget: -5,
          },
        },
        no: {
          description: 'Just a postcard',
          scores: {
            riderHappiness: 5,
            budget: 0,
          },
        },
      },
    },
    no: {
      description: 'No, I will keep working.',
      scores: {},
      nextCard: {
        skipSteps: 0,
        character: 'Olga, Team Lead',
        description: 'You were too tired and forgot to deactivate a feature flag. An incident occurred!',
        yes: {
          description: 'Quickly disable the flag',
          scores: {
            appQuality: -5,
          },
        },
        no: {
          description: 'Ignore it and hope for the best',
          scores: {
            appQuality: -15,
            riderHappiness: -10,
          },
        },
      },
    },
  },
};
