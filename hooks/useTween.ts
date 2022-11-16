import gsap from "gsap";
import { MutableRefObject, useState } from "react";
import { useIsoMorphicLayoutEffect } from ".";

// interface Props {
//   circleRef: MutableRefObject<SVGPathElement>;
//   circlePath: string;
//   satelliteRef: MutableRefObject<SVGGElement>;
//   start: number;
// }

const useTween = (
  circleRef: SVGPathElement,
  circlePathId: string,
  satelliteRef: MutableRefObject<SVGGElement>,
  start: number
) => {
  const [tween, setTween] = useState<gsap.core.Tween | null>(null);

  useIsoMorphicLayoutEffect(() => {
    if (circleRef && satelliteRef.current) {
      setTween(
        gsap.to(satelliteRef.current, {
          duration: 45,
          repeat: -1,
          repeatDelay: 3,
          // paused: true,
          yoyo: true,
          ease: "none",
          motionPath: {
            path: circlePathId,
            align: circlePathId,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: start,
            end: start + 0.25,
          },
        })
      );
    }
  }, [circleRef, satelliteRef]);

  return [tween];
};

export default useTween;
