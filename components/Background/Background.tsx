import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef, PropsWithChildren, useContext } from "react";
import { gsap } from "../../animations/gsap";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../../hooks";
import { Container, ImgContainer, WordContainer } from "./BackgroundStyled";

interface Props extends PropsWithChildren {}

const Background = forwardRef<HTMLDivElement>((children, ref) => {
  const { backgroundColor, backgroundWord, backgroundImg } =
    useContext(TransitionContext);
  const { pathname } = useRouter();
  const isAboutPage = pathname === "/about";

  const nodeArray = (word: string) => {
    const arr = word.split("").map((char, i) => <div key={i + 1}>{char}</div>);
    console.log(arr);
    console.log("gsap array", gsap.utils.toArray(arr));
    return arr;
  };

  console.log(typeof nodeArray("test"));

  const animText = (word: string) => {
    const targets = gsap.utils.toArray(nodeArray(word));
    return gsap.fromTo(
      targets,
      {
        y: -100,
      },
      { y: 0, duration: 1, stagger: 1 }
    );
  };

  useIsoMorphicLayoutEffect(() => {
    animText(backgroundWord);
  }, [backgroundWord]);

  return (
    <Container
      ref={ref}
      backgroundColor={backgroundColor}
      backgroundWord={backgroundWord}
      backgroundImg={backgroundImg}
    >
      {/* <HomeAnimation></HomeAnimation> */}
      {backgroundImg ? (
        <ImgContainer>
          <Image
            src={backgroundImg}
            layout="fixed"
            style={{ borderRadius: "50%" }}
            priority={false}
            loading="lazy"
          />
        </ImgContainer>
      ) : (
        <WordContainer>{backgroundWord}</WordContainer>
        // <WordContainer></WordContainer>
      )}
    </Container>
  );
});

Background.displayName = "Background";
export default Background;
