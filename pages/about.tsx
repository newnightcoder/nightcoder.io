import Image from "next/image";
import { useRef, useState } from "react";
import moi from "../assets/moi.jpg";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import {
  Container,
  FlexContainer,
  ImgContainer,
  MenuContainer,
  MenuItem,
  Text,
  Title,
} from "../styles/about";
import { PageContainer } from "../styles/_globals";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="about" justify="flex-start">
      {/* <HomeAnimation> */}
      <Container>
        <Title>In a few words, i am...</Title>
        <FlexContainer>
          <Text>
            <MenuContainer>
              <p>
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    active === 1 ? setActive(0) : setActive(1);
                    //  setIsVisible((prev) => !prev);
                  }}
                >
                  ▶︎
                </button>
                🌱  A proud self-taught developer
              </p>
              {active === 1 ? (
                <MenuItem>
                  End of 2019 was when i decided that it was the right time for
                  me to change my career path and do what i truly like. The idea
                  and desire to code had been living in me for quite some time
                  at this point, so i just did it. I even stood up and quit my
                  former job, in order for me to make space and time in my life
                  for learning how to code. It all started with the
                  [#100daysofcode](https://twitter.com/_100daysofcode) hashtag :
                  the goal is to keep coding everyday and post one’s daily
                  report on Twitter, for accountability. That’s when i became
                  addicted to code. Dive into the the tech universe, the coding
                  world, where i’ve met amazing and super supportive developers
                  from all over the world, in a fantastic ecosystem of resources
                  for learning, training, sharing knowledge and best practices
                  etc… I also did a sort of bootcamp course in France (called
                  Openclassrooms) and graduated their certificated Web Developer
                  degree. I did it mostly to meet other French speaking
                  developers (i had only been immersed in the English speaking
                  tech community since the beginning), some of which are really
                  experienced and currently hired.
                </MenuItem>
              ) : null}
            </MenuContainer>

            <MenuContainer>
              <p>
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    // setIsVisible((prev) => !prev);
                    active === 2 ? setActive(0) : setActive(2);
                  }}
                >
                  ▶︎
                </button>
                💼 Available for hire - i'm applying!
              </p>
              {active === 2 ? (
                <MenuItem>
                  My goal is to join a team of developers to positively
                  contribute to the project we’re working on, while in the
                  meantime gaining in proficiency. Here’s the idea: you invest
                  in me = i’m committed to make your investment successful!
                  Agile workflow is a plus ;) In terms of salary, i am at 35K
                  minimum. If it clicks, let’s do it!
                </MenuItem>
              ) : null}
            </MenuContainer>

            <MenuContainer>
              <p>
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    // setIsVisible((prev) => !prev);
                    active === 3 ? setActive(0) : setActive(3);
                  }}
                >
                  ▶︎
                </button>
                🧠 Always working on my problem solving skills
              </p>
              {active === 3 ? (
                <MenuItem>
                  One of the most important task of a dev: solve problems.
                  That’s the key skill i keep on training, always looking to
                  improve. Never giving up, the solution comes if you keep
                  looking for it. Stackoverflow yes, but to exercise the brain
                  is also a good thing ;)
                </MenuItem>
              ) : null}
            </MenuContainer>

            <MenuContainer>
              <p>
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    // setIsVisible((prev) => !prev);
                    active === 4 ? setActive(0) : setActive(4);
                  }}
                >
                  ▶︎
                </button>
                A junior dev whose goal is to become a Jedi
              </p>
              {active === 4 ? (
                <MenuItem>
                  🚀 *Today i’m a junior developer. But i aspire to be a* good
                  *junior, and at some point a good senior dev, and then lead
                  dev, then even architect! It is also by coding in a great team
                  that one becomes a great developer…
                </MenuItem>
              ) : null}
            </MenuContainer>

            <MenuContainer>
              <p>
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    // setIsVisible((prev) => !prev);
                    active === 5 ? setActive(0) : setActive(5);
                  }}
                >
                  ▶︎
                </button>
                👨🏾‍💻  Currently working on my portfolio website
              </p>
              {active === 5 ? (
                <MenuItem>
                  I’m open to freelance opportunities so i’m working on my
                  portfolio website. Never satisfied of course 😅 i’ve already
                  made at least 3 versions of it… But it’s coming it’s coming!
                </MenuItem>
              ) : null}
            </MenuContainer>

            <MenuContainer>
              <p>
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    // setIsVisible((prev) => !prev);
                    active === 6 ? setActive(0) : setActive(6);
                  }}
                >
                  ▶︎
                </button>
                ❤️ In love with code
              </p>
              {active === 6 ? (
                <MenuItem>
                  Code is a passion... So rich: challenge and joy to find
                  solutions to problems, fulfill the client’s or PO’s request
                  and contribute to the satifaction of the end user,
                  collaborating with the team on a project, Agile principles,
                  craftsmanship approach, the documentation / knowledge sharing
                  aspect of things, code at the service of a business, the
                  personal and intellectual benefit gained by working in said
                  business etc… I feel like code opens the door to endless
                  possibilities. I just love to keep learning and looking for
                  the best practices. ...which is why i chose this career!
                </MenuItem>
              ) : null}
            </MenuContainer>
          </Text>
          <ImgContainer>
            <Image
              src={moi}
              layout="intrinsic"
              // width="400%"
              // height="400%"
              style={{ borderRadius: "50%" }}
            />
          </ImgContainer>
        </FlexContainer>
      </Container>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default About;
