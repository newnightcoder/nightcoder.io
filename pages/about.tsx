import gsap from "gsap";
import Scrolltrigger from "gsap/dist/Scrolltrigger";
import { useRef } from "react";
import HomeAnimation from "../animations/HomeAnimation";
import { useHandleRoute } from "../hooks/useHandleRoute";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { PageContainer } from "../styles/about";
import { Container } from "../styles/home";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Scrolltrigger);
}

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();

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
