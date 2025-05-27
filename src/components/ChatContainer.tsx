import AiProfile from '../assets/images/aiprofile.jpg';
import { ChatMessageContainer } from './ChatMessageContainer';
import { CloseChatAction } from './CloseChatAction';

export const ChatContainer = () => {
  return (
    <div className="bottom-60 rounded-lg w-[425px] h-[650px] shadow-lg shadow-zinc-500 flex flex-col">
      <div className="p-5 flex gap-3 rounded-t-lg bg shadow-lg relative">
        <img
          className="w-12 rounded-full bg-cover"
          src={AiProfile}
          alt="iaprofile"
        />
        <div className="flex-auto text-zinc-200 ">
          <div className="font-semibold text-sm">Chat with</div>
          <div className="font-bold">Elizabeth Reyna</div>
        </div>

        <CloseChatAction />
      </div>

      <ChatMessageContainer />
    </div>
  );
};
