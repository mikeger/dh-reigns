import {
    Action,
    State,
    YesAction,
    NoAction,
    Scores,
    ScoresEffect,
    CardChoice,
    ShowAnswerAction,
} from './types';
import { arrayInsert, clamp, randomDeck } from './utils';
import { suites } from './suites';
import { createState } from './state';

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'yes':
            return yes(state, action);
        case 'no':
            return no(state, action);
        case 'showAnswer':
            return showAnswer(state, action);
        case 'restart':
            return createState(state.seed);
        default:
            return state;
    }
};

const showAnswer = (state: State, { answer }: ShowAnswerAction): State => {
    return {
        ...state,
        answer,
    };
};

const effect = (state: State, effect: CardChoice): State => {
    let [{ suite }, ...deck] = state.deck;

    if (effect.nextCard) {
        deck = arrayInsert(deck, effect.nextCard.skipSteps, { suite, card: effect.nextCard });
    } else {
        // before using suites[suite], guard against undefined
        if (!suite || !suites[suite]) {
            // pull a fresh random deck and restart the cycle
            [state.seed, deck] = randomDeck(state.seed);
            // pick the first suite key from the new deck
            suite = deck[0].suite;
        }

        // now suite is guaranteed valid
        deck = [...deck, { suite, card: suites[suite].startCard }];
    }

    let { seed } = state;

    if (deck.length === 0) {
        [seed, deck] = randomDeck(seed);
    }

    const scores = effect.scores ? newScores(state.scores, effect.scores) : state.scores;

    const determineTier = (day: number): string | undefined => {
      if (day >= 100) return 'Courier Command Champion';
      if (day >= 60) return 'Logistics Innovator';
      if (day >= 40) return 'Tribe Stabilizer';
      if (day >= 15) return 'Delivery Tech Enthusiast';
      return undefined;
    };

    return {
      ...state,
      seed,
      scores,
      deck,
      answer: undefined,
      lose: checkLose(scores),
      day: state.deck[0].card.tutorial ? state.day : state.day + 1,
      tier: determineTier(state.deck[0].card.tutorial ? state.day : state.day + 1),
    };
};

const yes = (state: State, _action: YesAction): State => {
    return effect(state, state.deck[0].card.yes);
};

const no = (state: State, _action: NoAction): State => {
    return effect(state, state.deck[0].card.no);
};

const newScores = (score: Scores, diff: ScoresEffect): Scores => {
  const sc = (v: number) => clamp(v, 0, 100);

  return {
    budget: diff.budget ? sc(score.budget + diff.budget) : score.budget,
    riderHappiness: diff.riderHappiness
      ? sc(score.riderHappiness + diff.riderHappiness)
      : score.riderHappiness,
    appQuality: diff.appQuality
      ? sc(score.appQuality + diff.appQuality)
      : score.appQuality,
    deliveryTime: diff.deliveryTime
      ? sc(score.deliveryTime + diff.deliveryTime)
      : score.deliveryTime,
  };
};

const checkLose = (scores: Scores): boolean => {
  return (
    scores.budget === 0 ||
    scores.budget === 100 ||
    scores.riderHappiness === 0 ||
    // scores.riderHappiness === 100 ||
    scores.appQuality === 0 ||
    // scores.appQuality === 100 ||
    // scores.deliveryTime === 0 ||
    scores.deliveryTime === 100
  );
};
