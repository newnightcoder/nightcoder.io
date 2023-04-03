import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import portrait from "../assets/moi.jpg";
import { TransitionContext } from "../context/TransitionContext";
import { darkTheme, lightTheme } from "../styles/_globals";

const useTransitionBackground = () => {
  const {
    setBackgroundColor,
    setBackgroundWord,
    setBackgroundImg,
    isLightTheme,
  } = useContext(TransitionContext);

  const { pathname } = useRouter();
  const isAboutPage = pathname === "/about";

  const [colors, setColors] = useState(null);

  useEffect(() => {
    setColors({
      home: isLightTheme ? lightTheme.bg : darkTheme.bg,
      about: "#252525",
      // projects: "#333333",
      projects: "#111111",
      // stack: "#4d4d4d",
      stack: "#000",
      contact: "#666666",
    });
  }, [isLightTheme]);

  const handleBackground = useCallback(
    (id: string) => {
      if (isAboutPage) {
        setBackgroundImg(portrait);
      } else setBackgroundWord(id);
      switch (id) {
        case "home":
          return setBackgroundColor(colors.home);
        case "about":
          return setBackgroundColor(colors.about);
        case "projects":
          return setBackgroundColor(colors.projects);
        case "stack":
          return setBackgroundColor(colors.stack);
        case "contact":
          return setBackgroundColor(colors.contact);
        default:
          return;
      }
    },
    [
      setBackgroundColor,
      setBackgroundWord,
      setBackgroundImg,
      colors,
      isAboutPage,
    ]
  );

  return handleBackground;
};

export default useTransitionBackground;
