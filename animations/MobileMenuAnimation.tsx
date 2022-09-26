import gsap from "gsap";
import { PropsWithChildren, useContext, useRef, useState } from "react";
import {
  AnimationContainer,
  MenuContainer,
} from "../components/MobileMenu/MobileMenuStyled";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";

interface Props extends PropsWithChildren {}

const MobileMenuAnimation = ({ children }: Props) => {
  const { timelineMenu, isMenuOpen, setIsMenuAnim } =
    useContext(TransitionContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const [anim, setAnim] = useState<gsap.core.Timeline | null>(null);

  useIsoMorphicLayoutEffect(() => {
    setAnim(() =>
      gsap.timeline({
        paused: true,
        repeat: 0,
        onStart: () => {
          setIsMenuAnim(true);
        },
        onComplete: () => {
          setIsMenuAnim(false);
        },
      })
    );
  }, []);

  useIsoMorphicLayoutEffect(() => {
    if (anim && ref.current) {
      anim
        .set(ref.current, {
          "--clip-1": "100%",
          "--clip-2-a": "50%",
          "--clip-2-b": "50%",
          "--clip-3": "100%",
          "--clip-4": "0",
          "--clip-5-a": "50%",
          "--clip-5-b": "50%",
          "--clip-6": "0",
          autoAlpha: 1,
        })
        .to(ref.current, {
          "--clip-1": "99.95%",
          "--clip-2-a": "49.95%",
          "--clip-2-b": "49.95%",
          "--clip-3": "99.95%",
          "--clip-4": "0.05%",
          "--clip-5-a": "50.05%",
          "--clip-5-b": "50.05%",
          "--clip-6": "0.05%",
          duration: 0.4,
          ease: "slow",
        })
        .to(ref.current, {
          "--clip-1": "0",
          "--clip-2-a": "0",
          "--clip-2-b": "0",
          "--clip-3": "0",
          "--clip-4": "100%",
          "--clip-5-a": "100%",
          "--clip-5-b": "100%",
          "--clip-6": "100%",
          duration: 0.75,
          ease: "power4.out",
        });

      // play anim on enter
      anim.play().then(() => {
        // play anim.reverse() on exit
        timelineMenu.add(anim.reverse());
      });
    }
  }, [anim, isMenuOpen]);

  return (
    <AnimationContainer ref={ref}>
      <MenuContainer />
    </AnimationContainer>
  );
};

export default MobileMenuAnimation;
