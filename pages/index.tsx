import { useContext, useEffect, useRef, useState } from "react";
import { HomeAnimation } from "../animations";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { TransitionContext } from "../context/TransitionContext";
import { useHandleRoute, useIsoMorphicLayoutEffect } from "../hooks";
import {
  BtnText,
  GradientBlue,
  GradientYellow,
  Header,
  HomeSection,
  MoreBtn,
  Section,
  Span,
} from "../styles/home";
import { PageContainer } from "../styles/_globals";

const TextLine = ({
  text,
  classNameForGsap,
}: {
  text: string;
  classNameForGsap: string;
}) => {
  return (
    // <Span ref={line1Ref}>
    <Span>
      {text.split(" ").map((word, i) => {
        switch (word) {
          case "Daniel":
            return (
              <GradientYellow className={classNameForGsap} key={i}>
                {word}
              </GradientYellow>
            );
          case "frontend":
          case "web":
          case "developer":
            return (
              <GradientBlue className={classNameForGsap} key={i}>
                {word}
              </GradientBlue>
            );
          case "👋🏾":
            return (
              <div className={`${classNameForGsap} hand`} key={i}>
                {word}
              </div>
            );

          default:
            return (
              <div className={classNameForGsap} key={i}>
                {word}
              </div>
            );
        }
      })}
    </Span>
  );
};

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement[]>([]);
  const testRef = useRef<HTMLDivElement>(null);
  const [isAnimDone, setIsAnimDone] = useState(true);
  let isAnim = false;
  // const handleBackground = useTransitionBackground(ref?.current?.id);
  const handleRoute = useHandleRoute();
  const {
    isMenuOpen,
    backgroundWord,
    setBackgroundWord,
    backgroundTextColor,
    timelinePages,
    setBackgroundColor,
    backgroundColor,
    theme,
    isLightTheme,
  } = useContext(TransitionContext);

  const dataColor = {
    sectionHome: isLightTheme ? "#F5F5F5" : "#000000",
    sectionAbout: isLightTheme ? "#D9D9D9" : "#333333",
    sectionProjects: isLightTheme ? "#B3B3B3" : "#4d4d4d",
    sectionContact: isLightTheme ? "#666666" : "#666666",
  };

  // const [sections, setSections] = useState<HTMLDivElement[]>(null);
  // const [ctx, setCtx] = useState<gsap.Context>(null);

  useIsoMorphicLayoutEffect(() => {
    // handleBackground(ref?.current?.id);
    // setBackgroundWord("home");
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
    return () => ctx.revert();
  }, [isLightTheme]);

  // useIsoMorphicLayoutEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(".line1", {
  //     duration: 0.25,
  //     y: 200,
  //     autoAlpha: 0,
  //     stagger: 0.1,
  //     delay: 1,
  //   })
  //     .from(".line2", {
  //       duration: 0.3,
  //       y: 200,
  //       autoAlpha: 0,
  //       stagger: 0.1,
  //       delay: 0.1,
  //     })
  //     .from(".line3", {
  //       duration: 0.3,
  //       y: 200,
  //       autoAlpha: 0,
  //       stagger: 0.1,
  //       delay: 0.1,
  //     })
  //     .from(".line4", {
  //       duration: 0.3,
  //       y: 200,
  //       autoAlpha: 0,
  //       stagger: 0.1,
  //       delay: 0.1,
  //     })
  //     .from(".line5", {
  //       duration: 0.3,
  //       y: 200,
  //       autoAlpha: 0,
  //       stagger: 0.1,
  //       delay: 0.1,
  //     })
  //     .fromTo(
  //       ".hand",
  //       { rotate: "0deg" },
  //       {
  //         rotate: "30deg",
  //         duration: 0.3,
  //         repeat: -1,
  //         yoyo: true,
  //       },
  //       "+=0.3"
  //     );
  // }, []);

  // useIsoMorphicLayoutEffect(() => {
  //   // if (ref.current.firstElementChild.children) {
  //   if (bgRef.current && isAnimDone && !isMenuOpen) {
  //     // const targets = bgRef.current.firstElementChild.children;
  //     const target = bgRef.current;
  //     console.log(target);

  //     gsap.set(target, {
  //       yPercent: -200,
  //       // duration: 0.5,
  //       // stagger: 0.1,
  //     });
  //     gsap.to(target, {
  //       yPercent: 0,
  //       duration: 0.5,
  //       delay: 0.5,
  //       // stagger: 0.1,
  //     });

  //     timelinePages.add(
  //       gsap.to(target, {
  //         xPercent: -200,
  //         duration: 0.5,
  //         // stagger: 0.1,
  //         onStart: () => setIsAnimDone(false),
  //         onComplete: () => setIsAnimDone(true),
  //       }),
  //       0
  //     );
  //   }
  // }, [isMenuOpen, isAnimDone]);

  const WordComponent = ({ word }: { word: string }) => {
    return (
      <Span ref={testRef}>
        {word.split("").map((char, i) => (
          <div key={i + 1} className="letter">
            {char}
          </div>
        ))}
      </Span>
    );
  };

  useEffect(() => {
    if (ref.current && isMenuOpen) {
      ref.current.style.overflowY = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <PageContainer ref={ref} id="home" justify="flex-start">
      <HomeSection className="section" data-color={dataColor.sectionHome}>
        <HomeAnimation>
          <Header>
            <TextLine text={"Hey! 👋🏾 I'm Daniel"} classNameForGsap={"line1"} />
            <TextLine text={"aka Nightcoder 😎"} classNameForGsap={"line2"} />
            <TextLine text={"I'm a frontend"} classNameForGsap={"line3"} />
            <TextLine text={"web developer"} classNameForGsap={"line4"} />
            <TextLine text={"based in Paris"} classNameForGsap={"line5"} />
          </Header>
        </HomeAnimation>
      </HomeSection>

      <Section className="section" data-color={dataColor.sectionAbout}>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>01</span>
        <h2 style={{ fontWeight: "800", fontSize: "2rem" }}>about me</h2>
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
          <BtnText>more...</BtnText>
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
          <BtnText>more...</BtnText>
        </MoreBtn>
      </Section>
      <Section className="section" data-color={dataColor.sectionContact}>
        <span style={{ fontWeight: "200", fontSize: "1rem" }}>03</span>
        <h2>contact</h2>
        <div style={{ fontSize: "2rem" }}>let&apos;s get in touch!</div>
        <MoreBtn
          color={"pink"}
          bg={dataColor.sectionContact}
          onClick={() => handleRoute("/contact")}
        >
          <BtnText>more...</BtnText>
        </MoreBtn>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
