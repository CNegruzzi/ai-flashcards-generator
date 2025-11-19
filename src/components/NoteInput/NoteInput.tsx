import { useState } from 'react';

import styles from './NoteInput.module.scss';

interface Props {
  addNote: (text: string) => void;
}

export function NoteInput({ addNote }: Props) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) {
      return;
    }

    addNote(text);
    setText('');
  };

  return (
    <div className={styles.noteInput}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write your note..."
      />

      <button onClick={handleAdd}>Add the note</button>
    </div>
  );
}
