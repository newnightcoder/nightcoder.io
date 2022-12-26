import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import p1 from "../assets/azerty.png";
import p2 from "../assets/code.jpg";
import p4 from "../assets/Giphy.png";
import p3 from "../assets/NOTION.jpg";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import {
  ImgContainer,
  ProjectList,
  ProjectsContainer,
  ProjectTitle,
} from "../styles/projects";
import { PageContainer } from "../styles/_globals";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement[]>([]);
  const handleBackground = useTransitionBackground();
  const projects = [
    { title: "forum", img: p1 },
    { title: "colorwave", img: p2 },
    { title: "things", img: p3 },
    { title: "arkanoid mini", img: p4 },
  ];

  const [img, setImg] = useState<string | StaticImageData>(null);
  const [clipIn, setClipIn] = useState({ clip1: "100%", clip2: "100%" });
  const [clipOut, setClipOut] = useState({ clip1: "100%", clip2: "100%" });
  const [opacity, setOpacity] = useState(0);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="projects" justify="">
      {/* <HomeAnimation>
      </HomeAnimation> */}

      <ProjectsContainer>
        <ImgContainer clipIn={clipIn} clipOut={clipOut}>
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
                  border: "2px solid green",
                  // transition: "clip-path 500ms",

                  transition: "transform 500ms, opacity 100ms",
                  opacity: 0,
                  // clipPath: `polygon(0 ${clipIn.clip1}, 100% ${clipIn.clip2}, 100% ${clipOut.clip1}, 0% ${clipOut.clip2})`,
                  // clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <Image
                  src={p.img}
                  layout="fill"
                  alt=""
                  style={{ transform: "scale(1.3)" }}
                />
              </div>
            );
          })}
        </ImgContainer>
        <ProjectList>
          {projects.map((p, i) => {
            return (
              <ProjectTitle
                key={i + 1}
                onMouseOver={() => {
                  if (imgRef?.current[i]?.id === p.title) {
                    imgRef.current[i].style.opacity = "1";
                    // imgRef.current[i].childNodes[0].style.transform = "scale(1)";
                    // imgRef.current[i].style.clipPath =
                    //   "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                    // setClipIn({ clip1: "0%", clip2: "0%" });
                  }
                  // console.log(imgRef?.current[i]?.id);

                  // setImg(p.img);
                  // setClipOut({ clip1: "100%", clip2: "100%" });
                }}
                onMouseOut={() => {
                  // setImg(null);
                  // setClipOut({ clip1: "0%", clip2: "0%" });
                  // setClipIn({ clip1: "100%", clip2: "100%" });
                  imgRef?.current[i]?.id === p.title &&
                    (imgRef.current[i].style.opacity = "0");
                }}
              >
                <div>{p.title}</div>
              </ProjectTitle>
            );
          })}
        </ProjectList>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;
