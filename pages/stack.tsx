import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameBoard, GameTitle, Results } from "../components";
import { TransitionContext } from "../context/TransitionContext";
import {
  useCardGame,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const gameCardRefs = useRef<HTMLDivElement[]>([]);
  const handleBackground = useTransitionBackground(pageRef?.current?.id);
  const {
    displayMemoryGameResult,
    setDisplayMemoryGameResult,
    isMemoryGamePlayed,
    setIsMemoryGamePlayed,
    isLightTheme,
  } = useContext(TransitionContext);
  const {
    round1,
    round2,
    round3,
    flipCard,
    compare,
    wins,
    setWins,
    flippedGameCards,
    setFlippedGameCards,
    flippedResultCards,
    updateResultCardsArray,
  } = useCardGame();
  const [currentRound, setCurrentRound] = useState(round1);
  const [round, setRound] = useState(1);

  const skipGame = () => {
    setDisplayMemoryGameResult(true);
    setIsMemoryGamePlayed(false);
  };

  useIsoMorphicLayoutEffect(() => {
    if (pageRef.current) return handleBackground(pageRef.current.id);
  }, []);

  const handleRound = useCallback(() => {
    switch (wins) {
      case 6:
        setTimeout(() => {
          setRound(2);
          setCurrentRound(round2);
          setFlippedGameCards([]);
          gameCardRefs?.current.forEach((ref) => {
            ref?.classList.remove("flip-card-y");
          });
        }, 1500);
        break;
      case 12:
        setTimeout(() => {
          setRound(3);
          setCurrentRound(round3);
          setFlippedGameCards([]);
          gameCardRefs?.current.forEach((ref) => {
            ref?.classList.remove("flip-card-y");
          });
        }, 1500);
        break;
      // case 18:
      default:
        return;
    }
  }, [wins, gameCardRefs]);

  useEffect(() => {
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayMemoryGameResult(true);
    }, 1000);
    if (wins !== 18) {
      setTimeout(() => {
        setDisplayMemoryGameResult(false);
      }, 3200);
    }
  }, [wins]);

  useEffect(() => {
    setCurrentRound(() => round1);
    setRound(1);
  }, [round1]);

  useEffect(() => {
    handleRound();
  }, [wins]);

  // useEffect(() => {
  //   console.log("round", currentRound);
  // }, [round1, round2, round3]);

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
      <GameTitle welcomeRef={welcomeRef} skipGame={skipGame} />
      <GameBoard
        round={round}
        setRound={setRound}
        currentRound={currentRound}
        gameCardRefs={gameCardRefs}
        isMemoryGamePlayed={isMemoryGamePlayed}
        flipCard={flipCard}
        compare={compare}
        wins={wins}
        isLightTheme={isLightTheme}
        welcomeRef={welcomeRef}
      />
      {displayMemoryGameResult ? (
        <Results
          displayResult={displayMemoryGameResult}
          isGamePlayed={isMemoryGamePlayed}
          wins={wins}
          // setWins={setWins}
          flipped={flippedGameCards}
          flippedResults={flippedResultCards}
          update={updateResultCardsArray}
        />
      ) : null}
    </PageContainer>
  );
};

export default Stack;
