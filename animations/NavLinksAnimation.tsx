import gsap from "gsap";
import React, { useRef } from "react";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";

export const NavLinksAnimation = ({ children }) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const child = React.Children.only(children);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) {
      const list = ref.current.children;
      gsap.to(list, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 1.5,
      });
    }
  }, [ref]);

  return React.cloneElement(child, { ref: ref });
};
