import "../App.css";
import { Allimgs } from "../assets/images/images";
const RollDice = ({ diceValue, setDiceValue, pickValue, checkNum }) => {
  const handleRoll = () => {
    setTimeout(() => {
      const ram = Math.floor(Math.random() * 6) + 1;
      setDiceValue(ram);
      checkNum(ram, pickValue);
    }, 100);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="transition-all transform-3d ease-in">
          <img
            className="w-[300px] h-[300px]"
            src={Allimgs[`dice_${diceValue}`]}
            alt=""
          />
        </div>
        <button className="text-5xl" onClick={() => handleRoll()}>
          Roll
        </button>
      </div>
    </>
  );
};

export default RollDice;
