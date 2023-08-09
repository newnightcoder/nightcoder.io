import { useContext, useRef } from "react";
import { GameBoard, GameTitle, Results } from "../components";
import { TransitionContext } from "../context/TransitionContext";
import { useCardGame } from "../hooks";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { displayMemoryGameResult } = useContext(TransitionContext);
  const {
    flipCard,
    compare,
    wins,
    setWins,
    flippedGameCards,
    setFlippedGameCards,
    flippedResultCards,
    setFlippedResultCards,
    updateResultCardsArray,
  } = useCardGame();

  console.log("stack page re-rendering");

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
      <GameTitle ref={welcomeRef} />
      <GameBoard
        wins={wins}
        flipCard={flipCard}
        compare={compare}
        setWins={setWins}
        flippedCards={flippedGameCards}
        flippedResults={flippedResultCards}
        setFlippedCards={setFlippedGameCards}
        setFlippedResults={setFlippedResultCards}
      />
      {displayMemoryGameResult ? (
        <Results
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
