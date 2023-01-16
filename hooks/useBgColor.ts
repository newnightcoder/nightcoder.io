import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useBgColor = () => {
  const [isBgDark, setIsBgDark] = useState(true);
  const { pathname } = useRouter();
  const isProjectPage = pathname === "/projects/[slug]";

  const handleLinkColor = useCallback(() => {
    isProjectPage ? setIsBgDark(false) : setIsBgDark(true);
  }, [pathname, setIsBgDark]);

  useEffect(() => {
    handleLinkColor();
  }, [isProjectPage]);

  return isBgDark;
};

export default useBgColor;
