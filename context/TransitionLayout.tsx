import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { GlobalStyles } from "../styles/_globals";
import { TransitionContext } from "./TransitionContext";

const TransitionLayout = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [nextChildren, setNextChildren] = useState(children);
  const { timelinePages, backgroundColor, isMenuOpen } =
    useContext(TransitionContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useIsoMorphicLayoutEffect(() => {
    if (children === nextChildren) return;
    if (timelinePages.duration() === 0) return setNextChildren(children);
    timelinePages.play().then(() => {
      // out animation is complete so reset timeline to an empty paused timeline
      timelinePages.pause().clear();
      setNextChildren(children);
    });
  }, [children]);

  useIsoMorphicLayoutEffect(() => {
    if (
      ref.current &&
      ref.current.firstElementChild.id !== "home" &&
      !isMenuOpen
    ) {
      gsap.to(ref.current, {
        background: backgroundColor,
        duration: 2,
      });
    }
  }, [backgroundColor, isMenuOpen]);

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <Loader set={setisLoading} />
      ) : (
        <Layout ref={ref}>{nextChildren}</Layout>
      )}
    </>
  );
};

export default TransitionLayout;
