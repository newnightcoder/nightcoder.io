import { ReactNode, useContext, useState } from "react";
import { MobileMenuAnimation } from "../../animations";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect, useWindowSize } from "../../hooks";
import { Container } from "./MobileMenuStyled";

const MobileMenu = () => {
  const menu = <MobileMenuAnimation />;
  const [child, setChild] = useState<ReactNode | null>(null);
  const { isMenuOpen, setIsMenuOpen } = useContext(TransitionContext);
  const { width, height, setSize } = useWindowSize();

  useIsoMorphicLayoutEffect(() => {
    if (!isMenuOpen) return setChild(null);
    setChild(menu);
  }, [isMenuOpen]);

  // useEffect(() => {
  //   // if (width > breakpoints.mdNumber) return setIsMenuOpen(false);
  //   window.addEventListener("resize", setSize);
  //   return () => window.removeEventListener("resize", setSize);
  // }, [setSize]);

  return (
    <Container height={height} width={width} isMenuOpen={isMenuOpen}>
      {child}
    </Container>
  );
};

export default MobileMenu;
