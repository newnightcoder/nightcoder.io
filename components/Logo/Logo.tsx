import { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { Container, LogoContainer, LogoLink } from "./LogoStyled";

const Logo = () => {
  const { isLightTheme } = useContext(TransitionContext);
  return (
    <Container isLightTheme={isLightTheme}>
      <LogoLink href="/" isLightTheme={isLightTheme}>
        <LogoContainer>Logo</LogoContainer>
      </LogoLink>
    </Container>
  );
};

export default Logo;
