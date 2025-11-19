**AI Flashcards Generator**

An interactive React + TypeScript app that converts short study notes into concise flashcards using an LLM. The project demonstrates frontend state management, a small typed component library, and a clear example of integrating with an LLM (via an OpenAI-compatible client) to generate structured JSON flashcards.

**Why this project**: It solves a common study workflow — turning notes into active recall prompts — and showcases practical skills interviewers look for: TypeScript, React component design, async API integration, and safe handling of model outputs.

**Features**

- **Note input**: Add free-form study notes.
- **LLM-powered flashcard generation**: Generates 3–5 concise flashcards per note using `gpt-5-mini`.
- **Flashcard review**: Toggle answers and mark as `correct` / `incorrect`.
- **Typed codebase**: Full TypeScript types for notes and flashcards.
- **Simple, testable components**: `NoteInput`, `NotesList`, `NoteItem`, `FlashcardsList`, `Flashcard`.

**Tech Stack**

- **Framework**: React 18
- **Language**: TypeScript
- **Bundler / Dev**: Vite
- **Styling**: SCSS modules
- **LLM client**: `openai` (configured for a custom base URL)
- **Testing / QA (dev deps)**: Cypress, ESLint, Prettier, Stylelint

**Project Structure (key files)**

- `src/App.tsx` — top-level UI wiring and store usage
- `src/state/useNotesStore.ts` — lightweight React hook store for notes & flashcards
- `src/api/apiClient.ts` — OpenAI client config (uses `VITE_OPENAI_API_KEY`)
- `src/api/flashcardApi.ts` — prompt + parsing logic to generate flashcards
- `src/components/*` — UI components: `NoteInput`, `NoteList`, `NoteItem`, `FlashcardsList`, `Flashcard`

**How it works (overview)**

- User adds a note via the `NoteInput` component.
- `NoteItem` calls `generateFlashcards(note.text)` which sends a deterministic prompt to the LLM asking for a JSON array of flashcards.
- The JSON response is parsed and stored in the local `flashcards` record keyed by `note.id`.
- Generated flashcards are shown in `FlashcardsList` and each card supports toggling answer and marking correctness.

**Security & Production Notes**

- The OpenAI client is configured in `src/api/apiClient.ts` with `dangerouslyAllowBrowser: true` and `apiKey: import.meta.env.VITE_OPENAI_API_KEY`. This is convenient for demos but insecure for production because it exposes the API key to clients.
- For production, move LLM calls to a server-side endpoint (serverless function or API) and never expose API keys in browser bundles.

**Run locally**

1. Install dependencies (Node.js 20+ recommended):

```bash
npm install
```

2. Create a `.env` file at the project root with:

```env
VITE_OPENAI_API_KEY=sk-...your-key-here
```

3. Start the dev server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

5. Deploy (project uses `mate-scripts` and `gh-pages` hooks):

```bash
npm run deploy
```

**Scripts** (from `package.json`)

- `start` — run dev server
- `build` — production build
- `deploy` — prepare & deploy
- `lint`, `format`, `style-format` — code style & linting helpers

**Implementation details / decisions**

- The LLM prompt in `src/api/flashcardApi.ts` asks the model to return valid JSON only. The frontend parses this JSON directly and throws a controlled error if parsing fails. This keeps UI logic simple and isolates prompt engineering in one place.
- Local state is handled with a custom `useNotesStore` hook using React's `useState` for simplicity. This keeps the example small and easy to reason about in an interview.

**Potential Enhancements (good talking points)**

- Move LLM calls to serverless endpoints to protect API keys and add request throttling/usage tracking.
- Add retry/backoff and sanitization of model outputs to handle malformed JSON gracefully.
- Persist notes & flashcards to localStorage or a backend DB to retain study progress.
- Add a spaced-repetition algorithm and performance metrics per note.
- Add unit + component tests with Jest + React Testing Library and Cypress e2e tests (Cypress is already in `devDependencies`).


**Contributing**

- PRs welcome. For formatting/linting run `npm run lint` and `npm run format` before opening a PR.

**License**

- See `LICENSE` in the repository root.


# React TypeScript Starter Pack

To use this template click `Use this template`

### Available Scripts

`Deploy` - available to deploy your application to gh-pages, to deploy the project, change the second line of code in package.json, specifically the homepage value, from "." to the repository name

`SCSS Preprocessor` - available to write your styles with modern style language
