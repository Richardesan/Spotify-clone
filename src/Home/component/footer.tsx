import { Link } from "react-router-dom";
import Button2 from "../../component/Button2";
import { AppRoutes } from "../../utils/route";

const Footer = () => {
  return (
    <section>
<Link to={AppRoutes.register}>
    <div className="bg-spotify-rainbow w-full  px-6 pt-3 pb-2 flex items-center justify-between text-white cursor-pointer">
      <div className=" max-w-[60vw]">
        <p className="text-sm font-semibold">Preview of Spotify</p>
        <p className="text-base font-medium">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <Button2 name="Sign up free" slim={false} />
    </div>
    </Link>

    </section>

  );
};

export default Footer;
