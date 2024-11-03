import useWriter from "@/Hooks/useWriter"
import { useEffect } from "react";

const WriteablePara = ({para, onParaComplete, writeSpeed=50}) => {
    const {writtenString, remaningString, isWritingComplete} = useWriter(para, writeSpeed);

    useEffect(() => {
        if(isWritingComplete){
            onParaComplete?.();
        }
    }, [isWritingComplete]);

    return (
      <span>
        {writtenString}
        {!isWritingComplete && "|"}
        <span className="invisible">{remaningString}</span>
      </span>
    );
}

export default WriteablePara;