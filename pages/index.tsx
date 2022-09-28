import { useContext, useEffect, useRef } from "react";
import HomeAnimation from "../animations/HomeAnimation";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { Container, PageContainer } from "../styles/home";

const HomePage = ({ props }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const { isMenuOpen } = useContext(TransitionContext);
  useIsoMorphicLayoutEffect(() => {
    ref.current && handleBackground(ref.current.id);
  }, []);

  useEffect(() => {
    if (ref.current && isMenuOpen) {
      ref.current.style.overflowY = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <PageContainer ref={ref} id="home">
      <HomeAnimation>
        <Container>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
          <div>123456789</div>
        </Container>
      </HomeAnimation>
    </PageContainer>
  );
};

export default HomePage;
