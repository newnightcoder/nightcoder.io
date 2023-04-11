import { useRouter } from "next/router";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { TransitionContext } from "../context/TransitionContext";
import { darkTheme, lightTheme } from "../styles/_globals";

const useTransitionBackground = (id: string) => {
  const {
    setBackgroundColor,
    setBackgroundWord,
    setBackgroundImg,
    isLightTheme,
  } = useContext(TransitionContext);

  const { pathname } = useRouter();
  const isAboutPage = pathname === "/about";

  const [colors, setColors] = useState(null);

  useLayoutEffect(() => {
    setColors({
      home: isLightTheme ? lightTheme.bg.home : darkTheme.bg.home,
      about: isLightTheme ? lightTheme.bg.about : darkTheme.bg.about,
      projects: isLightTheme ? lightTheme.bg.project : darkTheme.bg.project,
      stack: isLightTheme ? lightTheme.bg.stack : darkTheme.bg.stack,
      contact: isLightTheme ? lightTheme.bg.contact : darkTheme.bg.contact,
    });
  }, [isLightTheme]);

  const handleBackground = useCallback(
    (id: string) => {
      if (colors === null) return;
      // if (isAboutPage) {
      //   setBackgroundImg(portrait);
      // } else
      // setBackgroundWord(id);
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
      id,
      colors,
      isAboutPage,
    ]
  );

  useEffect(() => {
    // appeler handleBackground seulement si colors est initialisé
    if (colors !== null) return handleBackground(id);
  }, [id, colors, handleBackground]);

  return handleBackground;
};

export default useTransitionBackground;
