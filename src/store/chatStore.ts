import { create } from 'zustand';
import type { ChatMessage } from '../types/openai';

type ChatState = {
  isChatOpen?: boolean;
  messages: ChatMessage[];
  addNewUserMessage: (text: string) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  isChatOpen: false,
  messages: [],
  addNewUserMessage: (text: string) =>
    set((state) => ({
      messages: [
        {
          createAt: Date.now(),
          role: 'user',
          content: text,
        },
        ...state.messages,
      ],
    })),
}));
