import gsap from "gsap";
import { useContext, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { PageContainer, Span } from "../styles/home";

const HomePage = () => {
  const spanref = useRef<HTMLDivElement | null>(null);
  const { timeline, setBackgroundColor } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    setBackgroundColor("#000");
  }, []);

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

  return (
    <PageContainer id="home">
      <Span ref={spanref}>HOME</Span>
    </PageContainer>
  );
};

export default HomePage;
