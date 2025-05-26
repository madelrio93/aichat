import { create } from 'zustand';
import type { ChatMessage, ChatRole } from '../types/openai';

type ChatState = {
  isChatOpen?: boolean;
  messages: ChatMessage[];
  addNewMessage: (text: string, role?: ChatRole) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  isChatOpen: false,
  messages: [],
  addNewMessage: (text: string, role: ChatRole = 'system') =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          createAt: Date.now(),
          role,
          content: text,
        },
      ],
    })),
}));
