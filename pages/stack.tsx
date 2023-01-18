import { useRef } from "react";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import {
  Card,
  CardBack,
  CardContainer,
  CardFront,
  CardInner,
} from "../styles/stack";
import { reactSvg } from "../styles/svg";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const cardsNumber = Array(24).fill(1);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="stack" justify="center">
      {/* <HomeAnimation>
        <h1>STACK</h1>
      </HomeAnimation> */}
      <CardContainer>
        {cardsNumber.map((card, i) => {
          return (
            <Card key={i + 1}>
              <CardInner>
                <CardFront />
                <CardBack>{reactSvg}</CardBack>
              </CardInner>
            </Card>
          );
        })}
      </CardContainer>
    </PageContainer>
  );
};

export default Stack;
