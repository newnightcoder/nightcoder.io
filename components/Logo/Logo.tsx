import { useRouter } from "next/router";
import { LogoContainer } from "./LogoStyled";

const Logo = () => {
  const router = useRouter();

  return (
    <LogoContainer
      onClick={() => (router.pathname === "/" ? undefined : router.push("/"))}
    >
      Logo
    </LogoContainer>
  );
};

export default Logo;
