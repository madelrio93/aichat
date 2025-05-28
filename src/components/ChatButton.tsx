import { MessageIcon } from '../assets/icons/MessageIcon';
import { useChatStore } from '../store/chatStore';

export const ChatButton = () => {
  const { toogleChatMessageContainer } = useChatStore();

  const handleOnClick = () => toogleChatMessageContainer();

  return (
    <button
      className="bg p-3.5 rounded-full text-center cursor-pointer"
      onClick={handleOnClick}
    >
      <MessageIcon className="text-white w-8" />
    </button>
  );
};
