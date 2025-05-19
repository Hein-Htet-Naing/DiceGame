const PickNum = ({ number, setpickValue, pickValue, total }) => {
  return (
    <>
      <div className="flex justify-between p-4">
        {/* //total */}
        <div>
          <h2 className="text-7xl">{total}</h2>
        </div>
        {/* //picking number */}
        <div className="grid grid-cols-6 gap-4 w-[50%]">
          {number.map((num, i) => (
            <div
              className={`border border-black flex items-center justify-center ${
                pickValue === num ? "bg-[#fff5d7]" : "bg-transparent"
              }`}
              key={i}
            >
              <button
                className="text-4xl"
                onClick={() => {
                  setpickValue(num);
                }}
              >
                {num}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PickNum;
