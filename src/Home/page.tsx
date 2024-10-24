import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "./component/footer";
import ResizableSidebar from "./component/resizableComponent";
import Sidebar from "./component/sidebar";
const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Navbar />
      <div className="pb-2 px-2 flex flex-col gap-2 justify-between h-[91%]">
        <div className="flex gap-1 h-full">
          <ResizableSidebar /> {/* Use the ResizableSidebar component */}
          <div className="bg-spotify-black flex-grow rounded-xl p-4 text-white">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
