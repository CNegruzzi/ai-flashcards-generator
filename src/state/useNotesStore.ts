import { useState } from 'react';
import { Note } from '../types/Note';
import { Flashcard } from '../types/Flashcard';

export function useNotesStore() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [flashcards, setFlashcards] = useState<Record<string, Flashcard[]>>({});

  const addNote = (text: string) => {
    const newNote: Note = { id: crypto.randomUUID(), text };

    setNotes(prev => [newNote, ...prev]);
  };

  const setNotesFlashCards = (noteId: string, cards: Flashcard[]) => {
    setFlashcards(prev => ({ ...prev, [noteId]: cards }));
  };

  return { notes, flashcards, addNote, setNotesFlashCards };
}
