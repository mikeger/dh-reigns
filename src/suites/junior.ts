import { Suite } from '../types';

export const junior: Suite = {
  startCard: {
    character: 'Anton, Junior Dev',
    description: 'Which do you like more: OOP or FP?',
    skipSteps: 0,

    /* ── OOP branch ───────────────────────────────────────────── */
    yes: {
      description: 'OOP',
      nextCard: {
        skipSteps: 3,
        character: 'Andrew, Junior Dev',
        description: 'I built triple inheritance with an abstract base class.',
        yes: {
          description: 'Try using mix-ins instead.',
          scores: {
            deliveryTime: 10,  // team  → deliveryTime
            appQuality: -10,   // code  → appQuality
          },
        },
        no: {
          description: 'Knock it off with that pattern.',
          scores: {
            deliveryTime: -10, // team → deliveryTime
          },
        },
      },
    },

    /* ── FP branch ────────────────────────────────────────────── */
    no: {
      description: 'FP',
      nextCard: {
        skipSteps: 3,
        character: 'Peter, Senior Dev',
        description:
          'Andrew is writing something weird and calling it a “multiplicative functor.”',
        yes: {
          description: 'Let him experiment.',
          scores: {
            appQuality: -20,   // code  → appQuality
            deliveryTime: -10, // team  → deliveryTime
          },
        },
        no: {
          description: 'I’ll have a talk with him.',
          scores: {
            appQuality: -10,   // code → appQuality
          },
        },
      },
    },
  },
};
