import { Suite } from '../types';

export const flutterMigration: Suite = {
  startCard: {
    character: 'The CTO',
    description:
      'Can we migrate the Rider app to Flutter to save engineering costs?',
    skipSteps: 0,

    yes: {
      description: 'Approve migration',
      scores: {
        budget: +15,           // save money long term
        appQuality: -20,       // initial bugs and rewrites
        riderHappiness: -5,    // confusion during transition
      },
      nextCard: {
        skipSteps: 0,
        character: 'Natasha, Engineering Manager',
        description:
          'Migration caused delays and extra workload. Double down on training?',
        yes: {
          description: 'Invest in training',
          scores: {
            budget: -10,
            riderHappiness: +10,
            appQuality: +10,
          },
        },
        no: {
          description: 'Push forward with minimal training',
          scores: {
            riderHappiness: -15,
            appQuality: -10,
            deliveryTime: -5,
          },
        },
      },
    },

    no: {
      description: 'Keep current native stack',
      scores: {
        budget: -5,           // higher ongoing costs
        appQuality: +5,       // stable platform
        riderHappiness: +5,   // familiar experience
      },
      nextCard: {
        skipSteps: 0,
        character: 'Aviya, Product Owner',
        description:
          'Competitors launch faster features with Flutter. Increase feature budget?',
        yes: {
          description: 'Allocate more budget to features',
          scores: {
            budget: -15,
            riderHappiness: +10,
            deliveryTime: +10,
          },
        },
        no: {
          description: 'Stay lean and focus on quality',
          scores: {
            budget: +10,
            riderHappiness: -5,
          },
        },
      },
    },
  },
};