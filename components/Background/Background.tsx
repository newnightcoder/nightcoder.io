import { forwardRef, PropsWithChildren, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { Container } from "./BackgroundStyled";

interface Props extends PropsWithChildren {}

const Background = forwardRef<HTMLDivElement>((children, ref) => {
  const { backgroundColor } = useContext(TransitionContext);

  return (
    <Container ref={ref} background={backgroundColor}>
      {/* <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10rem",
          color: "red",
        }}
      > */}
      {/* TEST */}
      {/* </div> */}
    </Container>
  );
});

Background.displayName = "Background";
export default Background;
