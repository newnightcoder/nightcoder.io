import { Squeeze as Hamburger } from "hamburger-react";
import { forwardRef, PropsWithChildren, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navbar from "../Navbar/Navbar";
import { HamburgerBtn } from "../Navbar/NavbarStyled";
import SocialLinks from "../SocialLinks/SocialLinks";
import { LayoutContainer, Main } from "./LayoutStyled";

interface Props extends PropsWithChildren {}

const Layout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const { toggleMenu, isMenuOpen } = useContext(TransitionContext);

  return (
    <LayoutContainer ref={ref}>
      <Navbar />
      <Logo />
      <HamburgerBtn>
        <Hamburger
          label="Show menu"
          toggled={isMenuOpen}
          toggle={(bool: boolean) => toggleMenu(bool)}
          duration={0.25}
        />
      </HamburgerBtn>
      <MobileMenu />
      <Main>{children}</Main>
      <SocialLinks />
    </LayoutContainer>
  );
});

export default Layout;
