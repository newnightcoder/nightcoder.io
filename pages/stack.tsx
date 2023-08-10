import { useRef } from "react";
import { GameBoard, GameTitle, Results } from "../components";
import { useCardGame } from "../hooks";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const {
    flipCard,
    compare,
    wins,
    flippedGameCards,
    flippedResultCards,
    updateResultCardsArray,
    handleResultScreen,
    resetGame,
    round,
    setRound,
  } = useCardGame();

  // console.log("stack page re-rendering");

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
      <GameTitle ref={welcomeRef} />
      <GameBoard
        wins={wins}
        flipCard={flipCard}
        compare={compare}
        flippedCards={flippedGameCards}
        handleResultScreen={handleResultScreen}
        resetGame={resetGame}
        round={round}
      />
      <Results
        wins={wins}
        setRound={setRound}
        flipped={flippedGameCards}
        flippedResults={flippedResultCards}
        update={updateResultCardsArray}
        resetGame={resetGame}
      />
    </PageContainer>
  );
};

export default Stack;
