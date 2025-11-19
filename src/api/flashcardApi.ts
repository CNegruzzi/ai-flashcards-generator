import { Flashcard } from '../types/Flashcard';
import { openai } from './apiClient';

export async function generateFlashcards(note: string): Promise<Flashcard[]> {
  const response = await openai.chat.completions.create({
    model: 'gpt-5-mini',
    temperature: 1,
    messages: [
      {
        role: 'user',
        content: `You are an assistant that converts short study notes into flashcards.
Return ONLY valid JSON in the following exact format:

[
  { "question": "Write the question here", "answer": "Write the answer here" },
  { "question": "...", "answer": "..." }
]

Rules:
1. Do NOT include any text outside of the JSON array.
2. Do NOT include explanations, brackets, or extra punctuation outside the JSON.
3. Each item must have both a "question" and "answer" field.
4. Generate 3-5 flashcards per note if possible.
5. Keep the questions concise and focused.
6. Return valid JSON that can be parsed directly.

Here is the note to convert:

${note}`,
      },
    ],
  });

  const content = response.choices[0].message.content;

  try {
    if (content === null || content === undefined) {
      throw new Error('No content returned from OpenAI response');
    }

    return JSON.parse(content);
  } catch (err) {
    throw new Error(`Failed to parse model response: ${String(err)}`);
  }
}
