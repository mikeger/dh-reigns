import { Suite } from '../types';

export const layoff: Suite = {
  startCard: {
    character: 'Mary, HR Manager',
    description:
      'Budget cuts force us to consider layoffs. Do we reduce the engineering team?',
    skipSteps: 0,

    yes: {
      description: 'Initiate layoffs',
      scores: {
        budget: +20,
        riderHappiness: -20,
        appQuality: -10,
        deliveryTime: -10,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Anthony, Senior Engineer',
        description:
          'Layoffs triggered low morale and knowledge loss. Do we hire contractors or redistribute workload?',
        yes: {
          description: 'Hire contractors',
          scores: {
            budget: -15,
            riderHappiness: +5,
            appQuality: +5,
            deliveryTime: +5,
          },
        },
        no: {
          description: 'Redistribute workload internally',
          scores: {
            riderHappiness: -10,
            appQuality: -5,
            deliveryTime: -5,
          },
        },
      },
    },

    no: {
      description: 'Avoid layoffs',
      scores: {
        budget: -15,
        riderHappiness: +10,
        appQuality: 0,
        deliveryTime: 0,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Maria, Finance Lead',
        description:
          'Budget deficit persists. Do we freeze hiring or cut other expenses?',
        yes: {
          description: 'Freeze hiring',
          scores: {
            budget: +5,
            riderHappiness: -5,
          },
        },
        no: {
          description: 'Cut other expenses',
          scores: {
            budget: +10,
            riderHappiness: -10,
          },
        },
      },
    },
  }
};
