import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { useContext, useRef, useState } from "react";
import { GrGithub, GrLinkedinOption, GrTwitter } from "react-icons/gr";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect, useWindowSize } from "../../hooks";
import { Container, Logo } from "./SocialLinksStyled";
gsap.registerPlugin(CustomEase);

const SocialLinks = () => {
  const { isMenuOpen, isMenuClosing } = useContext(TransitionContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [anim, setAnim] = useState<gsap.core.Timeline | null>(null);
  const { width } = useWindowSize();

  const links = [
    {
      name: "github",
      url: "https://github.com/newnightcoder",
      logo: <GrGithub color="white" size={25} />,
    },
    {
      name: "linkedIn",
      url: "http://www.linkedin.com/in/nightcoder-dan/",
      logo: (
        <GrLinkedinOption
          color="white"
          size={22}
          style={{ transform: "translateY(-2px)" }}
        />
      ),
    },
    {
      name: "twitter",
      url: "https://twitter.com/Nightcoder2",
      logo: <GrTwitter color="white" size={22} />,
    },
  ];

  useIsoMorphicLayoutEffect(() => {
    setTl(gsap.timeline({ paused: true }));
  }, []);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current && tl) {
      const duration = 0.7;
      setAnim(
        tl
          .set(ref.current.children, { yPercent: -200 })
          .to(ref.current.children, {
            yPercent: 0,
            stagger: duration / 3,
            duration: duration,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.2,0 0.515,0.137 0.52,0.388 0.538,1.386 0.822,1 1,1 "
            ),
            delay: 0.15,
          })
      );
    }
  }, [tl]);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current && anim) {
      if (isMenuOpen) {
        anim.play();
      }
      if (isMenuClosing) {
        anim.reverse();
      }
    }
  }, [isMenuOpen, isMenuClosing, anim]);

  return (
    <Container ref={ref} isMenuOpen={isMenuOpen}>
      {links.map((link) => {
        return (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
          >
            <Logo>{link.logo}</Logo>
          </a>
        );
      })}
    </Container>
  );
};

export default SocialLinks;
