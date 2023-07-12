import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";

const useBgColor = () => {
  const [isBgDark, setIsBgDark] = useState(true);
  const { pathname } = useRouter();
  const isProjectPage = pathname === "/projects/[slug]";
  const { isLightTheme } = useContext(TransitionContext);

  const handleLinkColor = useCallback(() => {
    isLightTheme
      ? setIsBgDark(false)
      : isProjectPage
      ? setIsBgDark(false)
      : setIsBgDark(true);
  }, [pathname, setIsBgDark, isLightTheme]);

  useEffect(() => {
    handleLinkColor();
  }, [isProjectPage]);

  return isBgDark;
};

export default useBgColor;
