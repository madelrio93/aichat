import { useEffect } from 'react';
import { ChatButton } from './components/ChatButton';
import { ChatContainer } from './components/ChatContainer';
import { useChatStore } from './store/chatStore';

function App() {
  const {
    isChatOpen,
    messages,
    firstMessagePannel,
    setFirstMessagePannel,
    toogleChatMessageContainer,
  } = useChatStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isChatOpen && !messages.length) {
        setFirstMessagePannel();
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleOnClick = () => {
    toogleChatMessageContainer();
    setFirstMessagePannel();
  };

  return (
    <main className="bg-[#f6f7fb]">
      <div className="absolute right-10 bottom-20 z-10">
        <ChatButton />
      </div>

      {isChatOpen && (
        <div className="absolute right-10 bottom-38">
          <ChatContainer />
        </div>
      )}

      {firstMessagePannel && !isChatOpen && (
        <div className="absolute right-16 bottom-10 z-0 w-[325px] px-4 py-3 bg-white shadow-xl text-xl rounded-xs">
          <div className="w-6/7 flex flex-col gap-3">
            <div className="text-zinc-700 font-semibold">
              Would you like to place an order?
            </div>
            <span className="bg-zinc-300 w-full px-2 h-0.5 my-1"></span>

            <div className="text-blue-500 flex gap-5">
              <button
                className="cursor-pointer hover:text-blue-600"
                onClick={handleOnClick}
              >
                Yes, I would
              </button>
              <button
                className="cursor-pointer hover:text-blue-600"
                onClick={setFirstMessagePannel}
              >
                No, Tank you
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
