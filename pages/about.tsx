import { useContext, useEffect, useRef } from "react";
import { AboutItem } from "../components";
import { TransitionContext } from "../context/TransitionContext";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
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
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();
  const { setBackgroundImg, lang } = useContext(TransitionContext);

  useIsoMorphicLayoutEffect(() => {
    if (pageRef.current) return handleBackground(pageRef.current.id);
  }, []);

  useEffect(() => {
    return () => setBackgroundImg(null);
  }, []);

  return (
    <PageContainer ref={pageRef} id="about" justify="center">
      {/* <HomeAnimation> */}
      <Container>
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
          {/* <ImgContainer>
            <Image
              src={moi}
              layout="intrinsic"
              style={{ borderRadius: "50%" }}
            />
          </ImgContainer> */}
        </ContentContainer>
      </Container>
      {/* </HomeAnimation> */}
    </PageContainer>
  );
};

export default About;
