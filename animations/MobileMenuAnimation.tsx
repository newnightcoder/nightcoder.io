import gsap from "gsap";
import { PropsWithChildren, useContext, useRef, useState } from "react";
import { Menu } from "../components";
import { AnimationContainer } from "../components/Menu/MenuStyled";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks";

interface Props extends PropsWithChildren {}

const MobileMenuAnimation = ({ children }: Props) => {
  const { timelineMenu, isMenuOpen, setIsMenuAnim } =
    useContext(TransitionContext);
  const ref = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState<gsap.core.Timeline>(() =>
    gsap.timeline({
      paused: true,
      // repeat: 0,
      onStart: () => {
        setIsMenuAnim(true);
      },
      onComplete: () => {
        setIsMenuAnim(false);
      },
    })
  );

  const didAnimate = useRef(false); // to prevent animation from playing TWICE (Dan Abramov's gsap solution: https://greensock.com/forums/topic/31712-simple-opacity-fade-doesnt-work-in-react/?do=findComment&comment=158569&_rid=92885)

  useIsoMorphicLayoutEffect(() => {
    if (didAnimate.current) return;

    if (ref.current) {
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
      didAnimate.current = true;
      anim.play().then(() => {
        // play anim.reverse() on exit
        timelineMenu.add(anim.reverse());
      });
    }
    console.log("menu animation playing");
  }, []);

  return (
    <AnimationContainer ref={ref}>
      <Menu />
    </AnimationContainer>
  );
};

export default MobileMenuAnimation;
