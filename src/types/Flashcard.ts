export interface Flashcard {
  question: string;
  answer: string;
  status?: 'unaswered' | 'correct' | 'incorrect';
}
