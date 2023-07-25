import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../hooks";
import { AnimationContainer } from "../styles/home";
import { gsap } from "./gsap";

const HomeAnimation = ({ children }) => {
  const { timelinePages, isMenuOpen, timelineMenu } =
    useContext(TransitionContext);
  const spanref = useRef<HTMLDivElement>(null);
  const { pathname, query, locale } = useRouter();

  const [isAnimDone, setIsAnimDone] = useState(true);
  let hasPlayed = useRef(false);

  useIsoMorphicLayoutEffect(() => {
    // Prevent animation from playing when just changing locale
    // console.log("locale:", locale);
    // if (pathname.includes(locale)) return;

    if (
      spanref.current &&
      isAnimDone &&
      !timelineMenu.isActive() &&
      !hasPlayed.current
    ) {
      // re-set element's position at each remount
      gsap.set(spanref.current, {
        autoAlpha: 0,
        y: 100,
        x: 0,
        // x: 1000,
      });

      // enter animation
      gsap.to(spanref.current, {
        autoAlpha: 1,
        y: 0,
        // x: 0,
        duration: 1,
        delay: 0.5,
      });

      hasPlayed.current = true;

      // exit animation
      timelinePages.add(
        gsap.to(spanref.current, {
          x: -1000,
          autoAlpha: 0,
          duration: 1,
          onStart: () => setIsAnimDone(false),
          onComplete: () => setIsAnimDone(true),
        }),
        0
      );
    }
  }, [hasPlayed, timelineMenu.isActive(), isAnimDone, locale]);

  return <AnimationContainer ref={spanref}>{children}</AnimationContainer>;
};

export default HomeAnimation;
