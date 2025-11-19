import OpenAI from 'openai';

export const openai = new OpenAI({
  baseURL: 'https://litellm.studysmarter-infra.de/v1',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
