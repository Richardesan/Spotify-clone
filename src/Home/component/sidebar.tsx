import { useState } from "react";
import Button2 from "../../component/Button2";
import { LuGlobe } from "react-icons/lu";
import { BiLibrary } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event: any) => {
    const { scrollTop } = event.target;
    // Check if the section has been scrolled
    setIsScrolled(scrollTop > 0);
  };

  return (
    <div className="text-white rounded-xl p-4">
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-2 px-2  group cursor-pointer">
          <p className="text-2xl text-[#B3b3b3] group-hover:text-white transition-all duration-200">
            <BiLibrary />
          </p>
          <p className="text-[#B3b3b3] font-bold text-base group-hover:text-white transition-all duration-200">Your Library</p>
        </div>
        <p className="text-2xl hover:bg-spotify-dark rounded-full transition-all p-1 cursor-pointer duration-200">
          <GoPlus />
        </p>
      </section>
      <section
        className={`space-y-8  mt-5 delay-200  py-3 h-64 bg-spotify-black overflow-hidden hover:overflow-y-scroll transition-all ${
          isScrolled ? "shadow-custom-shadow" : ""
        }`}
        onScroll={handleScroll}
      >
        <article className="text-white  bg-spotify-dark px-5 py-4 rounded-xl w-full space-y-6">
          <div className="space-y-1">
            <h1 className="text-base font-semibold">
              Create your first playlist
            </h1>
            <p className="text-sm font-semibold">it's easy, we'll help you</p>
          </div>
          <Button2 slim={true} name="Create playlist" />
        </article>
        <article className="text-white   bg-spotify-dark px-5 py-4 rounded-xl w-full space-y-6">
          <div className="space-y-1">
            <h1 className="text-base font-semibold">
              Let's find some podcasts to follow
            </h1>
            <p className="text-sm font-semibold">
              we'll keep you updated on new episodes
            </p>
          </div>
          <Button2 slim={true} name="Browse podcasts" />
        </article>
      </section>
      <div className="pt-10 space-y-10">
        <ul className="text-[11px] flex flex-wrap gap-4 w-[80%] items-center">
          <li>Legal</li>
          <li>Safety & Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About ads</li>
          <li>Accessibility</li>
          <a href="https://www.spotify.com/ng/legal/cookies-policy/" target="#">
            Cookies
          </a>
        </ul>
        <div className="inline-flex gap-2 items-center font-bold text-sm border py-1.5 px-3 border-spotify-gray rounded-full">
          <LuGlobe className="text-lg " />
          <p className="">English</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
