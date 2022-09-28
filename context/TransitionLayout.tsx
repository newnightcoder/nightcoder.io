import gsap from "gsap";
import { PropsWithChildren, useContext, useRef, useState } from "react";
import Background from "../components/Background/Background";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { GlobalStyles } from "../styles/_globals";
import { TransitionContext } from "./TransitionContext";

interface Props extends PropsWithChildren {}

const TransitionLayout = ({ children }: Props) => {
  const [isLoading, setisLoading] = useState(true);
  const [nextChildren, setNextChildren] = useState(children);
  const { timelinePages, backgroundColor, isMenuOpen } =
    useContext(TransitionContext);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

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
