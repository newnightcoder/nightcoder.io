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
  circleRef: MutableRefObject<SVGPathElement>,
  circlePath: string,
  satelliteRef: MutableRefObject<SVGGElement>,
  start: number
) => {
  const [tween, setTween] = useState<gsap.core.Tween | null>(null);

  useIsoMorphicLayoutEffect(() => {
    if (circleRef.current && satelliteRef.current) {
      setTween(
        gsap.to(satelliteRef.current, {
          duration: 45,
          repeat: -1,
          // repeatDelay: 3,
          paused: true,
          yoyo: false,
          ease: "none",
          motionPath: {
            path: circlePath,
            align: circlePath,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
            start: start,
            end: 1 + start,
          },
        })
      );
    }
  }, [circleRef, satelliteRef]);

  return [tween];
};

export default useTween;
