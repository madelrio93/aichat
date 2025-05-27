import type { ChatRole } from '../types/openai';

interface ChatTypingIndicatorProps {
  role: ChatRole;
}

export const ChatTypingIndicator: React.FC<ChatTypingIndicatorProps> = ({
  role,
}) => {
  const roleStyle = role === 'system' ? 'bg-zinc-100' : 'bg-zinc-800';

  return (
    <div
      className={`flex gap-1 w-fit px-4 py-4 rounded-full ${role === 'system' ? 'bg' : 'bg-zinc-200'}`}
    >
      <span
        className={`w-2 h-2 rounded-full animate-pulse delay-0 $ ${roleStyle}`}
      />
      <span
        className={`w-2 h-2 rounded-full animate-pulse delay-150 $ ${roleStyle}`}
      />
      <span
        className={`w-2 h-2 rounded-full animate-pulse delay-300 $ ${roleStyle}`}
      />
      <span
        className={`w-2 h-2 rounded-full animate-pulse delay-450 $ ${roleStyle}`}
      />
    </div>
  );
};
