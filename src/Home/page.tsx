import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
