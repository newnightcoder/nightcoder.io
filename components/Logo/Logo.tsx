import { useRouter } from "next/router";
import { Container, LogoContainer, LogoLink } from "./LogoStyled";

const Logo = () => {
  const router = useRouter();

  return (
    <Container>
      <LogoLink href="/">
        <LogoContainer>Logo</LogoContainer>
      </LogoLink>
    </Container>
  );
};

export default Logo;
