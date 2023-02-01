import { useContext, useEffect, useRef } from "react";
import { GameCard, Results } from "../components";
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
  const {
    shuffledCards,
    flipCard,
    compare,
    wins,
    flippedGameCards,
    flippedResultCards,
    updateResultCardsArray,
  } = useCardGame();
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
    if (wins !== 4) {
      setTimeout(() => {
        setDisplayMemoryGameResult(false);
      }, 3200);
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
            <GameCard
              key={i + 1}
              height="var(--memory-card-size)"
              width="var(--memory-card-size)"
              cardName={card.name}
              isGamePlayed={isMemoryGamePlayed}
              ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
              onClick={() => {
                flipCard(cardRefs, i);
                compare();
              }}
            >
              <div style={{ height: "100%", width: "100%" }}>{card.jsx}</div>
            </GameCard>
          );
        })}
      </CardContainer>

      {displayMemoryGameResult ? (
        <Results
          displayResult={displayMemoryGameResult}
          isGamePlayed={isMemoryGamePlayed}
          wins={wins}
          flipped={flippedGameCards}
          flippedResults={flippedResultCards}
          update={updateResultCardsArray}
        />
      ) : null}
    </PageContainer>
  );
};

export default Stack;
