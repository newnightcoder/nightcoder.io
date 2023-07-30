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
            <AboutItem
              itemTitle={text[lang].item.title1}
              itemText={text[lang].item.text1}
              itemEmoji={text[lang].item.emoji1}
            />
            <AboutItem
              itemTitle={text[lang].item.title2}
              itemText={text[lang].item.text2}
              itemEmoji={text[lang].item.emoji2}
            />
            <AboutItem
              itemTitle={text[lang].item.title3}
              itemText={text[lang].item.text3}
              itemEmoji={text[lang].item.emoji3}
            />
            <AboutItem
              itemTitle={text[lang].item.title4}
              itemText={text[lang].item.text4}
              itemEmoji={text[lang].item.emoji4}
            />
            <AboutItem
              itemTitle={text[lang].item.title6}
              itemText={text[lang].item.text6}
              itemEmoji={text[lang].item.emoji6}
            />
          </AboutItemsContainer>
        </ContentContainer>
      </Container>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default About;
