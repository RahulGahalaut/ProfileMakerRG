import { useEffect, useState } from "react";

const useWriter = (text, writeSpeed=50) => {
    const [writeableString, setWriteableString] = useState('');
    const [isWritingComplete, setIsWritingComplete] = useState(false);

    useEffect(() => {
      let timerId;
      let lettersToShow = 1;
      timerId = setInterval(() => {
        setWriteableString(text.slice(0, lettersToShow));
        lettersToShow++;
        if (text.length < lettersToShow) {
          clearInterval(timerId);
          setIsWritingComplete(true);
        }
      }, writeSpeed);
    }, []);

    return {
        writeableString,
        isWritingComplete,
    }
}

export default useWriter;