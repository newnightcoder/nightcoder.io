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
  MoreBtn,
  PageContainer,
  Section,
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
        <Hero>
          <DiscSvg />
        </Hero>
      </HomeSection>
      {/* </HomeAnimation> */}
      <Section>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>01</span>
        <h2 style={{ fontWeight: "400", fontSize: "2rem" }}>about me</h2>
        <div
          style={{
            fontWeight: "200",
            fontSize: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <span>i'm a proud self-taught developer.</span>
          <span>in love with code.</span>
          <span>i speak fluently JavaScript with a strong React accent.</span>
        </div>
        <MoreBtn onClick={() => handleRoute("/about")}>more info</MoreBtn>
      </Section>
      <Section>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>02</span>
        <h2 style={{ fontWeight: "800", fontSize: "2rem" }}>projects</h2>
        <div style={{ fontWeight: "200", fontSize: "2rem" }}>
          some projects i built
        </div>
        <MoreBtn onClick={() => handleRoute("/projects")}>more info</MoreBtn>
      </Section>
      <Section>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>03</span>
        <h2>contact</h2>
        <div style={{ fontSize: "2rem" }}>let's get in touch!</div>
        <MoreBtn onClick={() => handleRoute("/contact")}>more info</MoreBtn>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
