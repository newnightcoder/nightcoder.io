import { forwardRef, PropsWithChildren, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { BgContainer, WordContainer } from "./BackgroundStyled";

interface Props extends PropsWithChildren {}

const Background = forwardRef<HTMLDivElement>((children, ref) => {
  const { backgroundColor, backgroundWord } = useContext(TransitionContext);

  return (
    <BgContainer ref={ref} background={backgroundColor} word={backgroundWord}>
      {/* <HomeAnimation></HomeAnimation> */}
      <WordContainer>{backgroundWord}</WordContainer>
    </BgContainer>
  );
});

Background.displayName = "Background";
export default Background;
