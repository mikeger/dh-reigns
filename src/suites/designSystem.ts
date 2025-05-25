import { Suite } from '../types';

export const designSystem: Suite = {
  startCard: {
    character: 'Alex, Product Manager',
    description:
      'Our app is developed by eight squads and every screen looks different. What should we do?',
    skipSteps: 0,
    yes: {
      description: 'Hire more engineers',
      scores: {
        budget: -10,
        riderHappiness: 10,
        appQuality: 5,
      },
    },
    no: {
      description: 'Establish a design system',
      scores: {
        budget: -7,
        appQuality: 15,
        riderHappiness: 5,
      },
    },
  },
};