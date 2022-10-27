import { Container, LogoContainer, LogoLink } from "./LogoStyled";

const Logo = () => {
  return (
    <Container>
      <LogoLink href="/">
        <LogoContainer>Logo</LogoContainer>
      </LogoLink>
    </Container>
  );
};

export default Logo;
