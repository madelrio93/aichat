import { create } from 'zustand';
import type { ChatMessage, ChatRole } from '../types/openai';

type ChatState = {
  isChatOpen?: boolean;
  messages: ChatMessage[];
  firstMessagePannel?: boolean;
  typingRole?: ChatRole | null;
  addNewMessage: (text: string, role?: ChatRole) => void;
  toogleChatMessageContainer: () => void;
  setFirstMessagePannel: () => void;
  setTypingRole: (role: ChatRole | null) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  isChatOpen: false,
  messages: [],
  firstMessagePannel: false,
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
  toogleChatMessageContainer: () =>
    set((state) => ({ isChatOpen: !state.isChatOpen })),
  setFirstMessagePannel: () =>
    set((state) => ({ firstMessagePannel: !state.firstMessagePannel })),
  setTypingRole: (role) => set(() => ({ typingRole: role })),
}));
