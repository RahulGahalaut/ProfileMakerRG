import { useEffect, useRef } from "react"

const useObserver = ({ callback, additionalOptions = {} }) => {
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: document.body,
      rootMargin: "0px",
      threshold: 1.0,
      ...additionalOptions,
    };
    
    const observer = new IntersectionObserver(callback, options);

    if (ref.current) {
      const target = ref.current;
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [ref.current]);

  return {
    elementRef: ref,
  };
};

export default useObserver;