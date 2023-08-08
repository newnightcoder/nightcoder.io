import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { round1Bg, round2Bg, round3Bg } from "../assets";
import { GameBoard, GameTitle, Results } from "../components";
import { TransitionContext } from "../context/TransitionContext";
import { useCardGame } from "../hooks";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  // const gameCardRefs = useRef<HTMLDivElement[]>([]);
  // const handleBackground = useTransitionBackground(pageRef?.current?.id);
  const {
    displayMemoryGameResult,
    setDisplayMemoryGameResult,
    isMemoryGamePlayed,
    setIsMemoryGamePlayed,
    isLightTheme,
    setTheme,
  } = useContext(TransitionContext);
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
  // const [currentRound, setCurrentRound] = useState(round1);
  // const [round, setRound] = useState(1);
  const [gameBg, setGameBg] = useState<string>(null);
  const images = [round1Bg, round2Bg, round3Bg];

  console.log("re-rendering");

  const skipGame = () => {
    setDisplayMemoryGameResult(true);
    setIsMemoryGamePlayed(false);
  };

  // useIsoMorphicLayoutEffect(() => {
  //   if (pageRef.current) return handleBackground(pageRef.current.id);
  // }, []);

  useEffect(() => {
    console.log("mounting");
  }, []);

  // useEffect(() => {
  //   setCurrentRound(() => round1);
  //   setRound(1);
  //   // setGameBg(images[0].src);
  // }, [round1]);

  const handlePlay = useCallback(() => {
    welcomeRef.current?.classList.add("split-screen");
    setIsMemoryGamePlayed(true);
  }, [welcomeRef.current]);

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
      <GameTitle
        ref={welcomeRef}
        handlePlay={handlePlay}
        skipGame={skipGame}
        // setIsMemoryGamePlayed={setIsMemoryGamePlayed}
      />
      <GameBoard
        // round={round}
        // setRound={setRound}
        // gameBg={null}
        // currentRound={currentRound}
        // setCurrentRound={setCurrentRound}
        // gameCardRefs={gameCardRefs}
        // isMemoryGamePlayed={isMemoryGamePlayed}
        // setIsMemoryGamePlayed={setIsMemoryGamePlayed}
        // isLightTheme={isLightTheme}
        wins={wins}
        flipCard={flipCard}
        compare={compare}
        setWins={setWins}
        welcomeRef={welcomeRef}
        flippedCards={flippedGameCards}
        flippedResults={flippedResultCards}
        setFlippedCards={setFlippedGameCards}
        setFlippedResults={setFlippedResultCards}
      />
      {displayMemoryGameResult ? (
        <Results
          // displayResult={displayMemoryGameResult}
          // isGamePlayed={isMemoryGamePlayed}
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
