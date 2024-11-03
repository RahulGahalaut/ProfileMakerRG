import { useEffect, useState } from "react";

const useWriter = (text, writeSpeed=50) => {
    const [writtenString, setWrittenString] = useState('');
    const [remaningString, setRemainingString] = useState(text);
    const [isWritingComplete, setIsWritingComplete] = useState(false);
    
    useEffect(() => {
      let timerId;
      let lettersToShow = 1;
      timerId = setInterval(() => {
        setWrittenString(text.slice(0, lettersToShow));
        setRemainingString(text.slice(lettersToShow, text.length));
        lettersToShow++;
        if (text.length < lettersToShow) {
          clearInterval(timerId);
          setIsWritingComplete(true);
        }
      }, writeSpeed);
    }, []);

    return {
        writtenString,
        remaningString,
        isWritingComplete,
    }
}

export default useWriter;