import { useContext } from "react";
import { TransitionContext } from "../context/TransitionContext";

const useTransitionBackground = () => {
  const { setBackgroundColor } = useContext(TransitionContext);

  // const colors = {
  //   // home: "linear-gradient(90deg, #110066, black)",
  //   home: "linear-gradient(90deg, rgb(10,10,10), rgb(10,10,10))",
  //   about: "linear-gradient(90deg, #34d399, #34d399)",
  //   // about: "#4ade80",
  //   projects: "linear-gradient(90deg, #525252, #525252)",
  //   stack: "linear-gradient(90deg, #ef4444, #ef4444)",
  //   contact: "linear-gradient(90deg, #3b82f6, #3b82f6)",
  // };
  const colors = {
    // home: "linear-gradient(90deg, #110066, black)",
    home: "#000000",
    about: "#191919",
    projects: "#333333",
    stack: "#4d4d4d",
    contact: "#666666",
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

export default useTransitionBackground;
