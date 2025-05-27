import { useEffect } from 'react';
import { getStreamAiResponse } from '../lib/api';
import { useChatStore } from '../store/chatStore';
import { ChatMessages } from './ChatMessages';
import { SendMessageForm } from './SendMessageForm';

export const ChatMessageContainer = () => {
  const { messages, typingRole, addNewMessage, setTypingRole } = useChatStore();

  const getIaMessageResponse = async () => {
    setTypingRole('system');
    const response = await getStreamAiResponse({
      messages,
    });

    addNewMessage(response, 'system');
    setTypingRole(null);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage) {
      getIaMessageResponse();
      return;
    }

    if (lastMessage.role === 'user') getIaMessageResponse();
  }, [messages]);

  return (
    <div className="relative flex flex-col flex-1">
      <div className="bg">
        <div className="text-white px-4 pb-2 text-sm">We are online!</div>
      </div>

      <ChatMessages messages={messages} typingRole={typingRole} />

      <SendMessageForm addUserMessage={addNewMessage} />
    </div>
  );
};
