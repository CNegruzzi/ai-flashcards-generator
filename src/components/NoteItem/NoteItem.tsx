import { useState } from 'react';
import { Flashcard } from '../../types/Flashcard';
import { Note } from '../../types/Note';
import { generateFlashcards } from '../../api/flashcardApi';

import styles from './NoteItem.module.scss';
import { FlashcardsList } from '../FlashcardsList/FlashcardsList';

interface Props {
  note: Note;
  flashcards: Flashcard[];
  setNoteFlashcards: (noteId: string, cards: Flashcard[]) => void;
}

export function NoteItem({ note, flashcards, setNoteFlashcards }: Props) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    const cards = await generateFlashcards(note.text);

    setNoteFlashcards(note.id, cards);
    setLoading(false);
  };

  return (
    <div className={styles.noteItem}>
      <p>{note.text}</p>

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Flashcards'}
      </button>

      {flashcards.length > 0 && <FlashcardsList cards={flashcards} />}
    </div>
  );
}
