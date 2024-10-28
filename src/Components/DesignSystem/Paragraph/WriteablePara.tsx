import useWriter from "@/Hooks/useWriter"
import { useEffect } from "react";

const WriteablePara = ({para, onParaComplete, writeSpeed=50}) => {
    const {writeableString, isWritingComplete} = useWriter(para, writeSpeed);

    useEffect(() => {
        if(isWritingComplete){
            onParaComplete?.();
        }
    }, [isWritingComplete]);

    return (
      <span>
        {writeableString}
        {!isWritingComplete && "|"}
      </span>
    );
}

export default WriteablePara;