import { useNotesStore } from './state/useNotesStore';

import styles from './App.module.scss';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NoteList';

export function App() {
  const {
    notes,
    flashcards,
    addNote,
    setNotesFlashCards: setNoteFlashcards,
  } = useNotesStore();

  return (
    <div className={styles.main}>
      <h1 className={styles.headerMain}>AI Flashcard Creator</h1>

      <NoteInput addNote={addNote} />

      <NotesList
        notes={notes}
        flashcards={flashcards}
        setNoteFlashcards={setNoteFlashcards}
      />
    </div>
  );
}
