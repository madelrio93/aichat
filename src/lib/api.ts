import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import type { ChatCompletionRequest } from '../types/openai';

const openai = createOpenAI({
  apiKey: import.meta.env.VITE_AI_API_KEY,
  baseURL: import.meta.env.VITE_AI_BASE_URL,
});

const MODEL_ID = import.meta.env.VITE_AI_MODEL;

const iaOptions = {
  temperature: 0.2,
  maxTokens: 50,
};

export const getStreamAiResponse = async ({
  messages,
}: ChatCompletionRequest) => {
  console.log({ messages });
  const orderedMessages = messages.sort((a, b) => a.createAt - b.createAt);

  console.log({ orderedMessages });
  const { text } = await generateText({
    model: openai(MODEL_ID),
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant. Always reply in English with short, concise sentences.',
      },
      ...orderedMessages,
    ],
    ...iaOptions,
  });

  console.log(text);

  return text;
};
