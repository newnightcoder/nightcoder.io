import { PropsWithChildren, ReactNode, useContext, useState } from "react";
import MobileMenuAnimation from "../../animations/MobileMenuAnimation";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../../hooks/useIsoMorphicLayoutEffect";
import { Container } from "./MobileMenuStyled";

interface Props extends PropsWithChildren {}

const MobileMenu = () => {
  const menu = <MobileMenuAnimation />;
  const [child, setChild] = useState<ReactNode | null>(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const { isMenuOpen, timelineMenu } = useContext(TransitionContext);

  const setSize = () => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", setSize);
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  };

  useIsoMorphicLayoutEffect(() => {
    setSize();
  }, []);

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
