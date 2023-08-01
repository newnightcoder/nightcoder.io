import gsap from "gsap";
import { StaticImageData } from "next/image";
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
  backgroundTextColor: string;
  setBackgroundTextColor: Dispatch<SetStateAction<string>>;
  backgroundWord: string;
  setBackgroundWord: Dispatch<SetStateAction<string>>;
  backgroundImg: StaticImageData;
  setBackgroundImg: Dispatch<SetStateAction<StaticImageData>>;
  isMenuOpen?: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
  isMenuAnim?: boolean;
  setIsMenuAnim?: Dispatch<SetStateAction<boolean>>;
  isMenuClosing?: boolean;
  setisMenuClosing?: Dispatch<SetStateAction<boolean>>;
  toggleMenu?: (toggled: boolean) => void;
  lang?: string;
  setLang?: Dispatch<SetStateAction<string>>;
  displayMemoryGameResult?: boolean;
  setDisplayMemoryGameResult?: Dispatch<SetStateAction<boolean>>;
  isMemoryGamePlayed?: boolean;
  setIsMemoryGamePlayed?: Dispatch<SetStateAction<boolean>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  isLightTheme: boolean;
};
interface Props extends PropsWithChildren {}

const TransitionContext = createContext({} as TransitionContext);

const TransitionProvider = ({ children }: Props) => {
  const [timelinePages, setTimelinePages] = useState(() =>
    gsap.timeline({ paused: true })
  );
  const [backgroundColor, setBackgroundColor] = useState("#34d399");
  const [backgroundTextColor, setBackgroundTextColor] = useState("");
  const [backgroundWord, setBackgroundWord] = useState("");
  const [backgroundImg, setBackgroundImg] = useState<StaticImageData>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnim, setIsMenuAnim] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [lang, setLang] = useState("en");
  const [displayMemoryGameResult, setDisplayMemoryGameResult] = useState(false);
  const [isMemoryGamePlayed, setIsMemoryGamePlayed] = useState(false);
  const [theme, setTheme] = useState("light");
  const isLightTheme = theme === "light";

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
          backgroundTextColor,
          setBackgroundTextColor,
          backgroundWord,
          setBackgroundWord,
          backgroundImg,
          setBackgroundImg,
          isMenuOpen,
          setIsMenuOpen,
          isMenuAnim,
          setIsMenuAnim,
          isMenuClosing,
          toggleMenu,
          lang,
          setLang,
          isMemoryGamePlayed,
          setIsMemoryGamePlayed,
          displayMemoryGameResult,
          setDisplayMemoryGameResult,
          theme,
          setTheme,
          isLightTheme,
        }}
      >
        {children}
      </TransitionContext.Provider>
    </div>
  );
};

export { TransitionContext, TransitionProvider };
