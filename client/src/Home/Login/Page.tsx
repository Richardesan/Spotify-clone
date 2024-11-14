import Header from "../component/header";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "../component/socialButton";
import Loginform from "./component/form";
import Footer from "./component/footer";
import Button from "../../component/Button";

const Login = () => {
  const clientId = '9326937498b54140bf913f826a728f2f';
  const redirectUri = 'http://localhost:5173/';
  const scopes = 'user-read-private user-read-email';
  const state = 'unique_string_for_csrf_protection';
  const showDialog = true;

  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const authUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&state=${state}&scope=${encodeURIComponent(scopes)}&show_dialog=${showDialog}`;

  const socialIcons = [
    { icon: <FcGoogle />, text: "Sign up with Google" },
    {
      icon: (
        <FaFacebook className="text-blue-700 bg-white w-full outline-none border-0 rounded-full" />
      ),
      text: "Sign up with Facebook",
    },
    { icon: <FaApple />, text: "Sign up with Apple" },
    { text: "Continue with Phone number" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#1c1c1c] to-black pt-10 min-h-screen flex flex-col items-center">
      <section className="text-white bg-[#121212] w-[50%] mx-auto rounded-xl px-24 pb-16 shadow-lg">
        <Header />
        <article className="w-96 mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Log in to Spotify
          </h1>

          {/* Social Login Buttons */}
          <div className="space-y-2">
            {socialIcons.map((data, index) => (
              <SocialButton icon={data.icon} text={data.text} key={index} />
            ))}
          </div>

          {/* Spotify Login Button */}
          <div className="mt-4">
            <button
              onClick={() => window.location.href = authUrl}
              className="flex items-center justify-center w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all mt-4"
            >
              Log in with Spotify
            </button>
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
