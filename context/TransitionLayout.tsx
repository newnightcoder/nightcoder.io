import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { TransitionContext } from "./TransitionContext";

const TransitionLayout = ({ children }) => {
  const { timeline, backgroundColor } = useContext(TransitionContext);
  const [nextChildren, setNextChildren] = useState(children);
  const ref = useRef();

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
        duration: 1,
      });
    }
  }, [backgroundColor]);

  return (
    <div ref={ref} style={{ border: "2px solid red" }}>
      {nextChildren}
    </div>
  );
};

export default TransitionLayout;
