import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
  } = useContext(TransitionContext);
  const {
    round1,
    round2,
    round3,
    flipCard,
    compare,
    wins,
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
    // if (wins !== 18) {
    //   setTimeout(() => {
    //     setDisplayMemoryGameResult(false);
    //   }, 3200);
    // }
  }, [wins]);

  // useEffect(() => {
  //   setCurrentRound(() => round1);
  //   setRound(1);
  // }, [round1]);

  // useEffect(() => {
  //   handleRound();
  // }, [wins]);

  // useEffect(() => {
  //   console.log("round", currentRound);
  // }, [round1, round2, round3]);

  return (
    <PageContainer ref={pageRef} id="stack" justify="center">
      {/* <GameTitleContainer ref={welcomeRef}>
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
      <GameHeading fontSize={3} color={"blue"}>
        Round {round}
      </GameHeading>
      <CardContainer>
        {currentRound.map((card: ICardElement, i) => {
          return (
            <GameCard
              key={i + 1}
              ref={(el) =>
                (gameCardRefs.current = [...gameCardRefs.current, el])
              }
              height="var(--memory-card-size)"
              width="var(--memory-card-size)"
              cardName={card.name}
              round={round}
              isGamePlayed={isMemoryGamePlayed}
              onClick={() => {
                flipCard(gameCardRefs, i);
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
      ) : null} */}
    </PageContainer>
  );
};

export default Stack;
