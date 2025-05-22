import { useState } from 'react';
import { SendMessageForm } from './SendMessageForm';

type Message = {
  id: number;
  author: 'iam' | 'ia';
  text: string;
};

export const ChatMessageContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 2,
      author: 'ia',
      text: ' Lorem ipsum dolor sit amet.',
    },
    {
      id: 1,
      author: 'iam',
      text: ' Lorem ipsum dolor sit amet.',
    },
  ]);

  const addNewIamMessage = (message: string) => {
    setMessages([
      {
        id: Date.now(),
        author: 'iam',
        text: message,
      },
      ...messages,
    ]);
  };

  return (
    <div className="h-[528px] relative flex flex-col">
      <div className="bg">
        <div className="text-white px-4 py-2 ">We are online!</div>
      </div>

      <div className="px-4 pb-2 box-border flex-1 w-full flex flex-col-reverse gap-2">
        {messages.map(({ id, author, text }) => (
          <div
            key={id}
            className={`flex justify-${author === 'ia' ? 'start' : 'end'}`}
          >
            <div
              className={`w-fit px-4 py-2 rounded-full ${author === 'ia' ? 'bg text-zinc-100' : 'bg-zinc-200 w-fit  text-zinc-800'}`}
            >
              {text}
            </div>
          </div>
        ))}
      </div>

      <SendMessageForm addMessage={addNewIamMessage} />
    </div>
  );
};
