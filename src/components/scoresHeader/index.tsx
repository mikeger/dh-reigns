import React from 'react';
import styles from './index.module.css';
import { Scores, ScoresEffect } from '../../types';
import { Score } from '../score';

export interface ScoresHeaderProps {
    scores: Scores;
    effect?: ScoresEffect;
}

export const ScoresHeader = ({ scores, effect }: ScoresHeaderProps) => {
  return (
    <div className={styles.container}>
      <div>
        <Score
          type="budget"
          value={scores.budget}
          delta={effect && effect.budget}
        />
      </div>
      <div>
        <Score
          type="riderHappiness"
          value={scores.riderHappiness}
          delta={effect && effect.riderHappiness}
        />
      </div>
      <div>
        <Score
          type="appQuality"
          value={scores.appQuality}
          delta={effect && effect.appQuality}
        />
      </div>
      <div>
        <Score
          type="deliveryTime"
          value={scores.deliveryTime}
          delta={effect && effect.deliveryTime}
        />
      </div>
    </div>
  );
};
