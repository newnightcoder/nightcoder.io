import { useContext, useEffect, useRef } from "react";
import { Results } from "../components";
import {
  Card,
  CardBack,
  CardFront,
  CardInner,
} from "../components/GameCard/GameCardStyled";
import { TransitionContext } from "../context/TransitionContext";
import {
  useCardGame,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { ICardElement } from "../hooks/useCardGame";
import {
  BtnContainer,
  CardContainer,
  ChoiceBtn,
  GameTitleContainer,
} from "../styles/stack";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef(null);
  const handleBackground = useTransitionBackground();
  const { shuffledCards, flipCard, compare, wins } = useCardGame();
  const {
    displayMemoryGameResult,
    setDisplayMemoryGameResult,
    isMemoryGamePlayed,
    setIsMemoryGamePlayed,
  } = useContext(TransitionContext);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const skipGame = () => {
    setDisplayMemoryGameResult(true);
    setIsMemoryGamePlayed(false);
  };

  useIsoMorphicLayoutEffect(() => {
    if (ref.current) return handleBackground(ref.current.id);
  }, []);

  useEffect(() => {
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayMemoryGameResult(true);
    }, 1000);
    if (wins !== 6) {
      setTimeout(() => {
        setDisplayMemoryGameResult(false);
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
          <ChoiceBtn onClick={() => skipGame()}>
            <span style={{ fontSize: "2rem" }}>🤬</span>i really don't have time
            for this sh*t
          </ChoiceBtn>
        </BtnContainer>
      </GameTitleContainer>
      <CardContainer>
        {shuffledCards.map((card: ICardElement, i) => {
          return (
            // <GameCard
            //   key={i + 1}
            //   svg={card.jsx}
            //   ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
            //   data-card={card.name}
            //   onClick={() => {
            //     flipCard(cardRefs, i);
            //     compare();
            //   }}
            // />
            // ❗️❗️ TO REFACTOR TO Card component above = forwardRef. but how???
            <Card
              key={i + 1}
              ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
              data-card={card.name}
              onClick={() => {
                flipCard(cardRefs, i);
                compare();
              }}
            >
              <CardInner>
                <CardFront />
                <CardBack>{card.jsx}</CardBack>
              </CardInner>
            </Card>
          );
        })}
      </CardContainer>

      {displayMemoryGameResult ? (
        <Results
          displayResult={displayMemoryGameResult}
          isGamePlayed={isMemoryGamePlayed}
        />
      ) : null}
    </PageContainer>
  );
};

export default Stack;
