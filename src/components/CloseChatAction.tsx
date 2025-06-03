import { CloseIcon } from '../assets/icons/CloseIcon';
import { useChatStore } from '../store/chatStore';

export const CloseChatAction = () => {
  const { toogleChatMessageContainer } = useChatStore();
  return (
    <button onClick={toogleChatMessageContainer}>
      <CloseIcon className="w-7 text-gray-800 dark:text-white fill-white" />
    </button>
  );
};
