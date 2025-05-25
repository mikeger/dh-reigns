import React, { useReducer, useState, useEffect } from 'react';
import styles from './index.module.css';
import { reducer } from '../../reducers';
import { createState } from '../../state';
import { State } from '../../types';
import { CardComponent } from '../card';
import { randomSeed } from '../../utils';
import { ScoresHeader } from '../scoresHeader';
import { GameOver } from '../gameover';

export const App = () => {
    let initialState = createState(randomSeed());

    const storageItem = localStorage && localStorage.getItem('reigns');
    if (storageItem) {
        const storageState = JSON.parse(storageItem) as State;
        if (!storageState.lose) {
            initialState = storageState;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [showIntro, setShowIntro] = useState(state.day === 1 && !state.answer);

    const [lastTier, setLastTier] = useState<string | undefined>(undefined);
    const [showTierPopup, setShowTierPopup] = useState(false);

    useEffect(() => {
      if (state.tier && state.tier !== lastTier) {
        setLastTier(state.tier);
        setShowTierPopup(true);
      }
    }, [state.tier]);

    if (localStorage) {
        localStorage.setItem('reigns', JSON.stringify(state));
    }

    const card = state.deck[0].card;


    return (
        <div className={styles.container}>
            <ScoresHeader
              scores={state.scores}
              effect={state.answer && card[state.answer].scores}
            />

            {showIntro ? (
              <div className={styles.introOverlay}>
                <details className={styles.description} open>
                  <summary style={{ display: 'none' }} />
                  <div style={{ height: '50vh', overflowY: 'auto' }}>
                    <p><strong>Welcome to <em>Command &amp; Courier: Lead Edition</em></strong></p>
                    <p>You’re the freshly minted <strong>Lead</strong> for Delivery Hero’s Deliveries tribe...</p>
                    <ul>
                      <li><strong>Budget 💰</strong> — stretch your dev funds...</li>
                      <li><strong>Rider Happiness 😊</strong> — code choices echo on the street...</li>
                      <li><strong>App Quality 🛠️</strong> — crush bugs, tame latency...</li>
                      <li><strong>Delivery Time ⏱️</strong> — optimize every line of code...</li>
                    </ul>
                    <p><em>Swipe wisely—your code is riding shotgun on every order.</em></p>
                  </div>
                </details>
                {!(state.day === 1 && !state.answer) ? (
                  <div>
                    <button className={styles.closeButton} onClick={() => setShowIntro(false)}>Close</button>
                    <button
                      className={styles.restartButton}
                      onClick={() => {
                        localStorage.removeItem('reigns');
                        window.location.reload();
                      }}
                    >
                      Start Again
                    </button>
                  </div>
                ) : (
                    <button className={styles.closeButton} onClick={() => setShowIntro(false)}>Let's go!</button>
                )}
              </div>
            ) : (
              state.lose === false && !showTierPopup && <CardComponent card={card} dispatch={dispatch} />
            )}

            {showTierPopup && (
              <div className={styles.tierPopupOverlay}>
                <div className={styles.tierPopupContent}>
                  <h2>🎉 New Tier Unlocked!</h2>
                  <h1>{state.tier}</h1>
                  <p>You’ve reached a new milestone in your leadership journey.</p>
                  <button className={styles.tierCloseButton} onClick={() => setShowTierPopup(false)}>Continue</button>
                </div>
              </div>
            )}
            
            <div className={styles.days}>
                <div className={styles.dayCounter}>{state.day}</div>
                <div>day</div>
            </div>

            <button className={styles.reopenButton} onClick={() => setShowIntro(true)}>Show Intro</button>

            {state.lose && <GameOver scores={state.scores} dispatch={dispatch} day={state.day} />}
        </div>
    );
};
