import { useContext, useRef } from "react";
import { HomeAnimation } from "../animations";
import { AboutItem } from "../components";
import { GameHeading } from "../components/GameCard/GameCardStyled";
import { TransitionContext } from "../context/TransitionContext";
import { useHandleRoute } from "../hooks";
import {
  AboutItemsContainer,
  Container,
  ContentContainer,
  Title,
} from "../styles/about";
import { PageContainer } from "../styles/_globals";
import text from "./api/text.json";

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  // const handleBackground = useTransitionBackground(pageRef?.current?.id);
  const handleRoute = useHandleRoute();
  const { setBackgroundImg, lang } = useContext(TransitionContext);

  // useIsoMorphicLayoutEffect(() => {
  //   if (pageRef.current) return handleBackground(pageRef.current.id);
  // }, []);

  // useEffect(() => {
  //   return () => setBackgroundImg(null);
  // }, []);

  return (
    <PageContainer ref={pageRef} id="about" justify="start">
      <HomeAnimation>
        {/* <Background>
          <WordContainer backgroundTextColor={"rgba(230, 230, 230, 0.9)"}>
          </WordContainer>
        </Background> */}
      </HomeAnimation>
      <Container>
        <Title>
          <GameHeading fontSize={5} color={"blue"} fontWeight={900}>
            In a few words, i am...
          </GameHeading>
        </Title>
        <ContentContainer>
          <AboutItemsContainer>
            {new Array(5).fill("").map((el, i) => (
              <AboutItem
                key={i + 1}
                itemTitle={text[lang].item["title" + `${i + 1}`]}
                itemText={text[lang].item["text" + `${i + 1}`]}
                itemEmoji={text[lang].item["emoji" + `${i + 1}`]}
              />
            ))}
          </AboutItemsContainer>
        </ContentContainer>
      </Container>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default About;
