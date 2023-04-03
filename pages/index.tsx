import { useContext, useEffect, useRef } from "react";
import { TransitionContext } from "../context/TransitionContext";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import {
  BtnText,
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
  const { isMenuOpen, setBackgroundColor, backgroundColor, theme } =
    useContext(TransitionContext);

  const dataColor = {
    sectionHome: "#000000",
    sectionAbout: "#333333",
    sectionProjects: "#4d4d4d",
    sectionContact: "#666666",
  };

  // const [sections, setSections] = useState<HTMLDivElement[]>(null);
  // const [ctx, setCtx] = useState<gsap.Context>(null);

  useIsoMorphicLayoutEffect(() => {
    handleBackground(ref?.current?.id);

    // const ctx = gsap.context(() =>
    //   gsap.utils
    //     .toArray(ref?.current?.children)
    //     .forEach((section: HTMLDivElement) => {
    //       const bgColor = section.getAttribute("data-color");
    //       ScrollTrigger.create({
    //         trigger: section,
    //         markers: false,
    //         start: "top 30%",
    //         end: "bottom 30%",
    //         onEnter: () =>
    //           gsap.to(ref.current, {
    //             duration: 1,
    //             background: bgColor,
    //           }),
    //         onEnterBack: () =>
    //           gsap.to(ref.current, {
    //             duration: 1,
    //             background: bgColor,
    //           }),
    //       });
    //     })
    // );

    // return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (ref.current && isMenuOpen) {
      ref.current.style.overflowY = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <PageContainer ref={ref} id="home" justify="center">
      {/* <HomeAnimation> */}
      <HomeSection className="section" data-color={"#000"}>
        <Header>
          <Span>
            Hey! 👋🏾 I&apos;m <GradientYellow> Daniel</GradientYellow>
          </Span>
          <Span>aka Nightcoder 😎</Span>
          <Span>
            I&apos;m a <GradientBlue>frontend </GradientBlue>
          </Span>
          <Span>
            <GradientBlue>web developer</GradientBlue>
          </Span>
          <Span>based in Paris</Span>
        </Header>
        <Hero>{/* <DiscSvg /> */}</Hero>
      </HomeSection>
      {/* </HomeAnimation> */}
      <Section className="section" data-color={dataColor.sectionAbout}>
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
          <span>i&apos;m a proud self-taught developer.</span>
          <span>in love with code.</span>
          <span>i speak fluently JavaScript with a strong React accent.</span>
        </div>
        <MoreBtn
          color={"orange"}
          bg={dataColor.sectionAbout}
          onClick={() => handleRoute("/about")}
        >
          <BtnText>more info</BtnText>
        </MoreBtn>
      </Section>
      <Section className="section" data-color={dataColor.sectionProjects}>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>02</span>
        <h2 style={{ fontWeight: "800", fontSize: "2rem" }}>projects</h2>
        <div style={{ fontWeight: "200", fontSize: "2rem" }}>
          some projects i built
        </div>
        <MoreBtn
          color={"blue"}
          bg={dataColor.sectionProjects}
          onClick={() => handleRoute("/projects")}
        >
          <BtnText>more info</BtnText>
        </MoreBtn>
      </Section>
      <Section className="section" data-color={dataColor.sectionContact}>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>03</span>
        <h2>contact</h2>
        <div style={{ fontSize: "2rem" }}>let&apos;s get in touch!</div>
        <MoreBtn
          color={"blue"}
          bg={dataColor.sectionContact}
          onClick={() => handleRoute("/contact")}
        >
          <BtnText>more info</BtnText>
        </MoreBtn>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
