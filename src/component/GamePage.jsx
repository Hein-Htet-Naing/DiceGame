import React, { useEffect, useState } from "react";
import RollDice from "./RollDice";
import PickNum from "./PickNum";
import GameDetail from "./GameDetail";
const GamePage = () => {
  const number = [1, 2, 3, 4, 5, 6];
  const [pickValue, setpickValue] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [total, setTotal] = useState(0);
  const [ans, setAns] = useState("");
  const [toggle, setToggle] = useState(true);
  const [autoToggle, setAutoToggle] = useState(true);
  //we apply useMemo here because  your showStatus array is defined inside the component,
  // so it's re-created on every render.
  // This makes React think that the dependencies of your useEffect change every time, even when they don’t.
  const showStatus = ["You got a point", "You lose!"];
  useEffect(() => {
    if (total === 3) {
      setAns("You Win");
    }
  }, [total]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoToggle(false), setToggle(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const checkNum = (dicNum, pickNum) => {
    return dicNum === pickNum
      ? (setTotal((prev) => prev + 1), setpickValue(0), setAns(showStatus[0]))
      : (setAns(showStatus[1]), reset());
  };

  const reset = () => {
    setpickValue(0);
    setTotal(0);
  };
  return (
    <>
      <div className="flex flex-col gap-6 h-screen justify-between bg-gradient-to-b from-[#feb300] to-[#ffaaab]">
        <PickNum
          total={total}
          number={number}
          setpickValue={setpickValue}
          pickValue={pickValue}
        />
        {(toggle || autoToggle) && (
          <GameDetail setToggle={setToggle} setAutoToggle={setAutoToggle} />
        )}
        <RollDice
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          checkNum={checkNum}
          pickValue={pickValue}
        />
        <div className="flex w-full items-center justify-center text-4xl overflow-hidden">
          {ans}
        </div>
      </div>
    </>
  );
};

export default GamePage;
