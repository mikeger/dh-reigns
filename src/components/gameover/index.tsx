import React from 'react';
import styles from './index.module.css';
import { Scores, Dispatch } from '../../types';

const messages: { [key in keyof Scores]: { max: string; min: string } } = {
  /* 💰 BUDGET */
  budget: {
    min: 'The coffers are empty—servers go dark and the project is shut down.',
    max: 'Cash is pouring in, but investors now demand impossible hyper-growth.',
  },

  /* 😊 RIDER HAPPINESS */
  riderHappiness: {
    min: 'Couriers stage a mass walk-out—there’s no one left to deliver orders.',
    max: 'Riders are so ecstatic they now want gold-plated bikes and spa breaks.',
  },

  /* 🛠️ APP QUALITY */
  appQuality: {
    min: 'The app crashes on launch—store ratings plummet to rock bottom.',
    max: 'You’re trapped in endless refactoring; no new features ship for ages.',
  },

  /* ⏱️ DELIVERY TIME */
  deliveryTime: {
    min: 'Deliveries take hours—customers flee to the competition.',
    max: 'Orders arrive so lightning-fast riders can’t rest and go on strike.',
  },
};

export interface GameOverProps {
    scores: Scores;
    dispatch: Dispatch;
}

export const GameOver = ({ scores, dispatch }: GameOverProps) => {
    let message = '';

    let score: keyof Scores;
    for (score in scores) {
        if (scores[score] === 0) {
            message = messages[score].min;
        } else if (scores[score] === 100) {
            message = messages[score].max;
        }
    }

    return (
        <div className={styles.container} onClick={() => dispatch({ type: 'restart' })}>
            <div className={styles.title}>FIRED</div>
            <div className={styles.description}>{message}</div>
        </div>
    );
};
