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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={styles.container}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000000ee',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
        onClick={() => dispatch({ type: 'restart' })}
        role="button"
        tabIndex={0}
      >
        <div className={styles.title}>🎉 What a run!</div>
        <div className={styles.description}>
          <p>Days survived: <strong>{day}</strong></p>
          <p>📊 Final Metrics:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>💰 Budget: {scores.budget}</li>
            <li>😊 Rider Happiness: {scores.riderHappiness}</li>
            <li>🛠️ App Quality: {scores.appQuality}</li>
            <li>⏱️ Delivery Time: {scores.deliveryTime}</li>
          </ul>
          <h1 style={{ marginTop: '1rem', fontWeight: 'bold', color: '#ffcc00' }}>
            Please show this screen to the booth staff.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000ee',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <div className={styles.title}>The End</div>
      <div className={styles.description} style={{ fontWeight: '600', fontSize: '1.1rem' }}>{message}</div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className={styles.nameInput}
        style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc', width: '80%', maxWidth: '300px', marginTop: '1rem' }}
      />
      {error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
      <button
        onClick={handleSubmit}
        className={styles.submitButton}
        disabled={!name.trim()}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '4px', cursor: 'pointer' }}
      >
        Submit Score
      </button>
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#aaa' }}>
        Tap anywhere outside after submitting to restart.
      </div>
    </div>
  );
};
