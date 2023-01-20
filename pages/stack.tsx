import { useRef } from "react";
import { GameCard } from "../components";
import {
  useCardGame,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { CardContainer } from "../styles/stack";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleBackground = useTransitionBackground();
  const { shuffledSvgArr } = useCardGame();

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="stack" justify="center">
      {/* <HomeAnimation>
        <h1>STACK</h1>
      </HomeAnimation> */}
      <CardContainer>
        {shuffledSvgArr.map((svg, i) => {
          return <GameCard svg={svg} key={i + 1} />;
        })}
      </CardContainer>
    </PageContainer>
  );
};

export default Stack;
