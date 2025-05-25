import { Suite } from '../types';

export const clonedApps: Suite = {
  startCard: {
    character: 'Zara, Security Analyst',
    description: 'Riders are using a hacked app clone that shows more orders and fakes GPS to get an advantage. What do you do?',
    skipSteps: 0,
    yes: {
      description: 'Launch investigation and patch vulnerabilities',
      scores: {
        appQuality: -5,
        budget: -7,
        riderHappiness: -5,
      },
    },
    no: {
      description: 'Ignore it for now — maybe it’s not widespread',
      scores: {
        appQuality: -10,
        riderHappiness: 5,
      },
      nextCard: {
        skipSteps: 0,
        character: 'Zara, Security Analyst',
        description: 'More clones appear. Fair riders are writing us letters of complaint. Do you respond now?',
        yes: {
          description: 'Enforce authentication and stricter app checks',
          scores: {
            appQuality: 10,
            budget: -10,
          },
        },
        no: {
          description: 'Hope it dies down',
          scores: {
            riderHappiness: -15,
            appQuality: -15,
          },
        },
      },
    },
  },
};
