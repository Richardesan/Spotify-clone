import Header from "../component/header";
import { FaApple, FaFacebook } from "react-icons/fa";
import Button from "../../component/Button";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "../component/socialButton";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/route";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const socialIcons = [
    { icon: <FcGoogle />, text: "Sign up with Google" },
    {
      icon: (
        <FaFacebook className="text-blue-700 bg-white w-full outline-none  border-0 rounded-full" />
      ),
      text: "Sign up  with Facebook",
    },
    { icon: <FaApple />, text: "Sign up with Apple" },

    { text: "Continue with Phone number" },
  ];

  return (
    <section className=" bg-gradient-to-b from-[#1c1c1c] to-black py-10">
      <section className="text-white bg-black w-[50%] mx-auto rounded-xl">
        <Header />
        <article className="w-96 mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Log in to Spotify
          </h1>

          <div className="space-y-2">
            {socialIcons.map((data, index) => {
              return (
                <SocialButton icon={data.icon} text={data.text} key={index} />
              );
            })}
          </div>

          <p className="w-full border-b my-8 border-spotify-gray"></p>
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
            <div className="my-6">
              <Button name="Log in" />
            </div>
            <div className="text-center">
              <p>Forgot your password?</p>
              <p>Don't have an account? <span className="text-white underline">
                <Link to={AppRoutes.register}>
                Sign up for Spotify
                </Link>
                </span></p>
            </div>
          </form>
        </article>
      </section>
    </section>
  );
};

export default Login;
