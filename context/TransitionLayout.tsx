import {
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import { gsap } from "../animations/gsap";
import { Layout, Loader } from "../components";
import { useIsoMorphicLayoutEffect } from "../hooks";
import { Span } from "../styles/home";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/_globals";
import { TransitionContext } from "./TransitionContext";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(Observer);
// }

interface Props extends PropsWithChildren {}
interface WordProps {
  word: string;
}

const TransitionLayout = ({ children }: Props) => {
  const [isLoading, setisLoading] = useState(true);
  const [nextChildren, setNextChildren] = useState(children);
  const { isLightTheme } = useContext(TransitionContext);
  const [isAnimDone, setIsAnimDone] = useState(true);

  const {
    timelinePages,
    timelineMenu,
    backgroundColor,
    backgroundTextColor,
    backgroundWord,
    backgroundImg,
    isMenuOpen,
  } = useContext(TransitionContext);
  const layoutRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<HTMLDivElement[]>([]);

  const WordComponent = ({ word }: { word: string }) => {
    const charRefs = useRef<HTMLDivElement[]>([]);

    return (
      <Span ref={wordRef}>
        {word.split("").map((char, i) => (
          <div key={i + 1} className={"letter"}>
            {char}
          </div>
        ))}
      </Span>
    );
  };

  // const WordComponent = forwardRef<HTMLDivElement[], WordProps>(
  //   (props, ref) => {
  //     const charRefs = useRef<HTMLDivElement[]>([]);

  //     useImperativeHandle(ref, () => charRefs.current);

  //     return (
  //       <>
  //         {props.word.split("").map((char, i) => (
  //           <div key={i + 1} ref={(el) => (charRefs.current[i] = el)}>
  //             {char}
  //           </div>
  //         ))}
  //       </>
  //     );
  //   }
  // );

  const transitionPages = useCallback(() => {
    if (children === nextChildren) return;
    if (timelinePages.duration() === 0) return setNextChildren(children);
    timelinePages.play().then(() => {
      timelinePages.pause().clear();
      setNextChildren(children);
    });
  }, [children, nextChildren, setNextChildren, timelinePages, timelineMenu]);

  const transitionBackground = useCallback(() => {
    if (
      layoutRef.current &&
      layoutRef.current.firstElementChild.id !== "home" &&
      bgRef.current &&
      !isMenuOpen
    ) {
      gsap
        .timeline({
          default: {
            duration: 2,
          },
        })
        .to(bgRef.current, {
          background: backgroundColor,
          // duration: 2,
        })
        .to(
          bgRef.current.firstChild,
          {
            opacity: 1,
            // duration: 2,
          },
          ">"
        );
      // console.log("children of BG", bgRef.current.firstChild);
    }
  }, [layoutRef, bgRef, isMenuOpen, backgroundColor, gsap]);

  const transitionBgWord = useCallback(() => {
    if (bgRef && letterRefs.current.length !== 0 && backgroundWord) {
      const targets: HTMLDivElement[] = gsap.utils.toArray(letterRefs.current);
      // animText(targets);
      gsap.fromTo(
        targets,
        {
          yPercent: -100,
        },
        { yPercent: 0, duration: 0.3, stagger: 0.1 }
      );
    }
  }, [bgRef, letterRefs, backgroundWord]);

  useIsoMorphicLayoutEffect(() => {
    transitionPages();
  }, [children]);

  useIsoMorphicLayoutEffect(() => {
    transitionBackground();
    // transitionBgWord();
  }, [backgroundColor, isMenuOpen]);

  // useIsoMorphicLayoutEffect(() => {
  //   // if (letterRefs.current.length !== 0 && isAnimDone) {
  //   if (wordRef.current && isAnimDone) {
  //     const target = wordRef.current;
  //     const targets: HTMLDivElement[] = gsap.utils.toArray(wordRef.current);
  //     // animText(targets);
  //     const tl = gsap.timeline();
  //     tl.set(target, {
  //       yPercent: -200,
  //     }).to(target, {
  //       yPercent: 0,
  //       duration: 0.3,
  //       // stagger: 0.1,
  //     });

  //     if (!isMenuOpen) {
  //       timelinePages.add(
  //         gsap.to(target, {
  //           yPercent: -200,
  //           duration: 0.3,
  //           // stagger: 0.1,
  //           onStart: () => {
  //             // console.log("starting anim on word:", backgroundWord);
  //             setIsAnimDone(false);
  //           },
  //           onComplete: () => {
  //             // console.log("anim completed on word:", backgroundWord);
  //             setIsAnimDone(true);
  //           },
  //         })
  //       );
  //     }
  //   }
  // }, [wordRef, isAnimDone, isMenuOpen]);

  // useIsoMorphicLayoutEffect(() => {
  //   if (wordRef.current) {
  //     gsap.from(".letter", {
  //       yPercent: -200,
  //       stagger: 0.2,
  //       duration: 0.5,
  //     });
  //     if (children === nextChildren) {
  //       timelinePages.add(
  //         gsap.to(".letter", {
  //           yPercent: 200,
  //           stagger: 0.1,
  //           duration: 0.5,
  //         })
  //       );
  //     }
  //   }
  // }, [children, nextChildren]);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      {isLoading ? (
        <Loader set={setisLoading} />
      ) : (
        <Layout ref={layoutRef}>
          {/* <Background ref={bgRef}>
            <WordContainer
              ref={wordRef}
              backgroundTextColor={backgroundTextColor}
            >
              <WordComponent word={backgroundWord} />
            </WordContainer>
          </Background> */}
          {nextChildren}
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default TransitionLayout;
