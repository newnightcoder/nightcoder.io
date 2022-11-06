import gsap from "gsap";
import Scrolltrigger from "gsap/dist/Scrolltrigger";
import { useContext, useEffect, useRef } from "react";
import DiscSvg from "../components/DiscSvg/DiscSvg";
import { TransitionContext } from "../context/TransitionContext";
import { useHandleRoute } from "../hooks/useHandleRoute";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  GradientBlue,
  GradientYellow,
  Header,
  Hero,
  HomeSection,
  PageContainer,
  Span,
} from "../styles/home";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Scrolltrigger);
}

const HomePage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const { isMenuOpen } = useContext(TransitionContext);
  const { width } = useWindowSize();

  useIsoMorphicLayoutEffect(() => {
    ref.current && handleBackground(ref.current.id);
  }, []);

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
        <Hero>
          <DiscSvg />
        </Hero>
      </HomeSection>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default HomePage;
