import gsap from "gsap";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

type TransitionContext = {
  timelinePages: GSAPTimeline;
  setTimelinePages?: Dispatch<SetStateAction<gsap.core.Timeline>>;
  timelineMenu: GSAPTimeline;
  setTimelineMenu?: Dispatch<SetStateAction<gsap.core.Timeline>>;
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  isMenuOpen?: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
  isMenuAnim?: boolean;
  setIsMenuAnim?: Dispatch<SetStateAction<boolean>>;
  test?: boolean;
  setTest?: Dispatch<SetStateAction<boolean>>;
};
interface Props extends PropsWithChildren {}

const TransitionContext = createContext({} as TransitionContext);

const TransitionProvider = ({ children }: Props) => {
  const [timelinePages, setTimelinePages] = useState(() =>
    gsap.timeline({ paused: true })
  );
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnim, setIsMenuAnim] = useState(false);
  const [test, setTest] = useState(false);

  const [timelineMenu, setTimelineMenu] = useState(() =>
    gsap.timeline({
      paused: true,
      onStart: () => setTest(true),
      onComplete: () => setTest(false),
    })
  );

  return (
    <div>
      <TransitionContext.Provider
        value={{
          timelinePages,
          timelineMenu,
          backgroundColor,
          setBackgroundColor,
          isMenuOpen,
          setIsMenuOpen,
          isMenuAnim,
          setIsMenuAnim,
          test,
        }}
      >
        {children}
      </TransitionContext.Provider>
    </div>
  );
};

export { TransitionContext, TransitionProvider };
