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
    setBackgroundTextColor,
    setBackgroundWord,
    setBackgroundImg,
    isLightTheme,
  } = useContext(TransitionContext);

  const { pathname } = useRouter();
  const isAboutPage = pathname === "/about";

  const [bgColors, setBgColors] = useState(null);
  const [bgTextColors, setBgTextColors] = useState(null);

  useLayoutEffect(() => {
    setBgColors({
      // home: isLightTheme ? lightTheme.bg.home : darkTheme.bg.home,
      home: isLightTheme ? lightTheme.bg.home : darkTheme.bg.home,
      about: isLightTheme ? lightTheme.bg.about : darkTheme.bg.about,
      projects: isLightTheme ? lightTheme.bg.project : darkTheme.bg.project,
      stack: isLightTheme ? lightTheme.bg.stack : darkTheme.bg.stack,
      contact: isLightTheme ? lightTheme.bg.contact : darkTheme.bg.contact,
    });
    setBgTextColors({
      // home: isLightTheme ? lightTheme.bg.home : darkTheme.bg.home,
      home: isLightTheme ? lightTheme.bgText.home : darkTheme.bgText.home,
      about: isLightTheme ? lightTheme.bgText.about : darkTheme.bgText.about,
      projects: isLightTheme
        ? lightTheme.bgText.project
        : darkTheme.bgText.project,
      stack: isLightTheme ? lightTheme.bgText.stack : darkTheme.bgText.stack,
      contact: isLightTheme
        ? lightTheme.bgText.contact
        : darkTheme.bgText.contact,
    });
  }, [isLightTheme]);

  const handleBackground = useCallback(
    (id: string) => {
      if (bgColors === null || bgTextColors === null) return;
      // if (isAboutPage) {
      //   setBackgroundImg(portrait);
      // } else
      switch (id) {
        case "home":
          setBackgroundWord(id);
          setBackgroundColor(bgColors.home);
          setBackgroundTextColor(bgTextColors.home);
          break;
        case "about":
          setBackgroundWord(id);
          setBackgroundColor(bgColors.home);
          setBackgroundTextColor(bgTextColors.home);
          break;
        case "projects":
          setBackgroundWord(id);
          setBackgroundColor(bgColors.projects);
          setBackgroundTextColor(bgTextColors.home);
          break;
        case "stack":
          setBackgroundWord(id);
          setBackgroundColor(bgColors.stack);
          setBackgroundTextColor(bgTextColors.home);
          break;
        case "contact":
          setBackgroundWord(id);
          setBackgroundColor(bgColors.contact);
          setBackgroundTextColor(bgTextColors.home);
          break;
        default:
          return;
      }
    },
    [
      setBackgroundColor,
      setBackgroundTextColor,
      setBackgroundWord,
      setBackgroundImg,
      id,
      bgColors,
      bgTextColors,
      isAboutPage,
    ]
  );

  useEffect(() => {
    // appeler handleBackground seulement si colors est initialisé
    if (bgColors !== null) return handleBackground(id);
  }, [id, bgColors, handleBackground]);

  return handleBackground;
};

export default useTransitionBackground;
