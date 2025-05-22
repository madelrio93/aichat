import { useEffect, useState } from 'react';
import { ChatButton } from './components/ChatButton';
import { ChatContainer } from './components/ChatContainer';

function App() {
  const [showFirstMessage, setSetshowFirstMessage] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [isChatOpened, setIsChatOpened] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!isChatOpened) {
  //       setSetshowFirstMessage(true);
  //       setNotificationsCount(1);
  //     }
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);

  const handleOnCLickNoShowChat = () => {
    setSetshowFirstMessage(false);
    setNotificationsCount(0);
  };

  return (
    <main className="bg-[#f6f7fb] h-screen relative">
      <div className="m-auto w-[350px] absolute inset-0 mt-16">
        <div className='mb-4'>
          <ChatContainer />
        </div>

        <div className="relative z-10 text-end">
          <ChatButton notifications={notificationsCount} />
        </div>

        {showFirstMessage && (
          <div className=" z-0 w-[325px] px-4 py-3 bg-white shadow-xl text-xl rounded-xs">
            <div className="w-6/7 flex flex-col gap-3">
              <div className="text-zinc-700 font-semibold">
                Would you like to place an order?
              </div>
              <span className="bg-zinc-300 w-full px-2 h-0.5 my-1"></span>

              <div className="text-blue-500 flex gap-5">
                <button className="cursor-pointer hover:text-blue-600">
                  Yes, I would
                </button>
                <button
                  className="cursor-pointer hover:text-blue-600"
                  onClick={handleOnCLickNoShowChat}
                >
                  No, Tank you
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
