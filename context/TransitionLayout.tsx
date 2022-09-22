import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { GlobalStyles } from "../styles/_globals";
import { TransitionContext } from "./TransitionContext";

const TransitionLayout = ({ children }) => {
  const { timeline, backgroundColor } = useContext(TransitionContext);
  const [nextChildren, setNextChildren] = useState(children);
  const ref = useRef<HTMLDivElement | null>(null);

  useIsoMorphicLayoutEffect(() => {
    if (children === nextChildren) return;
    if (timeline.duration() === 0) return setNextChildren(children);
    timeline.play().then(() => {
      // out animation is complete so reset timeline to an empty paused timeline
      timeline.pause().clear();
      setNextChildren(children);
    });
  }, [children]);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        backgroundColor: backgroundColor,
        duration: 0.5,
      });
    }
  }, [backgroundColor]);

  return (
    <>
      <GlobalStyles />
      <Layout ref={ref}>{nextChildren}</Layout>
    </>
  );
};

export default TransitionLayout;
