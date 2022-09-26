import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import { GrGithub, GrLinkedinOption, GrTwitter } from "react-icons/gr";
import { TransitionContext } from "../../context/TransitionContext";
import { useIsoMorphicLayoutEffect } from "../../hooks/useIsoMorphicLayoutEffect";
import { Container, Logo } from "./SocialLinksStyled";

const SocialLinks = () => {
  const { isMenuOpen, test } = useContext(TransitionContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [anim, setAnim] = useState<gsap.core.Timeline | null>(null);

  const links = [
    {
      name: "github",
      url: "https://github.com/newnightcoder",
      logo: <GrGithub color="white" size={18} />,
    },
    {
      name: "linkedIn",
      url: "http://www.linkedin.com/in/nightcoder-dan/",
      logo: <GrLinkedinOption color="white" />,
    },
    {
      name: "twitter",
      url: "https://twitter.com/Nightcoder2",
      logo: <GrTwitter color="white" />,
    },
  ];

  useIsoMorphicLayoutEffect(() => {
    setTl(gsap.timeline({ paused: true }));
  }, []);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current && tl) {
      setAnim(
        tl.to(ref.current.children, {
          y: -65,
          stagger: 0.3,
          duration: 1,
          ease: "power4.out",
        })
      );
    }
  }, [tl]);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current && anim) {
      if (isMenuOpen) {
        console.log("menu open for links");
        anim.play();
      }
      if (test) {
        console.log("menu closing for links");
        anim.reverse();
      }
    }
  }, [isMenuOpen, test, anim]);

  return (
    <Container ref={ref}>
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
