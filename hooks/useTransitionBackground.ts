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
      // home: isLightTheme ? lightTheme.bg.home : darkTheme.bg.home,
      home: "transparent",
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
      switch (id) {
        case "home":
          setBackgroundWord(id);
          setBackgroundColor(colors.home);
          break;
        case "about":
          setBackgroundWord(id);
          setBackgroundColor(colors.about);
          break;
        case "projects":
          setBackgroundWord(id);
          setBackgroundColor(colors.projects);
          break;
        case "stack":
          setBackgroundWord(id);
          setBackgroundColor(colors.stack);
          break;
        case "contact":
          setBackgroundWord(id);
          setBackgroundColor(colors.contact);
          break;
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
