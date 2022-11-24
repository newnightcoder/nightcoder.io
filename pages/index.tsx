import { useContext, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../animations/gsap";
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
  Section,
  Span,
} from "../styles/home";
import { PageContainer } from "../styles/_globals";

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const { isMenuOpen, setBackgroundColor, backgroundColor } =
    useContext(TransitionContext);

  const [sections, setSections] = useState<HTMLDivElement[]>(null);
  const [ctx, setCtx] = useState<gsap.Context>(null);

  useIsoMorphicLayoutEffect(() => {
    // if (ref.current) {
    handleBackground(ref?.current?.id);
    // setSections(() => gsap.utils.toArray(".section"));
    // setCtx(
    const ctx = gsap.context(() =>
      gsap.utils
        .toArray(ref?.current?.children)
        .forEach((section: HTMLDivElement) => {
          const bgColor = section.getAttribute("data-color");
          ScrollTrigger.create({
            trigger: section,
            markers: false,
            start: "top 30%",
            end: "bottom 30%",
            onEnter: () =>
              gsap.to(ref.current, {
                duration: 1,
                background: bgColor,
              }),
            onEnterBack: () =>
              gsap.to(ref.current, {
                duration: 1,
                background: bgColor,
              }),
          });
        })
    );
    // );
    // }
    return () => ctx.revert();
  }, [ref.current]);

  useEffect(() => {
    if (ref.current && isMenuOpen) {
      ref.current.style.overflowY = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <PageContainer ref={ref} id="home" background={backgroundColor}>
      {/* <HomeAnimation> */}
      <HomeSection className="section" data-color="#000000">
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
        <Hero>{/* <DiscSvg /> */}</Hero>
      </HomeSection>
      {/* </HomeAnimation> */}
      <Section className="section" data-color="#333333">
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
      <Section className="section" data-color="#4d4d4d">
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>02</span>
        <h2 style={{ fontWeight: "800", fontSize: "2rem" }}>projects</h2>
        <div style={{ fontWeight: "200", fontSize: "2rem" }}>
          some projects i built
        </div>
        <MoreBtn onClick={() => handleRoute("/projects")}>more info</MoreBtn>
      </Section>
      <Section className="section" data-color="#666666">
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>03</span>
        <h2>contact</h2>
        <div style={{ fontSize: "2rem" }}>let's get in touch!</div>
        <MoreBtn onClick={() => handleRoute("/contact")}>more info</MoreBtn>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
