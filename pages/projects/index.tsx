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
          {/* {img ? (
            <Image src={img} layout="fill" alt="" className="anim" />
          ) : null} */}

          {projects.map((p, i) => {
            return (
              <div
                key={i + 2}
                ref={(el) => (imgRef.current = [...imgRef.current, el])}
                id={p.title}
                // className="anim"
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
                  // position: "relative",
                  // inset: 0,
                  // top: 0,
                  // transition: "clip-path 500ms",
                  // transform: "scale(1.3)",
                  // zIndex: `${i}`,
                  // clipPath: `polygon(0 ${clipIn.clip1}, 100% ${clipIn.clip2}, 100% ${clipOut.clip1}, 0% ${clipOut.clip2})`,
                  // clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
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
              <Link href={`projects/${p.title}`} passHref legacyBehavior>
                <ProjectTitle
                  key={i + 1}
                  onMouseOver={() => {
                    if (imgRef?.current[i]?.id === p.title) {
                      imgRef.current[i].style.opacity = "1";
                      imgRef.current[i].classList.add("anim");
                      imgRef.current[i].style.zIndex = "999";
                      // imgRef.current[i].style.clipPath =
                      //   "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                      // setClipIn({ clip1: "0%", clip2: "0%" });
                      // console.log("mouseover", imgRef?.current[i]?.id);
                    }
                    // setImg(p.img);
                    // setClipOut({ clip1: "100%", clip2: "100%" });
                  }}
                  onMouseOut={() => {
                    // setImg(null);
                    // setClipOut({ clip1: "0%", clip2: "0%" });
                    // setClipIn({ clip1: "100%", clip2: "100%" });
                    if (imgRef?.current[i]?.id === p.title) {
                      imgRef.current[i].style.opacity = "0";
                      imgRef.current[i].classList.remove("anim");
                      // imgRef.current[i].style.transform = "scale(1.3)";
                      // console.log("mouseout!", imgRef?.current[i]?.id);
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
