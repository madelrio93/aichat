import { SendIcon } from '../assets/icons/SendIcon';
import { useDebouncedTyping } from '../hooks/useDebouncedTyping';
import type { ChatRole } from '../types/openai';

interface SendMessageFormProps {
  addUserMessage: (message: string, role: ChatRole) => void;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  addUserMessage,
}) => {
  const { value, handleOnChange, resetValue } =
    useDebouncedTyping();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    addUserMessage(value, 'user');
    resetValue();
  };

  return (
    <form className="p-1 flex gap-0.5" onSubmit={handleOnSubmit}>
      <input
        className="bg-zinc-200 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
        value={value}
        onChange={handleOnChange}
      />
      <button className="cursor-pointer bg p-2 rounded-full">
        <SendIcon />
      </button>
    </form>
  );
};
