import { Suite } from '../types';

export const brandManagement: Suite = {
  startCard: {
    character: 'Emma, Tech Lead',
    description:
      'It takes too much time to ship the app for so many brands. What now?',
    skipSteps: 0,
    yes: {
      description: 'Decrease the number of brands',
      scores: {
        riderHappiness: -15,
        appQuality: 10,
      },
    },
    no: {
      description: 'Create mobile infra team to automate it',
      scores: {
        budget: -8,
        appQuality: 10,
        riderHappiness: 5,
      },
    },
  },
};