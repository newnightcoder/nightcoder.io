import gsap from "gsap";
import { useContext, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { SpanContainer } from "../styles/home";

const HomeAnimation = ({ children }) => {
  const { timeline } = useContext(TransitionContext);
  const spanref = useRef<HTMLDivElement | null>(null);

  useIsoMorphicLayoutEffect(() => {
    if (spanref.current) {
      gsap.to(spanref.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 2,
      });

      // out animation
      timeline.add(
        gsap.to(spanref.current, {
          x: -1000,
          autoAlpha: 0,
          duration: 1,
        }),
        0
      );
    }
  }, []);

  return <SpanContainer ref={spanref}>{children}</SpanContainer>;
};

export default HomeAnimation;
