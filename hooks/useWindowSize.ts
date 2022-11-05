import { useCallback, useState } from "react";
import { useIsoMorphicLayoutEffect } from "./useIsoMorphicLayoutEffect";

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSize = useCallback(() => {
    if (typeof window !== undefined) {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, [window, setHeight, setWidth]);

  useIsoMorphicLayoutEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
  }, []);

  return { height, width };
};
