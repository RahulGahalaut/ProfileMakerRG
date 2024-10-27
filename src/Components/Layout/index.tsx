import { BG_S } from "@/Constants/layout";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBgIndex(currentBgIndex);
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BG_S.length);
      setFade(true);

      setTimeout(() => {
        setFade(false);
      }, 1000); 
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBgIndex]);

  const currentBg = `bg-[url('${BG_S[currentBgIndex]}')]`;
  const prevBg = `bg-[url('${BG_S[prevBgIndex]}')]`;

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          fade ? "opacity-70" : "opacity-100"
        } ${prevBg} bg-no-repeat bg-center bg-cover`}
      ></div>
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-70"
        } ${currentBg} bg-no-repeat bg-center bg-cover`}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
