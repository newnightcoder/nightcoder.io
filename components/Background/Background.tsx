import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef, PropsWithChildren, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { Container, ImgContainer, WordContainer } from "./BackgroundStyled";

interface Props extends PropsWithChildren {}

const Background = forwardRef<HTMLDivElement>((children, ref) => {
  const { backgroundColor, backgroundWord, backgroundImg } =
    useContext(TransitionContext);
  const { pathname } = useRouter();
  const isAboutPage = pathname === "/about";

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
        // <WordContainer>{backgroundWord}</WordContainer>
        <WordContainer></WordContainer>
      )}
    </Container>
  );
});

Background.displayName = "Background";
export default Background;
