import { Suite } from '../types';

/**
 * Navigation feature release scenario
 * -----------------------------------
 * - High upfront budget
 * - Initial rider dissatisfaction
 * - Option to double‑down on fixes
 * - Vendor switch mid‑term triggers churn
 */
export const navigationFeature: Suite = {
  startCard: {
    character: 'Irina, Product Manager',
    description: 'We can finally ship the in‑app navigation module. Roll it out?',
    skipSteps: 0,

    /* ========= YES: ship navigation now ========= */
    yes: {
      description: 'Launch navigation!',
      scores: {
        budget: -20,
        riderHappiness: -10,
        appQuality: -5,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Stan, Rider Representative',
        description:
          'Riders say turn‑by‑turn is laggy and drains battery. Double down on fixes?',
        yes: {
          description: 'Allocate extra team and budget',
          scores: {
            budget: -15,
            riderHappiness: +5,
            appQuality: +10,
            deliveryTime: +5,
          },
        },
        no: {
          description: 'Tell them to cope for now',
          scores: {
            riderHappiness: -10,
            deliveryTime: -5,
          },
        },
      },
    },

    /* ========= NO: delay the feature ========= */
    no: {
      description: 'Postpone release',
      scores: {
        deliveryTime: -5,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Alex, Engineering Manager',
        description:
          'Mid‑term, our nav SDK vendor hikes prices. Switch provider?',
        yes: {
          description: 'Migrate to new provider',
          scores: {
            budget: -10,
            appQuality: -5,
            riderHappiness: -5,
          },
        },
        no: {
          description: 'Stick with expensive vendor',
          scores: {
            budget: -20,
          },
        },
      },
    },
  },
};