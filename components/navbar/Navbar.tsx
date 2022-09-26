import { useRouter } from "next/router";
import { NavLinksAnimation } from "../../animations/NavLinksAnimation";
import {
  LogoContainer,
  NavbarContainer,
  NavBtn,
  NavLink,
  NavLinksContainer,
  Wrapper,
} from "./NavbarStyled";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleRoute = (path: string) => {
    pathname === path ? undefined : router.push(path);
  };

  const navLinks = ["about", "projects", "stack", "contact"];

  return (
    <Wrapper>
      qdifjmqoijdfmqjdfmqjsfdmfdsqhlqjsdhqjksdfqskdjfqksjflksqdfkjsqldfkjlqskdjfqdifjmqoijdfmqjdfmqjsfdmfdsqhlqjsdhqjksdfqskdjfqksjflksqdfkjsqldfkjlqskdjf
      <NavbarContainer>
        <LogoContainer onClick={() => router.push("/")}>logo</LogoContainer>
        <NavLinksAnimation>
          <NavLinksContainer id="ul">
            {navLinks.map((link) => {
              return (
                <NavLink key={link}>
                  <NavBtn
                    id={link}
                    onClick={() =>
                      handleRoute(link === "home" ? "/" : `/${link}`)
                    }
                  >
                    <div>{link}</div>
                  </NavBtn>
                </NavLink>
              );
            })}
          </NavLinksContainer>
        </NavLinksAnimation>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
