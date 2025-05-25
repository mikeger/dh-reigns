import { Suite } from '../types';

export const appLogic: Suite = {
  startCard: {
    character: 'Max, Backend Engineer',
    description:
      'We have too much logic in the app; it is getting buggy.',
    skipSteps: 0,
    yes: {
      description: 'Move logic to the backend when possible',
      scores: {
        appQuality: 10,
        deliveryTime: 5,
      },
    },
    no: {
      description: 'Keep logic in app',
      scores: {
        appQuality: -15,
        riderHappiness: -10,
      },
    },
  },
};