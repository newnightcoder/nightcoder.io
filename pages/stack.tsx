import { useEffect, useRef, useState } from "react";
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
import {
  BtnContainer,
  CardContainer,
  ChoiceBtn,
  GameTitleContainer,
  Result,
  ResultContainer,
} from "../styles/stack";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef(null);
  const handleBackground = useTransitionBackground();
  const { shuffledSvgArr1, flipCard, compare, wins, flippedCards } =
    useCardGame();
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [displayResult, setDisplayResult] = useState(false);

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  useEffect(() => {
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayResult(true);
    }, 1000);
    if (wins !== 6) {
      setTimeout(() => {
        setDisplayResult(false);
      }, 2200);
    }
  }, [wins]);

  return (
    <PageContainer ref={ref} id="stack" justify="center">
      <GameTitleContainer ref={welcomeRef}>
        welcome to <br />
        memory game
        <br /> stack edition
        <BtnContainer>
          <ChoiceBtn
            onClick={() => welcomeRef.current.classList.add("split-screen")}
          >
            <span style={{ fontSize: "2rem" }}>😁</span>
            <span style={{ textTransform: "uppercase", fontWeight: "700" }}>
              play
            </span>
          </ChoiceBtn>
          <ChoiceBtn>
            <span style={{ fontSize: "2rem" }}>🤬</span>i really don't have time
            for this sh*t
          </ChoiceBtn>
        </BtnContainer>
      </GameTitleContainer>
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
      {displayResult ? (
        <ResultContainer displayResult={displayResult}>
          {flippedCards.map((card, i) => {
            if (i % 2 === 0) return <Result key={i + 1}>{card.name}</Result>;
          })}
        </ResultContainer>
      ) : null}
    </PageContainer>
  );
};

export default Stack;
