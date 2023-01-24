import { useRef } from "react";
import {
  Card,
  CardBack,
  CardFront,
  CardInner,
} from "../components/GameCard/GameCardStyled";
import {
  useCardGame,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { CardContainer } from "../styles/stack";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleBackground = useTransitionBackground();
  const { shuffledSvgArr1, flipCard, compare } = useCardGame();
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  return (
    <PageContainer ref={ref} id="stack" justify="center">
      <CardContainer>
        {shuffledSvgArr1.map((el: [string, JSX.Element], i) => {
          return (
            // <GameCard
            //   key={i + 1}
            //   svg={svg}
            //   ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
            // />

            // ❗️❗️ TO REFACTOR TO Card component above = forwardRef. but how???
            <Card
              data-card={el[0]}
              onClick={() => {
                flipCard(cardRefs, i);
                compare();
              }}
              // onMouseOver={() => flipCard(cardRefs, i)}
              key={i + 1}
              ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
            >
              <CardInner>
                <CardFront />
                <CardBack>{el[1]}</CardBack>
              </CardInner>
            </Card>
          );
        })}
      </CardContainer>
    </PageContainer>
  );
};

export default Stack;
