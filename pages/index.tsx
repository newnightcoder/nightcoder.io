import { useRef } from "react";
import HomeAnimation from "../animations/HomeAnimation";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { Container, PageContainer } from "../styles/home";

const HomePage = ({ props }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();

  useIsoMorphicLayoutEffect(() => {
    ref.current && handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="home">
      <HomeAnimation>
        <Container>HOME</Container>
      </HomeAnimation>
    </PageContainer>
  );
};

export default HomePage;
