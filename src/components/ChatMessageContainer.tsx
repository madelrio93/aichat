import { useEffect } from 'react';
import { getStreamAiResponse } from '../lib/api';
import { useChatStore } from '../store/chatStore';
import { ChatMessages } from './ChatMessages';
import { SendMessageForm } from './SendMessageForm';

export const ChatMessageContainer = ({}) => {
  const { messages, addNewMessage } = useChatStore();

  const getIaMessageResponse = async () => {
    const reversedMessages = [...messages].reverse();

    const response = await getStreamAiResponse({
      messages: reversedMessages,
    });

    addNewMessage(response, 'system');
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    console.log({ lastMessage });

    if (!lastMessage) {
      getIaMessageResponse();
      return;
    }

    if (lastMessage.role === 'user') getIaMessageResponse();
  }, [messages]);

  return (
    <div className="h-[528px] relative flex flex-col">
      <div className="bg">
        <div className="text-white px-4 py-2 ">We are online!</div>
      </div>

      <ChatMessages messages={messages} />

      <SendMessageForm addUserMessage={addNewMessage} />
    </div>
  );
};
