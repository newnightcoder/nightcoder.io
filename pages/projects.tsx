import { useRef } from "react";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import {
  ImgContainer,
  ProjectList,
  ProjectsContainer,
} from "../styles/projects";
import { PageContainer } from "../styles/_globals";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const list = ["forum", "colorwave", "things", "arkanoid mini"];

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="projects" justify="">
      {/* <HomeAnimation>
      </HomeAnimation> */}

      <ProjectsContainer>
        <ImgContainer>imgcontainer</ImgContainer>
        <ProjectList>
          {list.map((item, i) => {
            return <div key={i + 1}>{item}</div>;
          })}
        </ProjectList>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;
