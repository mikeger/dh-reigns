
import { Suite, Card } from '../types';

// Cards definitions

const startRealGameCard: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'Good luck leading Deliveries! Swipe left to start the real game.',
  yes: {
    description: 'Start!',
    scores: {},
  },
  no: {
    description: 'Let\'s go!',
    scores: {},
  },
};

const explainMetricsCard3: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'Budget, Rider Happiness, App Quality, Delivery Time are all vital to our success.',
  yes: {
    description: 'Understood!',
    scores: {},
    nextCard: startRealGameCard
  },
  no: {
    description: 'Explain again',
    scores: {},
    nextCard: {
      skipSteps: 0,
      character: 'System',
      description:
        'Please swipe right for Budget, left for Rider Happiness, right for App Quality, left for Delivery Time.',
      yes: {
        description: 'Okay',
        scores: {},
      },
      no: {
        description: 'Repeat again',
        scores: {},
        nextCard: startRealGameCard,
      },
    },
  },
};

const explainMetricsCard2: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description:
    'App Quality measures crash-free usage and bug fixes. Delivery Time tracks how fast orders arrive.',
  yes: {
    description: 'Thanks!',
    scores: {},
    nextCard: explainMetricsCard3,
  },
  no: {
    description: 'Repeat Metrics',
    scores: {},
    nextCard: explainMetricsCard3,
  },
};

const explainMetricsCard1: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description:
    'Budget is the money we have to run projects. Rider Happiness shows how satisfied our riders are.',
  yes: {
    description: 'Next',
    scores: {},
    nextCard: explainMetricsCard2,
  },
  no: {
    description: 'Tell me again',
    scores: {},
    nextCard: explainMetricsCard2,
  },
};

const keyMetricsCard: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'Our key metrics are Budget, Rider Happiness, App Quality, and Delivery Time.',
  yes: {
    description: 'Got it!',
    scores: {},
    nextCard: explainMetricsCard1,
  },
  no: {
    description: 'Tell me again',
    scores: {},
    nextCard: explainMetricsCard1,
  },
};

const learnMetricsCard: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'Want to learn about the key metrics we track?',
  yes: {
    description: 'Yes',
    scores: {},
    nextCard: keyMetricsCard,
  },
  no: {
    description: 'Boring!',
    scores: {},
    nextCard: startRealGameCard,
  },
};

const promotionCard: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'In this game you have been promoted to Lead of the Deliveries tribe.',
  yes: {
    description: 'Continue',
    scores: {},
    nextCard: learnMetricsCard,
  },
  no: {
    description: 'Continue',
    nextCard: learnMetricsCard,
  },
};

const naughtyCard: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'No need to be grumpy! Start the game?',
  yes: {
    description: 'Yes',
    scores: {},
    nextCard: startRealGameCard,
  },
  no: {
    description: 'What is the game?',
    nextCard: promotionCard,
  },
};

const welcomeCard: Card = {
  tutorial: true,
  skipSteps: 0,
  character: 'System',
  description: 'Welcome to Tech & Product Bazaar 2025! Swipe left to begin your journey.',
  no: {
    description: 'Sure',
    scores: {},
    nextCard: promotionCard,
  },
  yes: {
    description: 'No',
    scores: {},
    nextCard: naughtyCard,
  },
};

export const intro: Suite = {
  startCard: welcomeCard,
};