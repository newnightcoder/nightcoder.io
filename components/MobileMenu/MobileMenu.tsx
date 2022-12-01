import { ReactNode, useContext, useEffect, useState } from "react";
import { MobileMenuAnimation } from "../../animations";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect, useWindowSize } from "../../hooks";
import { Container } from "./MobileMenuStyled";

const MobileMenu = () => {
  const menu = <MobileMenuAnimation />;
  const [child, setChild] = useState<ReactNode | null>(null);
  const { isMenuOpen } = useContext(TransitionContext);
  const { width, height, setSize } = useWindowSize();

  useIsoMorphicLayoutEffect(() => {
    if (!isMenuOpen) return setChild(null);
    setChild(menu);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", setSize);
  }, [setSize]);

  return (
    <Container height={height} width={width} isMenuOpen={isMenuOpen}>
      {child}
    </Container>
  );
};

export default MobileMenu;
