import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import { gsap } from "../../animations/gsap";
import p1 from "../../assets/azerty.png";
import p2 from "../../assets/code.jpg";
import p4 from "../../assets/Giphy.png";
import p3 from "../../assets/NOTION.jpg";
import { TransitionContext } from "../../context/TransitionContext";
import {
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../../hooks";
import {
  ImgContainer,
  ProjectList,
  ProjectsContainer,
  ProjectTitle,
} from "../../styles/projects";
import { PageContainer } from "../../styles/_globals";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement[]>([]);
  const handleBackground = useTransitionBackground();
  const projects = [
    { title: "forum", img: p1 },
    { title: "colorwave", img: p2 },
    { title: "things", img: p3 },
    { title: "arkanoid mini", img: p4 },
  ];

  const { timelinePages } = useContext(TransitionContext);

  const [img, setImg] = useState<string | StaticImageData>(null);
  const [clipIn, setClipIn] = useState({ clip1: "100%", clip2: "100%" });
  const [clipOut, setClipOut] = useState({ clip1: "100%", clip2: "100%" });
  const [opacity, setOpacity] = useState(0);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  useIsoMorphicLayoutEffect(() => {
    if (testRef.current) {
      timelinePages.add(
        gsap.to(testRef.current, {
          x: -1000,
        }),
        0
      );
    }
  }, []);

  return (
    <PageContainer ref={ref} id="projects" justify="">
      {/* <HomeAnimation>
      </HomeAnimation> */}

      <ProjectsContainer>
        <ImgContainer ref={testRef} clipIn={clipIn} clipOut={clipOut}>
          {projects.map((p, i) => {
            return (
              <div
                key={i + 2}
                ref={(el) => (imgRef.current = [...imgRef.current, el])}
                id={p.title}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "all 500ms",
                  background: "green",
                  border: "2px solid green",
                  position: "absolute",
                  inset: 0,
                  zIndex: `${i}`,
                }}
              >
                <Image src={p.img} layout="fill" alt="" />
              </div>
            );
          })}
        </ImgContainer>
        <ProjectList>
          {projects.map((p, i) => {
            return (
              <Link
                key={i + 1}
                href={`projects/${p.title}`}
                passHref
                legacyBehavior
              >
                <ProjectTitle
                  onMouseOver={() => {
                    if (imgRef?.current[i]?.id === p.title) {
                      imgRef.current[i].classList.remove("project-out");
                      imgRef.current[i].style.opacity = "1";
                      imgRef.current[i].style.zIndex = "999";
                      imgRef.current[i].classList.add("project-in");
                    }
                  }}
                  onMouseOut={() => {
                    if (imgRef?.current[i]?.id === p.title) {
                      imgRef.current[i].classList.add("project-out");
                      imgRef.current[i].classList.remove("project-in");
                      imgRef.current[i].style.zIndex = `${i}`;
                    }
                  }}
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

export default Projects;
