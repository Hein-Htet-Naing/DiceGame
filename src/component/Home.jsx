import { Link } from "react-router-dom";
import { Allimgs } from "../assets/images/images";

const Home = ({ setPlay }) => {
  return (
    <>
      <section>
        <div className="w-full flex gap-4 justify-center items-center h-screen bg-gradient-to-b from-[#feb300] to-[#ffaaab]">
          <img src={Allimgs.banner} alt="" />
          <div className="flex flex-col gap-4 items-center">
            <h1 className="uppercase text-6xl font-frances text-[#fff5d7]">
              Dice Game
            </h1>
            <Link
              to={"/GamePage"}
              className="border w-40 text-center"
              onClick={() => setPlay(true)}
            >
              Play Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
