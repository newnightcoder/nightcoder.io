import gsap from "gsap";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Background, Layout, Loader } from "../components";
import { useIsoMorphicLayoutEffect } from "../hooks";
import { GlobalStyles } from "../styles/_globals";
import { TransitionContext } from "./TransitionContext";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(Observer);
// }

interface Props extends PropsWithChildren {}

const TransitionLayout = ({ children }: Props) => {
  const [isLoading, setisLoading] = useState(true);
  const [nextChildren, setNextChildren] = useState(children);
  const {
    timelinePages,
    timelineMenu,
    backgroundColor,
    backgroundWord,
    backgroundImg,
    isMenuOpen,
  } = useContext(TransitionContext);
  const layoutRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sections = ["/", "/about", "/projects", "/stack", "/contact"];
  // const handleRoute = useHandleRoute();
  // const wrap = gsap.utils.wrap(0, sections.length);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isAnimating, setIsAnimating] = useState(false);

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

  // const goToNextSection = (index: number, direction: number) => {
  //   index = wrap(index);
  //   // setIsAnimating(true);
  //   if (direction === 1) {
  //     handleRoute(sections[index + 1]);
  //     setCurrentIndex(index + 1);
  //   } else if (direction === -1) {
  //     handleRoute(sections[index - 1]);
  //     setCurrentIndex(index - 1);
  //   }
  //   // setIsAnimating(false);
  // };

  // useIsoMorphicLayoutEffect(() => {
  //   Observer.create({
  //     type: "wheel, touch",
  //     wheelSpeed: 0.5,
  //     // scrollSpeed:0.5,
  //     onDown: () => goToNextSection(currentIndex, 1),
  //     onUp: () => goToNextSection(currentIndex, -1),
  //     tolerance: 200,
  //   });
  // }, [currentIndex]);

  useIsoMorphicLayoutEffect(() => {
    transitionPages();
  }, [children]);

  useIsoMorphicLayoutEffect(() => {
    transitionBackground();
  }, [backgroundColor, backgroundWord, backgroundImg, isMenuOpen]);

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <Loader set={setisLoading} />
      ) : (
        <Layout ref={layoutRef}>
          <Background ref={bgRef} />
          {nextChildren}
        </Layout>
      )}
    </>
  );
};

export default TransitionLayout;
