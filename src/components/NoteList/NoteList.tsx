import { Flashcard } from '../../types/Flashcard';
import { Note } from '../../types/Note';
import { NoteItem } from '../NoteItem/NoteItem';

import styles from './NoteList.module.scss';

interface Props {
  notes: Note[];
  flashcards: Record<string, Flashcard[]>;
  setNoteFlashcards: (noteId: string, cards: Flashcard[]) => void;
}

export function NotesList({ notes, flashcards, setNoteFlashcards }: Props) {
  return (
    <div className={styles.nodeList}>
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          flashcards={flashcards[note.id] || []}
          setNoteFlashcards={setNoteFlashcards}
        />
      ))}
    </div>
  );
}
