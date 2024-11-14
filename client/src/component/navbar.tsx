import { FaSpotify } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { HiArchiveBox } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import Button2 from "./Button2";
import { Link } from "react-router-dom";
import { AppRoutes } from "../utils/route";
const Navbar = () => {
  return (
    <nav className="flex justify-between pl-6 pr-2 py-2 ">
      <h1 className="text-[2.8rem] text-white">
        <FaSpotify />
      </h1>
      <section className="flex w-[35%] gap-2 items-center ml-14">
        <h1 className="text-white text-center bg-spotify-black p-3 hover:scale-105 cursor-pointer transition-all text-2xl rounded-full">
          <GrHomeRounded />
        </h1>
        <div
          className=" bg-spotify-black rounded-full hover:filter hover:brightness-125 group transition-all duration-150 flex items-center px-3 py-2 gap-5 focus-within:border-white focus-within:border-2 border-2 border-spotify-black w-full"
          tabIndex={0}
        >
          <IoSearch className="text-spotify-gray text-3xl group-hover:text-white" />
          <input
            type="text"
            placeholder="what do you want to play?"
            className="w-full bg-transparent outline-none text-white"
          />
          <div className="border-l border-[#444343] pl-3">
            <HiArchiveBox className="text-white text-3xl clear-start" />
          </div>
        </div>
      </section>

      <div className="flex gap-5 cursor-pointer items-center">
        <p className="text-[#B3b3b3] font-semibold hover:scale-105 hover:text-white transition-all active:scale-95 active:filter active:brightness-50 duration-200">
            <Link to={AppRoutes.register}>
            Sign up
            </Link>
          
        </p>
        <Link to={AppRoutes.login}>
        <Button2 name="Log in" slim={false} />

        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
