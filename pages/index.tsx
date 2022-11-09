import { useContext, useEffect, useRef } from "react";
import { DiscSvg } from "../components";
import { TransitionContext } from "../context/TransitionContext";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import {
  GradientBlue,
  GradientYellow,
  Header,
  Hero,
  HomeSection,
  PageContainer,
  Span,
} from "../styles/home";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(Scrolltrigger);
// }

const HomePage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const { isMenuOpen } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) {
      handleBackground(ref.current.id);
    }
  }, [ref]);

  // useIsoMorphicLayoutEffect(() => {
  //   if (ref.current) {
  //     Scrolltrigger.create({
  //       trigger: "#home",
  //       markers: true,
  //       start: "bottom bottom",
  //       end: "bottom bottom",
  //       // onLeave: () => {
  //       //   console.log("yay");
  //       //   handleRoute("/about");
  //       // },
  //     });
  //   }
  // }, [ref.current]);

  useEffect(() => {
    if (ref.current && isMenuOpen) {
      ref.current.style.overflowY = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <PageContainer ref={ref} id="home">
      {/* <HomeAnimation> */}
      <HomeSection>
        <Header>
          <Span>
            Hey! 👋🏾 I'm <GradientYellow> Daniel</GradientYellow>
          </Span>
          <Span>aka Nightcoder 😎</Span>
          <Span>
            I'm a <GradientBlue>frontend </GradientBlue>
          </Span>
          <Span>
            <GradientBlue>web developer</GradientBlue>
          </Span>
          <Span>based in Paris</Span>
        </Header>
      </HomeSection>
      <Hero>
        <DiscSvg />
      </Hero>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default HomePage;
