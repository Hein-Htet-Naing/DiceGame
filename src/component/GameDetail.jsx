const GameDetail = ({ setToggle, setAutoToggle }) => {
  return (
    <>
      <div className="absolute bg-gray-300 top-[50%] left-[50%] p-4 z-1 tramsform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="mr-9">
            <h2 className="text-2xl uppercase">How to play a dice game</h2>
            <p>Pick a number</p>
            <p>Click the Button</p>
            <p>Got 3 points streak, You Win!</p>
          </div>
          <button
            className="flex items-center justify-center text-red-600 border border-black  text-[10px] rounded-full w-[24px] h-[24px] absolute top-1 right-1"
            onClick={() => {
              setToggle(false), setAutoToggle(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
