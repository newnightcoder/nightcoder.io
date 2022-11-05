import { PropsWithChildren, ReactNode, useContext, useState } from "react";
import MobileMenuAnimation from "../../animations/MobileMenuAnimation";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../../hooks/useIsoMorphicLayoutEffect";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Container } from "./MobileMenuStyled";

interface Props extends PropsWithChildren {}

const MobileMenu = () => {
  const menu = <MobileMenuAnimation />;
  const [child, setChild] = useState<ReactNode | null>(null);
  const { isMenuOpen } = useContext(TransitionContext);
  const { width, height } = useWindowSize();

  useIsoMorphicLayoutEffect(() => {
    if (!isMenuOpen) return setChild(null);
    setChild(menu);
  }, [isMenuOpen]);

  return (
    <Container height={height} width={width} isMenuOpen={isMenuOpen}>
      {child}
    </Container>
  );
};

export default MobileMenu;
