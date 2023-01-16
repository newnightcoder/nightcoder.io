import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks";
import { AnimationContainer } from "../styles/home";

const HomeAnimation = ({ children }) => {
  const { timelinePages, isMenuOpen } = useContext(TransitionContext);
  const spanref = useRef<HTMLDivElement>(null);

  const [isAnimDone, setIsAnimDone] = useState(true);

  useIsoMorphicLayoutEffect(() => {
    if (spanref.current && !isMenuOpen && isAnimDone) {
      // re-set element's position at each remount
      gsap.set(spanref.current, {
        autoAlpha: 0,
        y: 100,
        x: 0,
      });

      // enter animation
      gsap.to(spanref.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      });

      // exit animation
      timelinePages.add(
        gsap.to(spanref.current, {
          x: -1000,
          autoAlpha: 0,
          duration: 1,
          onStart: () => setIsAnimDone(false),
          onComplete: () => setIsAnimDone(true),
        }),
        0
      );
    }
  }, [isMenuOpen, isAnimDone]);

  return <AnimationContainer ref={spanref}>{children}</AnimationContainer>;
};

export default HomeAnimation;
