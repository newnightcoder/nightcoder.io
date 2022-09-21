import gsap from "gsap";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

type TransitionContext = {
  timeline: GSAPTimeline;
  setTimeline: Dispatch<SetStateAction<gsap.core.Timeline>>;
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
};
interface Props extends PropsWithChildren {}

const TransitionContext = createContext({} as TransitionContext);

const TransitionProvider = ({ children }: Props) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );
  const [backgroundColor, setBackgroundColor] = useState("#000");

  return (
    <div>
      <TransitionContext.Provider
        value={{
          timeline,
          setTimeline,
          backgroundColor,
          setBackgroundColor,
        }}
      >
        {children}
      </TransitionContext.Provider>
    </div>
  );
};

export { TransitionContext, TransitionProvider };
