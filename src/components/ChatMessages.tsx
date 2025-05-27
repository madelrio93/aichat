import type { ChatMessage, ChatRole } from '../types/openai';
import { ChatTypingIndicator } from './ChatTypingIndicator';

interface ChatMessageProps {
  typingRole?: ChatRole | null;
  messages: ChatMessage[];
}

export const ChatMessages: React.FC<ChatMessageProps> = ({
  messages,
  typingRole = null,
}) => {
  return (
    <div className="px-4 pb-2 box-border flex-1 w-full flex flex-col-reverse gap-2 overflow-auto">
      {typingRole && (
        <div className={`flex ${typingRole === 'system' ? 'start' : 'justify-end'} `}>
          <ChatTypingIndicator role={typingRole} />
        </div>
      )}

      {[...messages].reverse().map(({ createAt, role, content }) => (
        <div
          key={createAt}
          className={`flex ${role === 'system' ? 'start' : 'justify-end'} `}
        >
          <div
            className={`w-fit px-4 py-2 rounded-full ${role === 'system' ? 'bg text-zinc-100' : 'bg-zinc-200 w-fit  text-zinc-800'}`}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};
