import gsap from "gsap";
import Scrolltrigger from "gsap/dist/Scrolltrigger";
import { useContext, useEffect, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { useHandleRoute } from "../hooks/useHandleRoute";
import { useIsoMorphicLayoutEffect } from "../hooks/useIsoMorphicLayoutEffect";
import { useTransitionBackground } from "../hooks/useTransitionBackground";
import { Header, Hero, HomeSection, PageContainer } from "../styles/home";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Scrolltrigger);
}

const HomePage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const { isMenuOpen } = useContext(TransitionContext);

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
          <span>Hey! I'm Daniel</span>
          <span>aka Nightcoder 😎</span>
          <span>I'm a frontend web developer </span>
          <span>based in Paris</span>
        </Header>
        <Hero></Hero>
      </HomeSection>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default HomePage;
