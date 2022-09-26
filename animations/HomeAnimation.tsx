import gsap from "gsap";
import { useContext, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { AnimationContainer } from "../styles/home";

const HomeAnimation = ({ children }) => {
  const { timelinePages } = useContext(TransitionContext);
  const spanref = useRef<HTMLDivElement | null>(null);

  useIsoMorphicLayoutEffect(() => {
    if (spanref.current) {
      gsap.to(spanref.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      });

      // out animation
      timelinePages.add(
        gsap.to(spanref.current, {
          x: -1000,
          autoAlpha: 0,
          duration: 1,
        }),
        0
      );
    }
  }, []);

  return <AnimationContainer ref={spanref}>{children}</AnimationContainer>;
};

export default HomeAnimation;
