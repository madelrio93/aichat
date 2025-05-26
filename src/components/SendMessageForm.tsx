import { useRef, type FormEvent } from 'react';
import { SendIcon } from '../assets/icons/SendIcon';
import type { ChatRole } from '../types/openai';

interface SendMessageFormProps {
  addUserMessage: (message: string, role: ChatRole) => void;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  addUserMessage,
}) => {
  const messageRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = messageRef.current?.value;
    if (!message) return;

    addUserMessage(message, 'user');

    messageRef.current!.value = '';
  };

  return (
    <form className="p-1 flex gap-0.5" onSubmit={handleOnSubmit}>
      <input
        type="text"
        ref={messageRef}
        className="bg-zinc-200 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
      />
      <button className="cursor-pointer bg p-2 rounded-full">
        <SendIcon />
      </button>
    </form>
  );
};
