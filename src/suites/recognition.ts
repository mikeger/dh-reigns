import { Suite } from '../types';

export const recognition: Suite = {
  startCard: {
    character: 'Sarah, Communications Lead',
    description: 'Global HQ sent a message: your tribe is being recognized for excellence in rider experience!',
    skipSteps: 0,
    yes: {
      description: 'Celebrate with a team-wide announcement 🎉',
      scores: {
        riderHappiness: 5,
      },
    },
    no: {
      description: 'Stay humble and keep working 💼',
      scores: {
        deliveryTime: 5,
        appQuality: 5,
      },
    },
  },
};
