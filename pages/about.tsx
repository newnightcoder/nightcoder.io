import { useRef } from "react";
import { HomeAnimation } from "../animations";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { PageContainer } from "../styles/about";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(Scrolltrigger);
// }

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
        {/* <Container> */}
        <h1>About</h1>
        {/* </Container> */}
      </HomeAnimation>
    </PageContainer>
  );
};

export default About;
