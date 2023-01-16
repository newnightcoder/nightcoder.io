import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useContext, useRef } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import {
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../../hooks";
import { createUrl, sanityClient } from "../../sanity";
import {
  ImgContainer,
  ImgWrapper,
  ProjectList,
  ProjectsContainer,
  ProjectTitle,
} from "../../styles/projects";
import { PageContainer } from "../../styles/_globals";
import { IProject } from "../../types";

interface Props {
  projects: IProject[];
}

const Projects = ({ projects }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement[]>([]);
  const handleBackground = useTransitionBackground();
  const { timelinePages } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  // useIsoMorphicLayoutEffect(() => {
  //   if (testRef.current) {
  //     timelinePages.add(
  //       gsap.to(testRef.current, {
  //         x: -1000,
  //         duration: 2,
  //       }),
  //       0
  //     );
  //   }
  // }, []);

  const handleProjectAnimation = (
    ref: MutableRefObject<HTMLDivElement[]>,
    i: number,
    project: IProject,
    bool: boolean
  ) => {
    if (bool && ref?.current[i]?.id === project.title) {
      ref.current[i].classList.remove("project-out");
      ref.current[i].style.opacity = "1";
      ref.current[i].style.zIndex = "999";
      ref.current[i].classList.add("project-in");
      ref.current[i].firstElementChild.classList.add("img-scale");
    } else {
      imgRef.current[i].classList.add("project-out");
      imgRef.current[i].classList.remove("project-in");
      ref.current[i].firstElementChild.classList.remove("img-scale");
      imgRef.current[i].style.zIndex = `${i}`;
    }
  };

  return (
    <PageContainer ref={ref} id="projects" justify="">
      {/* <HomeAnimation>
      </HomeAnimation> */}

      <ProjectsContainer>
        <ImgContainer ref={testRef}>
          {projects.map((p, i) => {
            return (
              <ImgWrapper
                key={p._id}
                ref={(el) => (imgRef.current = [...imgRef.current, el])}
                id={p.title}
                zIndex={i}
              >
                <Image
                  src={createUrl(p.image).url()}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  alt="project thumbnail"
                />
              </ImgWrapper>
            );
          })}
        </ImgContainer>
        <ProjectList>
          {projects.map((p, i) => {
            return (
              <Link
                key={i + 1}
                href={`projects/${p.slug.current}`}
                passHref
                legacyBehavior
              >
                <ProjectTitle
                  onMouseOver={() => handleProjectAnimation(imgRef, i, p, true)}
                  onMouseOut={() => handleProjectAnimation(imgRef, i, p, false)}
                >
                  <div>{p.title}</div>
                </ProjectTitle>
              </Link>
            );
          })}
        </ProjectList>
      </ProjectsContainer>
    </PageContainer>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type=="project"]`;

  const data: IProject[] = await sanityClient.fetch(query);
  const projects = data.sort((a, b) => {
    if (a.projectId < b.projectId) return 1;
    if (a.projectId > b.projectId) return -1;
  });

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
