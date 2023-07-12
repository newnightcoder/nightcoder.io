import { useContext, useRef, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";

const BackgroundAnimation = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { timelinePages } = useContext(TransitionContext);
  const [isAnimDone, setIsAnimDone] = useState(true);

  // useIsoMorphicLayoutEffect(() => {
  //   // if (ref.current.firstElementChild.children) {
  //   if (ref.current) {
  //     // const targets = ref.current.firstElementChild.children;
  //     const target = ref.current;
  //     console.log(target);

  //     gsap.from(target, {
  //       yPercent: -200,
  //       duration: 0.5,
  //       // stagger: 0.1,
  //     });

  //     timelinePages.add(
  //       gsap.to(target, {
  //         yPercent: -200,
  //         duration: 0.5,
  //         // stagger: 0.1,
  //         // onStart: () => setIsAnimDone(false),
  //         // onComplete: () => setIsAnimDone(true),
  //       }),
  //       0
  //     );
  //   }
  // }, []);

  return (
    <div
      ref={ref}
      style={{
        border: "5px solid red",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundAnimation;
