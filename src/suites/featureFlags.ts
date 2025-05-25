import { Suite } from '../types';

export const featureFlags: Suite = {
  startCard: {
    character: 'Sophie, QA Lead',
    description:
      'We are only creating new feature flags. There are 400 already.',
    skipSteps: 0,
    yes: {
      description: 'No problem, app can handle it',
      scores: {
        appQuality: -10,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Sophie, QA Lead',
        description:
          "There is an incident, but it's unclear which of two similar feature flags to disable.",
        yes: {
          description: 'Disable flag A',
          scores: {
            appQuality: -10,
            riderHappiness: -5,
          },
        },
        no: {
          description: 'Disable flag B',
          scores: {
            appQuality: 10,
            riderHappiness: 5,
          },
        },
      },
    },
    no: {
      description: "Wow, let's clean this one up",
      scores: {
        appQuality: 15,
        riderHappiness: 10,
      },
    },
  },
};