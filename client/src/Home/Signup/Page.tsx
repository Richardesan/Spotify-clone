import { FaApple, FaFacebook } from "react-icons/fa";
import Button from "../../component/Button";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "../component/socialButton";
import Header from "../component/header";
import Footer from "./component/footer";
const socialIcons = [
  { icon: <FcGoogle />, text: "Sign up with Google" },
  {
    icon: (
      <FaFacebook className="text-blue-700 bg-white w-full outline-none  border-0 rounded-full" />
    ),
    text: "Sign up  with Facebook",
  },
  { icon: <FaApple />, text: "Sign up with Apple" },
];

const Signup = () => {
  return (
    <section>
      <Header />
      <section className="text-white w-[20.5rem] mx-auto ">
        <h1 className="text-5xl [word-spacing:-0.09em] tracking-[-0.020rem] font-bold text-center leading-tight mb-10">
          Sign up to start listening
        </h1>
        <form>
          <label>
            <span className="text-sm font-bold">Email address</span>
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full bg-transparent p-3 mt-2 border border-spotify-gray hover:border-[#ffff] rounded-md transition-all duration-200 placeholder:text-spotify-gray placeholder:font-semibold "
            />
          </label>
          <p className="text-spotify-green underline mb-6 mt-2">
            Use phone number instead.
          </p>
          <Button name="Next" />
        </form>
        <div className="flex items-center gap-x-3 my-8">
          <p className="w-full border-b mt-1 border-white"></p>
          <span className="text-xs font-semibold">or</span>
          <p className="w-full border-b mt-1 border-white"></p>
        </div>
        <div className="space-y-2">
          {socialIcons.map((data, index) => {
            return (
              <SocialButton icon={data.icon} text={data.text} key={index} />
            );
          })}
        </div>
        <p className="w-full border-b my-8 border-spotify-gray"></p>
        <Footer />
      </section>
    </section>
  );
};

export default Signup;
