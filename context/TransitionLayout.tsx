import gsap from "gsap";
import Observer from "gsap/dist/Observer";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import Background from "../components/Background/Background";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import { useHandleRoute } from "../hooks/useHandleRoute";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { GlobalStyles } from "../styles/_globals";
import { TransitionContext } from "./TransitionContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

interface Props extends PropsWithChildren {}

const TransitionLayout = ({ children }: Props) => {
  const [isLoading, setisLoading] = useState(true);
  const [nextChildren, setNextChildren] = useState(children);
  const { timelinePages, backgroundColor, isMenuOpen } =
    useContext(TransitionContext);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const handleRoute = useHandleRoute();
  const sections = ["/", "/about", "/projects", "/stack", "/contact"];
  const wrap = gsap.utils.wrap(0, sections.length - 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const transitionPages = useCallback(() => {
    if (children === nextChildren) return;
    if (timelinePages.duration() === 0) return setNextChildren(children);
    timelinePages.play().then(() => {
      timelinePages.pause().clear();
      setNextChildren(children);
    });
  }, [children, nextChildren, setNextChildren, timelinePages]);

  const transitionBackground = useCallback(() => {
    if (
      layoutRef.current &&
      layoutRef.current.firstElementChild.id !== "home" &&
      bgRef.current &&
      !isMenuOpen
    ) {
      gsap.to(bgRef.current, {
        background: backgroundColor,
        duration: 2,
      });
    }
  }, [layoutRef, bgRef, isMenuOpen, backgroundColor, gsap]);

  const goToNextSection = (index: number, direction: number) => {
    index = wrap(index);
    if (direction === 1) {
      handleRoute(sections[index + 1]);
      setCurrentIndex(index + 1);
    } else if (direction === -1) {
      handleRoute(sections[index - 1]);
      setCurrentIndex(index - 1);
    }
  };

  useIsoMorphicLayoutEffect(() => {
    Observer.create({
      type: "wheel, touch",
      onDown: () => goToNextSection(currentIndex, 1),
      onUp: () => goToNextSection(currentIndex, -1),
    });
  }, [currentIndex]);

  useIsoMorphicLayoutEffect(() => {
    transitionPages();
  }, [children]);

  useIsoMorphicLayoutEffect(() => {
    transitionBackground();
  }, [backgroundColor, isMenuOpen]);

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
