import React from "react";
import WriteablePara from "./WriteablePara";

export interface ParagraphProps {
  children: string | React.ReactNode;
  customClasses?: string;
  showWriteEffect?: boolean;
  writeSpeed?:number;
  onParaComplete?: () => void;
}

const Paragraph = (props: ParagraphProps) => {
  const {
    children,
    customClasses = "",
    showWriteEffect = false,
    writeSpeed=50,
    onParaComplete = null,
  } = props;

  function canShowWriteEffect(){
    return showWriteEffect && typeof children === "string" && children.length;
  }

  return (
    <p className={`text-base md:text-lg text-yellow-300/70 ${customClasses}`}>
      {canShowWriteEffect() ? (
        <WriteablePara para={children} onParaComplete={onParaComplete} writeSpeed={writeSpeed}/>
      ) : (
        children
      )}
    </p>
  );
};

export default Paragraph;
