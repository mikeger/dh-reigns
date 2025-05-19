import { Suite } from '../types';

export const productionIncident: Suite = {
  startCard: {
    character: 'Steve, Ops Lead',
    description:
      'Critical incident reported in Country X. Do we rollback the latest app release?',
    skipSteps: 0,

    yes: {
      description: 'Rollback immediately',
      scores: {
        budget: -10,
        riderHappiness: +5,
        appQuality: +5,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Maria, Product Manager',
        description:
          'Rollback triggered a cascade failure making things worse! Proceed with hotfix or hold?',
        yes: {
          description: 'Deploy hotfix now',
          scores: {
            budget: -15,
            riderHappiness: -10,
            appQuality: +10,
            deliveryTime: +5,
          },
        },
        no: {
          description: 'Hold off to assess',
          scores: {
            riderHappiness: -20,
            appQuality: -10,
          },
        },
      },
    },

    no: {
      description: 'Do not rollback',
      scores: {
        riderHappiness: -20,
        appQuality: -15,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Igor, Rider Rep',
        description:
          'Riders are striking due to app issues, country government is threatening shutdown. Negotiate or escalate?',
        yes: {
          description: 'Negotiate with riders',
          scores: {
            riderHappiness: +10,
            budget: -10,
            deliveryTime: -5,
          },
        },
        no: {
          description: 'Escalate to headquarters',
          scores: {
            budget: -15,
            riderHappiness: -15,
            appQuality: -10,
          },
        },
      },
    },
  },
};