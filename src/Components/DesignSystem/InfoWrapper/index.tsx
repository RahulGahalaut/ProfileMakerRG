import { useEffect, useState } from "react";

const InfoWrapper = (props) => {
  const [opacityClass, setOpacityClass]=useState("opacity-0")

  useEffect(() => {
    setOpacityClass("opacity-100");
  }, []);

  return (
    <div id={props.id} className={`h-full border-gray1 w-full md:w-5/6 bg-slate-900/80 rounded-xl md:rounded-3xl p-4 md:p-12 transition-opacity duration-500	ease-in ${opacityClass}`}>
      {props.children}
    </div>
  );
};

export default InfoWrapper;
