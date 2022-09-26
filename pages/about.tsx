import { useRef } from "react";
import HomeAnimation from "../animations/HomeAnimation";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { PageContainer } from "../styles/about";
import { Container } from "../styles/home";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="about">
      <HomeAnimation>
        <Container>
          <h1>About</h1>
        </Container>
      </HomeAnimation>
    </PageContainer>
  );
};

export default About;
