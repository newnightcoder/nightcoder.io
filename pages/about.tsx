import { useContext, useRef } from "react";
import { HomeAnimation } from "../animations";
import { TransitionContext } from "../context/TransitionContext";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { PageContainer } from "../styles/home";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const { backgroundColor } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    handleBackground(ref?.current?.id);
  }, [ref.current]);

  return (
    <PageContainer ref={ref} id="about" background={backgroundColor}>
      <HomeAnimation>
        {/* <Container> */}
        <h1>About</h1>
        {/* </Container> */}
      </HomeAnimation>
    </PageContainer>
  );
};

export default About;
