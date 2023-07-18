import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks";
import { ICard, ICardElement } from "../../hooks/useCardGame";
import { CardContainer } from "../../styles/stack";
import { breakpoints } from "../../styles/_globals";
import GameCard from "./GameCard";
import { GameHeading } from "./GameCardStyled";

const GameBoard = ({
  round,
  setRound,
  currentRound,
  gameCardRefs,
  isMemoryGamePlayed,
  flipCard,
  compare,
  wins,
  setWins,
  isLightTheme,
  welcomeRef,
  flippedCards,
  setFlippedCards,
  flippedResults,
  setFlippedResults,
}) => {
  const [progress, setProgress] = useState(0);
  const headingColor = round === 1 ? "blue" : round === 2 ? "pink" : "green";
  const { width } = useWindowSize();

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

  const updateCirclePgBar = useCallback(() => {
    const duration = 200;
    // const update = () => setProgress(() => progress + 1);
    // const pg = setInterval(update, duration);
    setProgress((prevProgress) => (prevProgress + wins * 100) / 18);
  }, [wins, progress]);

  useEffect(() => {
    updateCirclePgBar();
  }, [wins]);

  return (
    <div style={{ position: "relative" }}>
      <GameHeading fontSize={3} color={headingColor}>
        Round {round}
      </GameHeading>
      <CardContainer>
        {currentRound.map((card: ICardElement, i: number) => {
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
      </CardContainer>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform:
            width > breakpoints.mdNumber
              ? "translate(-100%, 20px)"
              : "translate(0%, 20px)",
        }}
      >
        <button onClick={resetGame}>
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              // border: `1px solid ${isLightTheme ? "black" : "white"}`,
              color: `${isLightTheme ? "black" : "white"}`,
            }}
          >
            [ x ] exit game
          </span>
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
