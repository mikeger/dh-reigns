import React, { useReducer } from 'react';
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
            {state.lose === false && <CardComponent card={card} dispatch={dispatch} />}
            <div className={styles.days}>
                <div className={styles.dayCounter}>{state.day}</div>
                <div>day</div>
            </div>
            {state.lose && <GameOver scores={state.scores} dispatch={dispatch} />}
            <details className={styles.description} style={{ marginTop: '1rem' }}>
                <summary>Game&nbsp;Intro&nbsp;—&nbsp;tap&nbsp;to&nbsp;expand</summary>
                <p><strong>Welcome to <em>Command &amp; Courier: Engineering Lead Edition</em></strong></p>

                <p>
                  You’re the freshly minted <strong>Engineering Lead</strong> for Delivery Hero’s Deliveries tribe—the
                  brains behind the Rider app that keeps couriers rolling and meals arriving hot. Every left‑or‑right
                  swipe drops you into another split‑second decision:
                </p>

                <ul>
                  <li><strong>Budget 💰</strong> — stretch your dev funds across tech debt, cloud bills, and shiny new features.</li>
                  <li><strong>Rider Happiness 😊</strong> — code choices echo on the street; a glitchy app means angry riders.</li>
                  <li><strong>App Quality 🛠️</strong> — crush bugs, tame latency, and keep crash‑free sessions above 99 %.</li>
                  <li><strong>Delivery Time ⏱️</strong> — optimize every line of code so orders land on doorsteps in record time.</li>
                </ul>

                <p>
                  Ship refactors or chase features? Automate tests or pray in production? Incentivize riders or cut costs?
                  Keep all four meters healthy and you’ll cement your legacy as the tech wizard who powered lightning‑fast logistics.
                  Let any one tank, and the whole delivery network grinds to a halt.
                </p>

                <p><em>Swipe wisely—your code is riding shotgun on every order.</em></p>
            </details>
        </div>
    );
};
