import gsap from "gsap";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
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
  isMenuClosing?: boolean;
  setisMenuClosing?: Dispatch<SetStateAction<boolean>>;
  toggleMenu?: (toggled: boolean) => void;
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
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const [timelineMenu, setTimelineMenu] = useState(() =>
    gsap.timeline({
      paused: true,
      onStart: () => setIsMenuClosing(true),
      onComplete: () => setIsMenuClosing(false),
    })
  );

  const toggleMenu = useCallback(
    (bool: boolean) => {
      if (isMenuAnim) return;
      if (bool) {
        setIsMenuOpen(true);
      } else {
        timelineMenu.play().then(() => {
          timelineMenu.pause().clear();
          setIsMenuOpen(false);
        });
      }
    },
    [isMenuAnim, setIsMenuOpen, timelineMenu]
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
          isMenuClosing,
          toggleMenu,
        }}
      >
        {children}
      </TransitionContext.Provider>
    </div>
  );
};

export { TransitionContext, TransitionProvider };
