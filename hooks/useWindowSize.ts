import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const isWindow = typeof window !== undefined;
  const [width, setWidth] = useState(isWindow ? window.innerWidth : 0);
  const [height, setHeight] = useState(isWindow ? window.innerHeight : 0);

  const setSize = useCallback(() => {
    if (isWindow) {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, [isWindow, setHeight, setWidth]);

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  return { height, width, setSize };
};

export default useWindowSize;
