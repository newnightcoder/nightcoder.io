import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { round1Bg, round2Bg, round3Bg } from "../assets";
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
    setFlippedResultCards,
    updateResultCardsArray,
  } = useCardGame();
  const [currentRound, setCurrentRound] = useState(round1);
  const [round, setRound] = useState(1);
  const [gameBg, setGameBg] = useState<string>(null);
  const images = [round1Bg, round2Bg, round3Bg];

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
          setGameBg(images[1].src);
          setFlippedGameCards([]);
          gameCardRefs?.current.forEach((ref) => {
            ref?.classList.remove("flip-card-y");
          });
        }, 500);
        break;
      case 12:
        setTimeout(() => {
          setRound(3);
          setCurrentRound(round3);
          setGameBg(images[2].src);
          setFlippedGameCards([]);
          gameCardRefs?.current.forEach((ref) => {
            ref?.classList.remove("flip-card-y");
          });
        }, 500);
        break;
      // case 18:
      default:
        return;
    }
  }, [wins, gameCardRefs]);

  useEffect(() => {
    // setDisplayMemoryGameResult(true);
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayMemoryGameResult(true);
    }, 1000);
    if (wins !== 18) {
      setTimeout(() => {
        setDisplayMemoryGameResult(false);
        handleRound();
      }, 3200);
    }
  }, [wins]);

  useEffect(() => {
    setCurrentRound(() => round1);
    setRound(1);
    setGameBg(images[0].src);
  }, [round1]);

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
      <GameTitle
        welcomeRef={welcomeRef}
        skipGame={skipGame}
        setIsMemoryGamePlayed={setIsMemoryGamePlayed}
      />
      <GameBoard
        round={round}
        setRound={setRound}
        gameBg={null}
        currentRound={currentRound}
        gameCardRefs={gameCardRefs}
        isMemoryGamePlayed={isMemoryGamePlayed}
        setIsMemoryGamePlayed={setIsMemoryGamePlayed}
        flipCard={flipCard}
        compare={compare}
        setWins={setWins}
        isLightTheme={isLightTheme}
        welcomeRef={welcomeRef}
        flippedCards={flippedGameCards}
        flippedResults={flippedResultCards}
        setFlippedCards={setFlippedGameCards}
        setFlippedResults={setFlippedResultCards}
      />
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
