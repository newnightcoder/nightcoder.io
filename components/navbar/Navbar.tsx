import { NavLinksAnimation } from "../../animations/NavLinksAnimation";
import { useHandleRoute } from "../../hooks/useHandleRoute";
import {
  NavbarContainer,
  NavBtn,
  NavLink,
  NavLinksContainer,
  Wrapper,
} from "./NavbarStyled";

const Navbar = () => {
  const handleRoute = useHandleRoute();

  const navLinks = ["about", "projects", "stack", "contact"];

  return (
    <Wrapper>
      qdifjmqoijdfmqjdfmqjsfdmfdsqhlqjsdhqjksdfqskdjfqksjflksqdfkjsqldfkjlqskdjfqdifjmqoijdfmqjdfmqjsfdmfdsqhlqjsdhqjksdfqskdjfqksjflksqdfkjsqldfkjlqskdjf
      <NavbarContainer>
        <NavLinksAnimation>
          <NavLinksContainer id="ul">
            {navLinks.map((link) => {
              return (
                <NavLink key={link}>
                  <NavBtn id={link} onClick={() => handleRoute(`/${link}`)}>
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
