import { Squeeze as Hamburger } from "hamburger-react";
import { forwardRef, PropsWithChildren, useCallback, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navbar from "../Navbar/Navbar";
import { HamburgerBtn } from "../Navbar/NavbarStyled";
import SocialLinks from "../SocialLinks/SocialLinks";
import { LayoutContainer, Main } from "./LayoutStyled";

interface Props extends PropsWithChildren {}

const Layout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const { isMenuOpen, setIsMenuOpen, isMenuAnim, timelineMenu } =
    useContext(TransitionContext);

  const toggleMenu = useCallback(
    (toggled: boolean) => {
      if (isMenuAnim) return;
      if (toggled) {
        setIsMenuOpen(true);
      } else {
        timelineMenu.play().then(() => {
          timelineMenu.pause().clear();
          setIsMenuOpen(false);
        });
      }
    },
    [isMenuAnim, setIsMenuOpen, timelineMenu]
  );

  return (
    <LayoutContainer ref={ref}>
      <Navbar />
      <HamburgerBtn>
        <Hamburger
          label="Show menu"
          onToggle={(toggled) => toggleMenu(toggled)}
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
