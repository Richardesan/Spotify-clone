import Header from "../component/header";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "../component/socialButton";
import Loginform from "./component/form";
import Footer from "./component/footer";

const Login = () => {
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
    <section className=" bg-gradient-to-b from-[#1c1c1c] to-black pt-10">
      <section className="text-white bg-[#121212] w-[50%] mx-auto rounded-xl px-24 pb-16">
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

          
        </article>
        <p className="w-full border-b my-8 border-[#282828]"></p>

        <article className="w-96 mx-auto">
        <Loginform />

        </article>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
