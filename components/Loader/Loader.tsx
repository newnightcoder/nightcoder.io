import gsap from "gsap";
import { Dispatch, PropsWithChildren, SetStateAction, useRef } from "react";
import { useIsoMorphicLayoutEffect } from "../../hooks";
import { Container } from "./LoaderStyled";

interface Props extends PropsWithChildren {
  set: Dispatch<SetStateAction<boolean>>;
}

const Loader = ({ set }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useIsoMorphicLayoutEffect(() => {
    const anim = gsap.to(ref.current, {
      // autoAlpha: 0,
      duration: 4,
      onComplete: () => set(false),
    });

    anim.play();
  }, []);

  return <Container ref={ref}>Loader</Container>;
};

export default Loader;
