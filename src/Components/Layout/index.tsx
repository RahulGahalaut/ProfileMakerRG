import { Outlet } from "react-router-dom";
import bgImage from "@/Assets/Images/BG_IMAGE.jpg";

const Layout = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${bgImage}")`
      }}
    >
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
