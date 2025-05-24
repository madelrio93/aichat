export type ChatRole = 'user' | 'system';

export interface ChatMessage {
  createAt: number;
  role: ChatRole;
  content: string;
  seen?: boolean;
}

export interface ChatCompletionRequest {
  messages: ChatMessage[];
}
