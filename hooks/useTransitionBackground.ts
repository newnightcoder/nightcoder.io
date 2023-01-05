import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import portrait from "../assets/moi.jpg";
import { TransitionContext } from "../context/TransitionContext";

const useTransitionBackground = () => {
  const { setBackgroundColor, setBackgroundWord, setBackgroundImg } =
    useContext(TransitionContext);

  const { pathname } = useRouter();
  const isAboutPage = pathname === "/about";

  const colors = {
    home: "#000000",
    about: "#252525",
    // projects: "#333333",
    projects: "#111111",
    stack: "#4d4d4d",
    contact: "#666666",
  };

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
