import { useCallback, useContext } from "react";
import { TransitionContext } from "../context/TransitionContext";

const useTransitionBackground = () => {
  const { setBackgroundColor } = useContext(TransitionContext);

  const colors = {
    home: "#000000",
    about: "#191919",
    projects: "#333333",
    stack: "#4d4d4d",
    contact: "#666666",
  };

  const handleBackground = useCallback((id: string) => {
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
  }, []);

  return handleBackground;
};

export default useTransitionBackground;
