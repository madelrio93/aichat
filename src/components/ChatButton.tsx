import { MessageIcon } from '../assets/icons/MessageIcon';

interface ChatButtonProps {
  notifications?: number;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ notifications }) => {
  return (
    <div className="relative">
      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 p-5 rounded-full">
        <MessageIcon className="text-white" />
      </button>
      {!!notifications && (
        <div className="bg-red-500 absolute w-5 h-5 rounded-full top-0 right-0">
          <div className="text-center text-white text-xs m-[1px]">
            {notifications}
          </div>
        </div>
      )}
    </div>
  );
};
