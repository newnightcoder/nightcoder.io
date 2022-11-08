import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSize = useCallback(() => {
    if (typeof window !== undefined) {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, [window, setHeight, setWidth]);

  useEffect(() => {
    setSize();
  }, []);

  return { height, width, setSize };
};

export default useWindowSize;
