

import { Suite } from '../types';

export const offsite: Suite = {
  startCard: {
    character: 'Tina, People Ops',
    description: 'It’s time for the quarterly team offsite! Where should we go?',
    skipSteps: 0,
    yes: {
      description: 'Beach retreat 🏖️ with sunset yoga',
      scores: {
        riderHappiness: 5,
        budget: -8,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Tina, People Ops',
        description: 'Should we schedule a hackathon night at the beach house?',
        yes: {
          description: 'Yes! Code and coconut water!',
          scores: {
            appQuality: 5,
          },
        },
        no: {
          description: 'Nope, pure relaxation',
          scores: {
            appQuality: -5,
          },
        },
      },
    },
    no: {
      description: 'Mountain cabin 🏔️ with fireplace brainstorming',
      scores: {
        appQuality: 5,
        budget: -6,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Tina, People Ops',
        description: 'Someone suggests making a delivery app prototype for the wildlife rangers!',
        yes: {
          description: 'Do it for fun!',
          scores: {
            appQuality: 10,
          },
        },
        no: {
          description: 'Let’s not overthink it',
          scores: {
            riderHappiness: -1,
          },
        },
      },
    },
  },
};