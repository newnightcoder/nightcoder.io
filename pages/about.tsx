import Image from "next/image";
import { useRef } from "react";
import moi from "../assets/moi.jpg";
import { AboutItem } from "../components";
import {
  useHandleRoute,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import {
  Container,
  FlexContainer,
  ImgContainer,
  Text,
  Title,
} from "../styles/about";
import { PageContainer } from "../styles/_globals";
import text from "./api/text.json";

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const handleBackground = useTransitionBackground();
  const handleRoute = useHandleRoute();

  useIsoMorphicLayoutEffect(() => {
    if (pageRef.current) return handleBackground(pageRef.current.id);
  }, []);

  return (
    <PageContainer ref={pageRef} id="about" justify="flex-start">
      {/* <HomeAnimation> */}
      <Container>
        <Title>In a few words, i am...</Title>
        <FlexContainer>
          <Text>
            <AboutItem
              itemTitle={text.item.title1}
              itemText={text.item.text1}
            />
            <AboutItem
              itemTitle={text.item.title2}
              itemText={text.item.text2}
            />
            <AboutItem
              itemTitle={text.item.title3}
              itemText={text.item.text3}
            />
            <AboutItem
              itemTitle={text.item.title4}
              itemText={text.item.text4}
            />
            <AboutItem
              itemTitle={text.item.title5}
              itemText={text.item.text5}
            />
            <AboutItem
              itemTitle={text.item.title6}
              itemText={text.item.text6}
            />
          </Text>
          <ImgContainer>
            <Image
              src={moi}
              layout="intrinsic"
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
