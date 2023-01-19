import { useRef } from "react";
import { GameCard } from "../components";
import { useIsoMorphicLayoutEffect, useTransitionBackground } from "../hooks";
import { CardContainer } from "../styles/stack";
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
          return <GameCard svg={reactSvg} key={i + 1} />;
        })}
      </CardContainer>
    </PageContainer>
  );
};

export default Stack;
