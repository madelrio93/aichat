import { MessageIcon } from '../assets/icons/MessageIcon';
import { useChatStore } from '../store/chatStore';

interface ChatButtonProps {
  notifications?: number;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ notifications }) => {
  const { toogleChatMessageContainer } = useChatStore();

  const handleOnClick = () => toogleChatMessageContainer();

  return (
    <>
      <button
        className="bg p-3.5 rounded-full text-center cursor-pointer"
        onClick={handleOnClick}
      >
        <MessageIcon className="text-white w-8" />
      </button>
      {!!notifications && (
        <div className="bg-red-500 absolute w-5 h-5 rounded-full top-0 right-0">
          <div className="text-center text-white text-xs m-[1px]">
            {notifications}
          </div>
        </div>
      )}
    </>
  );
};
