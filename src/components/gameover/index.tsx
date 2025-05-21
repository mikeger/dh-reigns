import React, { useState } from 'react';
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


// Replace with your actual deployed Google Apps Script Web App URL
const SHEET_API_URL = 'https://script.google.com/a/macros/deliveryhero.com/s/AKfycbx_iGpxI5QQKgCOWqnfoH_UWvucHxY0qOMrfPh2MG-WfgufXRnIyBHGUJAhu5ZsVo8Mtg/exec';

async function submitHighscore(name: string, scores: Scores, day: number) {
  try {
    const response = await fetch(SHEET_API_URL, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        name,
        day,
        budget: scores.budget,
        riderHappiness: scores.riderHappiness,
        appQuality: scores.appQuality,
        deliveryTime: scores.deliveryTime,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to submit highscore');
    }
    return await response.json();
  } catch (error) {
    console.error('Submit highscore error:', error);
  }
}

export interface GameOverProps {
  scores: Scores;
  dispatch: Dispatch;
  day: number;
}

export const GameOver = ({ scores, dispatch, day }: GameOverProps) => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  let message = '';

  let score: keyof Scores;
  for (score in scores) {
    if (scores[score] === 0) {
      message = messages[score].min;
    } else if (scores[score] === 100) {
      message = messages[score].max;
    }
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    setError('');
    await submitHighscore(name.trim(), scores, day);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={styles.container}
        onClick={() => dispatch({ type: 'restart' })}
        role="button"
        tabIndex={0}
      >
        <div className={styles.title}>Score submitted! Tap to restart.</div>
        <div className={styles.description}>{message}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>FIRED</div>
      <div className={styles.description}>{message}</div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className={styles.nameInput}
      />
      {error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
      <button
        onClick={handleSubmit}
        className={styles.submitButton}
        disabled={!name.trim()}
      >
        Submit Score
      </button>
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#aaa' }}>
        Tap anywhere outside after submitting to restart.
      </div>
    </div>
  );
};
