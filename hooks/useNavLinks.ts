import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";
import text from "../pages/api/text.json";

const useNavLinks = () => {
  const { lang } = useContext(TransitionContext);
  const links = text[lang].navLinks;
  const array = [];

  // const navLinks = useMemo(() => {
  //   for (let link in links) {
  //     array.push(links[link]);
  //   }
  //   return array;
  // }, [lang]);

  const navLinks = ["home", "about", "projects", "stack", "contact"];
  const [active, setActive] = useState("");
  const { pathname } = useRouter();

  const activateLink = useCallback(() => {
    navLinks.forEach((link) => {
      if (pathname === `/`) {
        setActive("home");
      } else if (pathname === `/${link}`) {
        setActive(link);
      }
    });
  }, [navLinks, pathname]);

  useEffect(() => {
    activateLink();
  }, [pathname]);

  return { navLinks, active };
};

export default useNavLinks;
