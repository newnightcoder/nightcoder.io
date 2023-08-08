import { Squeeze as Hamburger } from "hamburger-react";
import { forwardRef, PropsWithChildren, useContext } from "react";
import { Logo, MobileMenu, Navbar, SocialLinks } from "../";
import { TransitionContext } from "../../context/TransitionContext";
import { useBgColor } from "../../hooks";
import { HamburgerBtn } from "../Navbar/NavbarStyled";
import { LayoutContainer, Main } from "./LayoutStyled";

interface Props extends PropsWithChildren {}

const Layout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const { toggleMenu, isMenuOpen, isLightTheme } =
    useContext(TransitionContext);
  const isBgDark = useBgColor();
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

Layout.displayName = "Layout";
export default Layout;
