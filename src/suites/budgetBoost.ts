import { Suite } from '../types';

export const budgetBoost: Suite = {
  startCard: {
    character: 'Martin, CFO',
    description:
      'Good news! We secured an unexpected round of funding to boost development. How do you allocate it?',
    skipSteps: 0,
    yes: {
      description: 'Invest heavily in new features',
      scores: {
        budget: 20,
        appQuality: 5,
        riderHappiness: 5,
      },
    },
    no: {
      description: 'Save it for future emergencies',
      scores: {
        budget: 25,
      },
    },
  },
};