import { useContext } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { PageContainer } from "../styles/about";

const About = () => {
  const { timeline, backgroundColor, setBackgroundColor } =
    useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    setBackgroundColor("#4ade80");
  }, []);

  return <PageContainer id="about">ABOUT</PageContainer>;
};

export default About;
