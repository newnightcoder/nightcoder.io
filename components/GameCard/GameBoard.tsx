import { useCallback, useEffect, useState } from "react";
import { ICardElement } from "../../hooks/useCardGame";
import { CardContainer } from "../../styles/stack";
import GameCard from "./GameCard";
import { GameHeading } from "./GameCardStyled";
import { CirclePgBar } from "./ResultsStyled";

const GameBoard = ({
  round,
  currentRound,
  gameCardRefs,
  isMemoryGamePlayed,
  flipCard,
  compare,
  wins,
}) => {
  const headingColor = round === 1 ? "blue" : round === 2 ? "pink" : "green";

  const [progress, setProgress] = useState(0);

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
    <div>
      <GameHeading fontSize={3} color={headingColor}>
        Round {round}
      </GameHeading>
      <CirclePgBar progress={progress} wins={wins} />
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
    </div>
  );
};

export default GameBoard;
