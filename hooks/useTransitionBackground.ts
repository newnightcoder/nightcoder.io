import { useContext } from "react";
import { TransitionContext } from "../context/TransitionContext";

export const useTransitionBackground = () => {
  const { setBackgroundColor } = useContext(TransitionContext);

  const colors = {
    home: "#000",
    about: "#4ade80",
    projects: "#525252",
    stack: "#ef4444",
    contact: "#3b82f6",
  };

  const handleBackground = (id: string) => {
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
  };

  return handleBackground;
};
