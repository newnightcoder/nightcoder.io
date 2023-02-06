import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameCardContainer, Results } from "../components";
import { TransitionContext } from "../context/TransitionContext";
import {
  useCardGame,
  useIsoMorphicLayoutEffect,
  useTransitionBackground,
} from "../hooks";
import { BtnContainer, ChoiceBtn, GameTitleContainer } from "../styles/stack";
import { PageContainer } from "../styles/_globals";

const Stack = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  // const cardRefs = useRef<HTMLDivElement[]>([]);
  const handleBackground = useTransitionBackground();
  const {
    displayMemoryGameResult,
    setDisplayMemoryGameResult,
    isMemoryGamePlayed,
    setIsMemoryGamePlayed,
  } = useContext(TransitionContext);
  const {
    round1,
    round2,
    round3,
    flipCard,
    compare,
    wins,
    flippedGameCards,
    flippedResultCards,
    updateResultCardsArray,
  } = useCardGame();
  const [currentRound, setCurrentRound] = useState(round1);
  const [round, setRound] = useState<number>(1);

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
        setRound(2);
        setCurrentRound(round2);
        break;
      case 12:
        setRound(3);
        setCurrentRound(round3);
        break;
      // case 18:
      default:
        return setCurrentRound(round1);
    }
  }, [wins]);

  useEffect(() => {
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayMemoryGameResult(true);
    }, 1000);
    // if (wins !== 18) {
    //   setTimeout(() => {
    //     setDisplayMemoryGameResult(false);
    //   }, 3200);
    // }
  }, [wins]);

  useEffect(() => {
    setCurrentRound(() => round1);
    setRound(1);
  }, []);

  // useEffect(() => {
  //   handleRound();
  // }, [wins]);

  // useEffect(() => {
  //   console.log("round", currentRound);
  // }, [round1, round2, round3]);

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
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
      <GameCardContainer currentRound={currentRound} round={round} />
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
