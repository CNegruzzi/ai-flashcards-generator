import { Flashcard } from '../../types/Flashcard';
import { Flashcard as FlashcardComp } from '../Flashcard/Flashcard';

import styles from './FlashcardsList.module.scss';

interface Props {
  cards: Flashcard[];
}

export function FlashcardsList({ cards }: Props) {
  return (
    <div className={styles.flashcardList}>
      {cards.map((card, idx) => (
        <FlashcardComp key={idx} card={card} />
      ))}
    </div>
  );
}
