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
} from "../styles/projects";
import { PageContainer } from "../styles/_globals";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const list = [
    { title: "forum", img: p1 },
    { title: "colorwave", img: p2 },
    { title: "things", img: p3 },
    { title: "arkanoid mini", img: p4 },
  ];

  const [img, setImg] = useState<string | StaticImageData>(null);
  const [clipIn, setClipIn] = useState({ clip1: "100%", clip2: "100%" });
  const [clipOut, setClipOut] = useState({ clip1: "100%", clip2: "100%" });

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="projects" justify="">
      {/* <HomeAnimation>
      </HomeAnimation> */}

      <ProjectsContainer>
        <ImgContainer clipIn={clipIn} clipOut={clipOut}>
          {img ? <Image src={img} layout="fill" alt="" /> : null}
        </ImgContainer>
        <ProjectList>
          {list.map((item, i) => {
            return (
              <div
                key={i + 1}
                onMouseOver={() => {
                  setImg(item.img);
                  setClipIn({ clip1: "0%", clip2: "0%" });
                  setClipOut({ clip1: "100%", clip2: "100%" });
                }}
                onMouseOut={() => {
                  // setImg(null);
                  setClipOut({ clip1: "0%", clip2: "0%" });
                  setClipIn({ clip1: "100%", clip2: "100%" });
                }}
                style={{ cursor: "pointer" }}
              >
                <div>{item.title}</div>
              </div>
            );
          })}
        </ProjectList>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;
