import { Suite } from '../types';

export const holyMonth: Suite = {
  startCard: {
    character: 'Imran, Ops Lead',
    description: 'It’s Ramadan — we expect far fewer orders during daytime. What’s your plan?',
    skipSteps: 0,
    yes: {
      description: 'Reduce active delivery slots during the day',
      scores: {
        deliveryTime: 5,
        riderHappiness: 10,
        budget: -5,
      },
    },
    no: {
      description: 'Keep full operations running',
      scores: {
        budget: -15,
        riderHappiness: -5,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Imran, Ops Lead',
        description: 'Riders are idle for hours. Do you send them home early?',
        yes: {
          description: 'Yes, let them rest',
          scores: {
            riderHappiness: 10,
            budget: 5,
          },
        },
        no: {
          description: 'Keep them on shift',
          scores: {
            riderHappiness: -10,
            budget: -5,
          },
        },
      },
    },
  },
};
