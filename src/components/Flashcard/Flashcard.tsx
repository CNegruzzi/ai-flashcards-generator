import { useState } from 'react';
import { Flashcard as FlashcardType } from '../../types/Flashcard';

import styles from './Flashcard.module.scss';

interface Props {
  card: FlashcardType;
}

export function Flashcard({ card }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [status, setStatus] = useState<FlashcardType['status']>('unaswered');

  const handleMark = (newStatus: 'correct' | 'incorrect') => {
    setStatus(newStatus);
    setShowAnswer(false);
  };

  return (
    <div className={styles.flashcard}>
      <p className={styles.question}>
        <strong>Question:</strong> {card.question}
      </p>

      {showAnswer && (
        <p className={`${styles.answer} ${showAnswer ? styles.visible : ''}`}>
          <strong>Answer:</strong> {card.answer}
        </p>
      )}

      <button
        className={styles.toggleButton}
        onClick={() => setShowAnswer(prev => !prev)}
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>

      {showAnswer && (
        <div className={styles.markButtons}>
          <button
            className={styles.correct}
            onClick={() => handleMark('correct')}
          >
            Correct
          </button>

          <button
            className={styles.incorrect}
            onClick={() => handleMark('incorrect')}
          >
            Incorrect
          </button>
        </div>
      )}

      {status !== 'unaswered' && (
        <p
          className={`${styles.status} ${styles[status as 'unanswered' | 'correct' | 'incorrect']}`}
        >
          Status: {status}
        </p>
      )}
    </div>
  );
}
