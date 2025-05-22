import AiProfile from '../assets/images/aiprofile.jpg';
import { ChatMessageContainer } from './ChatMessageContainer';

export const ChatContainer = () => {
  return (
    <div className="bottom-60 rounded-lg h-[600px]  shadow-lg shadow-zinc-500">
      {/**ChatIAPROFILE */}
      <div className="px-4 py-3 flex gap-3 rounded-t-lg bg shadow-lg relative">
        <img
          className="w-12 rounded-full bg-cover"
          src={AiProfile}
          alt="iaprofile"
        />
        <div className="flex-auto text-zinc-200 ">
          <div className="font-semibold text-sm">Chat with</div>
          <div className="font-bold">Elizabeth Reyna</div>
        </div>
      </div>
      
      <ChatMessageContainer />
    </div>
  );
};
