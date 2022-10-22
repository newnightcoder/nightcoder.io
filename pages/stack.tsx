import { useRef } from "react";
import HomeAnimation from "../animations/HomeAnimation";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { PageContainer } from "../styles/stack";

const Stack = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="stack">
      <HomeAnimation>
        <h1>STACK</h1>
      </HomeAnimation>
    </PageContainer>
  );
};

export default Stack;
