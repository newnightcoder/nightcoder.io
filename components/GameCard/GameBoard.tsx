import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks";
import { ICard, ICardElement } from "../../hooks/useCardGame";
import { CardContainer } from "../../styles/stack";
import { breakpoints } from "../../styles/_globals";
import GameCard from "./GameCard";
import { GameHeading } from "./GameCardStyled";

const GameBoard = ({
  round,
  setRound,
  gameBg,
  currentRound,
  gameCardRefs,
  isMemoryGamePlayed,
  setIsMemoryGamePlayed,
  flipCard,
  compare,
  setWins,
  isLightTheme,
  welcomeRef,
  flippedCards,
  setFlippedCards,
  flippedResults,
  setFlippedResults,
}) => {
  const [progress, setProgress] = useState(0);
  const { width } = useWindowSize();
  const cardContainerRef = useRef<HTMLDivElement>();
  const [cardContainerHeight, setCardContainerHeight] = useState(
    cardContainerRef?.current?.getBoundingClientRect().height
  );
  const [cardSize, setCardSize] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const headingColor = round === 1 ? "blue-2" : round === 2 ? "pink" : "green";

  const resetGame = () => {
    welcomeRef.current.classList.remove("split-screen");
    setRound(1);
    setWins(0);
    flippedCards.forEach((card: ICard) =>
      card.domEl.classList.remove("flip-card-y")
    );
    flippedResults.forEach((card: HTMLDivElement) =>
      card.classList.remove("flip-card-x")
    );
    setFlippedCards(() => []);
    setFlippedResults(() => []);
    setIsMemoryGamePlayed(false);
    // shuffle cards again
  };

  useEffect(() => {
    if (cardContainerRef.current) {
      setCardContainerHeight(
        () => cardContainerRef?.current?.getBoundingClientRect().height
      );
    }
  }, []);

  // useEffect(() => {
  //   if (cardContainerHeight && cardContainerRef.current) {
  //     setMinHeight(
  //       width > breakpoints.mdNumber
  //         ? cardContainerHeight + 30
  //         : cardContainerHeight + 40
  //     );
  //   }
  // }, [cardContainerHeight, cardContainerRef.current]);

  useEffect(() => {
    if (cardContainerRef.current) {
      setMinHeight(() =>
        width > breakpoints.mdNumber
          ? cardContainerHeight + 30
          : cardContainerHeight + 40
      );
    }
  }, [width, cardContainerRef.current]);

  useEffect(() => {
    if (isMemoryGamePlayed && cardContainerRef.current) {
      setCardSize(() =>
        width > breakpoints.mdNumber
          ? (cardContainerHeight - 30) / 3
          : (cardContainerHeight - 40) / 4
      );

      if (flippedCards.length > 0) {
        flippedCards.forEach((card) => {
          card.domEl.classList.add("flip-card-y");
        });
      }
    }
  }, [width, isMemoryGamePlayed, cardContainerRef.current, flippedCards]);

  return (
    <>
      {isMemoryGamePlayed ? (
        <div style={{ position: "relative" }}>
          <GameHeading fontSize={3} fontWeight={700} color={headingColor}>
            Round {round}
          </GameHeading>
          <CardContainer ref={cardContainerRef} minHeight={minHeight}>
            {/* bg={gameBg} */}
            {currentRound.map((card: ICardElement, i: number) => {
              return (
                <GameCard
                  key={i + 1}
                  ref={(el) =>
                    (gameCardRefs.current = [...gameCardRefs.current, el])
                  }
                  // height="var(--memory-card-size)"
                  // width="var(--memory-card-size)"
                  height={cardSize}
                  width={cardSize}
                  cardName={card.name}
                  round={round}
                  isGamePlayed={isMemoryGamePlayed}
                  isLightTheme={isLightTheme}
                  onClick={() => {
                    flipCard(gameCardRefs, i);
                    compare();
                  }}
                >
                  <div style={{ height: "100%", width: "100%" }}>
                    {card.jsx}
                  </div>
                </GameCard>
              );
            })}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                transform: "translate(10%, 100%)",
              }}
            >
              <button onClick={resetGame}>
                <span
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: `${isLightTheme ? "black" : "white"}`,
                  }}
                >
                  [ x ] exit game
                </span>
              </button>
            </div>
          </CardContainer>
        </div>
      ) : null}
    </>
  );
};

export default GameBoard;
