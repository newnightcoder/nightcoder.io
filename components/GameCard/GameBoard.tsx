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
  const cardContainerHeight =
    cardContainerRef?.current?.getBoundingClientRect().height;
  const [cardSize, setCardSize] = useState(0);
  const headingColor = round === 1 ? "blue" : round === 2 ? "pink" : "green";

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
    // shuffle cards again
  };

  useEffect(() => {
    if (cardContainerRef.current) {
      setCardSize(() =>
        width > breakpoints.mdNumber
          ? (cardContainerHeight - 30) / 3
          : (cardContainerHeight - 40) / 4
      );
    }
  }, [width, cardContainerRef.current]);

  return (
    <div style={{ position: "relative" }}>
      <GameHeading fontSize={3} color={headingColor}>
        Round {round}
      </GameHeading>
      <CardContainer ref={cardContainerRef} bg={gameBg}>
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
              <div style={{ height: "100%", width: "100%" }}>{card.jsx}</div>
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
  );
};

export default GameBoard;
