import { useContext, useRef } from "react";
import { HomeAnimation } from "../animations";
import { Background } from "../components";
import { WordContainer } from "../components/Background/BackgroundStyled";
import { TransitionContext } from "../context/TransitionContext";
import { useHandleRoute } from "../hooks";
import { PageContainer } from "../styles/_globals";

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
        <Background>
          <WordContainer backgroundTextColor={"rgba(230, 230, 230, 0.9)"}>
            {/* <WordComponent word={"home"}></WordComponent> */}ABOUT
          </WordContainer>
        </Background>
      </HomeAnimation>
      {/* <Container>
        <Title>
          <h1>In a few words, i am...</h1>
        </Title>
        <ContentContainer>
          <AboutItemsContainer>
            <AboutItem
              itemTitle={text[lang].item.title1}
              itemText={text[lang].item.text1}
            />
            <AboutItem
              itemTitle={text[lang].item.title2}
              itemText={text[lang].item.text2}
            />
            <AboutItem
              itemTitle={text[lang].item.title3}
              itemText={text[lang].item.text3}
            />
            <AboutItem
              itemTitle={text[lang].item.title4}
              itemText={text[lang].item.text4}
            />
            <AboutItem
              itemTitle={text[lang].item.title6}
              itemText={text[lang].item.text6}
            />
          </AboutItemsContainer>
        </ContentContainer>
      </Container> */}
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default About;
