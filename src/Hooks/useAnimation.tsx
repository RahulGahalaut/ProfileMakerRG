import { useEffect, useState } from "react";

const PRE_ANIMATION_CLASSES = {
    SLIDE_RIGHT: "-translate-x-full",
    SLIDE_LEFT: "translate-x-full",
    SLIDE_UP:"translate-y-full",
    SLIDE_DOWN:"-translate-y-full",
    FADE_IN:"opacity-0",
    FADE_OUT:"opacity-100",
}

const POST_ANIMATION_CLASSES = {
  SLIDE_RIGHT: "translate-x-0",
  SLIDE_LEFT: "translate-x-0",
  SLIDE_UP: "translate-y-0",
  SLIDE_DOWN: "translate-y-0",
  FADE_IN: "opacity-100",
  FADE_OUT: "opacity-0",
};

const useAnimation = (delay = 0) => {
  const [slideRight, setSlideRight] = useState(
    PRE_ANIMATION_CLASSES.SLIDE_RIGHT
  );
  const [slideLeft, setSlideLeft] = useState(PRE_ANIMATION_CLASSES.SLIDE_LEFT);
  const [slideUp, setSlideUp] = useState(PRE_ANIMATION_CLASSES.SLIDE_UP);
  const [slideDown, setSlideDown] = useState(PRE_ANIMATION_CLASSES.SLIDE_DOWN);
  const [fadeIn, setFadeIn] = useState(PRE_ANIMATION_CLASSES.FADE_IN);
  const [fadeOut, setFadeOut] = useState(PRE_ANIMATION_CLASSES.FADE_OUT);

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        animateNow();
      }, delay);
    } else {
      animateNow();
    }
  }, [delay]);

  function animateNow() {
    setSlideRight(POST_ANIMATION_CLASSES.SLIDE_RIGHT);
    setSlideLeft(POST_ANIMATION_CLASSES.SLIDE_LEFT);
    setSlideUp(POST_ANIMATION_CLASSES.SLIDE_UP);
    setSlideDown(POST_ANIMATION_CLASSES.SLIDE_DOWN);
    setFadeIn(POST_ANIMATION_CLASSES.FADE_IN);
    setFadeOut(POST_ANIMATION_CLASSES.FADE_OUT);
  }

  return {
    slideRightClasses: `transition-all duration-1000 ease-in-out ${fadeIn} ${slideRight}`,
    slideLeftClasses: `transition-all duration-1000 ease-in-out ${fadeIn} ${slideLeft}`,
    slideUpClasses: `transition-all duration-1000 ease-in-out ${fadeIn} ${slideUp}`,
    slideDownClasses: `transition-all duration-1000 ease-in-out ${fadeIn} ${slideDown}`,
    fadeInClasses: `transition-opacity duration-1000 ease-in-out ${fadeIn}`,
    fadeOutClasses: `transition-opacity duration-1000 ease-in-out ${fadeOut}`,
  };
};

export default useAnimation;