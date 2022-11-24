import { useContext, useRef } from "react";
import { HomeAnimation } from "../animations";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import { PageContainer } from "../styles/_globals";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const { backgroundColor } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="projects" background={backgroundColor}>
      <HomeAnimation>
        <h1>PROJECTS</h1>
      </HomeAnimation>
    </PageContainer>
  );
};

export default Projects;
