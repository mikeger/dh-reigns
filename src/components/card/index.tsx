import React, { useState, useEffect } from 'react';
import { Card, Dispatch } from '../../types';
import styles from './index.module.css';

const emojiAvatars = [
  '🧑‍💻', '👩‍💻', '👨‍💻', '🦸‍♀️', '🦸‍♂️', '👩‍🔧', '👨‍🔧',
  '🚴‍♀️', '🚴‍♂️', '🛵', '🛴', '📱', '🖥️', '⚙️', '💡',
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function getEmojiAvatar(characterName: string): string {
  const index = hashString(characterName) % emojiAvatars.length;
  return emojiAvatars[index];
}

const choiceThreshold = 30;

interface PrevCard {
    x: number;
    y: number;
    angle: number;
    card: Card;
}

const PrevCardComponent = ({ data: { card, x, y, angle } }: { data: PrevCard }) => {
    const [position, setPosition] = useState({ x, y, angle });
    const { description, character } = card;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPosition({
                x: position.x + Math.sign(position.x) * 500,
                y: position.y + 1000,
                angle: position.angle + Math.sign(position.x) * 4,
            });
        }, 20);

        return () => {
            clearTimeout(timeout);
        };
    }, [position.x, position.y, position.angle]);

    return (
        <div
            className={styles.prevCard}
            style={{
                transform: `translate(${position.x}px, ${position.y}px) rotate(${position.angle}rad)`,
            }}
        >
            <div className={styles.description}>{description}</div>
            {character && <div className={styles.character}>{character}</div>}
        </div>
    );
};

const CardContent = ({ card, x }: { card: Card; x: number }) => {
    const choice = getChoice(x);

    return (
        <div className={styles.content}>
            <div
              style={{ fontSize: 48, marginBottom: 8 }}
              aria-label="avatar"
              role="img"
            >
              {card.character ? getEmojiAvatar(card.character) : '❓'}
            </div>
            <div className={styles.description}>{card.description}</div>
            {choice && card[choice].description.length > 0 && (
                <div className={styles.choice}>{card[choice].description}</div>
            )}
            {card.character && <div className={styles.character}>{card.character}</div>}
        </div>
    );
};

export interface CardComponentProps {
    card: Card;
    dispatch: Dispatch;
}

export interface CardComponentState {
    down: boolean;
    start: number[];
    move: number[];
    prevCard?: PrevCard;
}

export const CardComponent = ({ card, dispatch }: CardComponentProps) => {
    const [state, setState] = useState<CardComponentState>({
        down: false,
        start: [0, 0],
        move: [0, 0],
    });

    const [showTutorial, setShowTutorial] = useState(true);

    const { x, y, angle } = getCardPosition(state.move[0]);

    const onMouseDown = (ev: React.MouseEvent) => {
        ev.preventDefault();
        setState({
            ...state,
            down: true,
            start: [ev.clientX, ev.clientY],
        });
    };

    const onTouchStart = (ev: React.TouchEvent) => {
        ev.preventDefault();
        const touch = ev.touches[0];
        setState({
            ...state,
            down: true,
            start: [touch.clientX, touch.clientY],
        });
    };

    const onMouseUp = () => {
        if (!state.down) {
            return;
        }

        const choice = getChoice(state.move[0]);

        setState({
            ...state,
            down: false,
            start: [0, 0],
            move: [0, 0],
            prevCard: choice ? { x, y, angle, card } : undefined,
        });

        if (choice) {
            setShowTutorial(false);
            dispatch({ type: choice });
        }
    };

    const onMouseMove = (ev: React.MouseEvent) => {
        ev.preventDefault();

        if (!state.down) {
            return;
        }

        dispatch({ type: 'showAnswer', answer: getChoice(state.move[0]) });

        setState({
            ...state,
            move: [ev.clientX - state.start[0], ev.clientY - state.start[1]],
        });
    };

    const onTouchMove = (ev: React.TouchEvent) => {
        ev.preventDefault();
        if (!state.down) {
            return;
        }

        dispatch({ type: 'showAnswer', answer: getChoice(state.move[0]) });

        const touch = ev.touches[0];
        setState({
            ...state,
            move: [touch.clientX - state.start[0], touch.clientY - state.start[1]],
        });
    };

    useEffect(() => {
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchend', onMouseUp);
        return () => {
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchend', onMouseUp);
        };
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!state.down && !state.prevCard) {
                setShowTutorial(true);
            }
        }, 6000);
        return () => clearTimeout(timeout);
    }, [state.down, state.move]);

    return (
        <div className={styles.container}>
            {showTutorial && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#ffcccc',
                    fontSize: '24px',
                    zIndex: 10,
                  }}
                >
                  ←
                </div>
                <div
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#ffcccc',
                    fontSize: '24px',
                    zIndex: 10,
                  }}
                >
                  →
                </div>
              </>
            )}
            {getChoice(state.move[0]) && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: getChoice(state.move[0]) === 'no' ? '10px' : 'auto',
                  right: getChoice(state.move[0]) === 'yes' ? '10px' : 'auto',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#ff4d4d',
                  color: '#000',
                  padding: '10px 15px',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  zIndex: 10,
                  opacity: Math.min(Math.abs(state.move[0]) / 100, 1),
                }}
              >
                {card[getChoice(state.move[0])!].description}
              </div>
            )}
            {state.prevCard && (
                <PrevCardComponent
                    data={state.prevCard}
                    key={state.prevCard.card.description.slice(0, 9)}
                />
            )}
            <div
                key={card.description.slice(0, 10)}
                className={styles.movePart}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                style={{
                    transform: `translate(${x}px, ${y}px) rotate(${angle}rad)`,
                }}
            >
                <CardContent card={card} x={state.move[0]} />
                <div className={styles.shirt} />
            </div>
        </div>
    );
};

function getChoice(x: number): 'yes' | 'no' | undefined {
    if (x > choiceThreshold) {
        return 'yes';
    }

    if (x < -choiceThreshold) {
        return 'no';
    }
}

function getCardPosition(x: number) {
    const R = 500;
    const angle = Math.asin(x / R);
    const y = R - Math.sqrt(R * R - x * x);
    return {
        x,
        y,
        angle,
    };
}
