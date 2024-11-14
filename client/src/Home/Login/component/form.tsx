import { useState } from "react";
import { AppRoutes } from "../../../utils/route";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


const Loginform = () => {
    const [togglePassword, setTogglePassword] = useState(false);

  return (
    <form>
    <label>
      <span className="text-sm font-bold">Email or username</span>

      <input
        type="email"
        placeholder="Email or username"
        className="w-full bg-transparent p-3 mt-2 mb-5 outline-none border border-spotify-gray hover:border-[#ffff] rounded-md transition-all duration-200 placeholder:text-spotify-gray placeholder:font-semibold "
      />
    </label>

    <label className="">
      <span className="text-sm font-bold">Password</span>
      <div className="relative">
        <input
          type={togglePassword ? "text" : "password"}
          placeholder="Password"
          className="w-full  bg-transparent outline-none p-3 mt-2 border border-spotify-gray hover:border-[#ffff] rounded-md transition-all duration-200 placeholder:text-spotify-gray placeholder:font-semibold "
        />

        <div
          className="absolute right-4 bottom-3 cursor-pointer text-2xl"
          onClick={() => setTogglePassword((prev) => !prev)}
        >
          {!togglePassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
      </div>
    </label>
    <div className="mt-6 mb-10">
      <Button name="Log in" />
    </div>
    <div className=" text-base flex  items-center flex-col gap-6">
      <p className="text-white underline cursor-pointer font-semibold hover:text-spotify-green transition-all ">Forgot your password?</p>
      <p className="text-[#B3b3b3]">Don't have an account?  <span className="text-white underline hover:text-spotify-green cursor-pointer font-semibold transition-all">
        <Link to={AppRoutes.register}>
        Sign up for Spotify
        </Link>
        </span></p>
    </div>
  </form>
  )
}

export default Loginform