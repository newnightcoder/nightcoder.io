import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { useWindowSize } from "../../hooks";
import useCardGame, { ICard, ICardElement } from "../../hooks/useCardGame";
import { CardContainer } from "../../styles/stack";
import GameCard from "./GameCard";
import {
  ExitBtnContainer,
  ExitBtnContent,
  GameBoardContainer,
  GameHeading,
} from "./GameCardStyled";

const GameBoard = ({
  wins,
  flipCard,
  compare,
  setWins,
  flippedCards,
  setFlippedCards,
  flippedResults,
  setFlippedResults,
}) => {
  const { cardsPacks } = useCardGame();
  const [round, setRound] = useState(1);
  const { width } = useWindowSize();
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const gameCardRefs = useRef<HTMLDivElement[]>([]);

  const [cardContainerHeight, setCardContainerHeight] = useState(
    cardContainerRef?.current?.getBoundingClientRect().height
  );
  const [cardSize, setCardSize] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const { setIsMemoryGamePlayed, isLightTheme, setDisplayMemoryGameResult } =
    useContext(TransitionContext);

  const headingColor = round === 1 ? "blue-2" : round === 2 ? "pink" : "green";

  const resetGame = () => {
    setIsMemoryGamePlayed(false);
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
    console.log("cardsPack", cardsPacks);
  }, [cardsPacks]);

  useEffect(() => {
    if (flippedCards.length > 0) {
      flippedCards.forEach((card) => {
        card.domEl.classList.add("flip-card-y");
      });
    }
  }, [flippedCards]);

  const handleRounds = useCallback(() => {
    if (wins === 18) return;
    if (wins % 6 === 0) {
      setTimeout(() => {
        setRound((prevRound) => prevRound + 1);
        setFlippedCards([]);
        gameCardRefs?.current.forEach((ref) => {
          ref?.classList.remove("flip-card-y");
        });
      }, 500);
    }
  }, [wins]);

  useEffect(() => {
    // setDisplayMemoryGameResult(true);
    if (wins === 0) return;
    setTimeout(() => {
      setDisplayMemoryGameResult(true);
    }, 1000);
    if (wins !== 18) {
      setTimeout(() => {
        setDisplayMemoryGameResult(false);
        handleRounds();
      }, 3200);
    }
  }, [wins]);

  return (
    <GameBoardContainer>
      <GameHeading fontSize={3} fontWeight={700} color={headingColor}>
        Round {round}
      </GameHeading>
      <CardContainer ref={cardContainerRef} minHeight={minHeight}>
        {cardsPacks[round - 1]?.map((card: ICardElement, i: number) => {
          return (
            <GameCard
              key={i + 1}
              ref={(el) => (gameCardRefs.current[i] = el)}
              height="var(--memory-card-size)"
              width="var(--memory-card-size)"
              // height={cardSize}
              // width={cardSize}
              cardName={card.name}
              round={round}
              onClick={() => {
                flipCard(gameCardRefs, i);
                compare();
              }}
            >
              <div style={{ height: "100%", width: "100%" }}>{card.jsx}</div>
            </GameCard>
          );
        })}
        <ExitBtnContainer>
          <button onClick={resetGame}>
            <ExitBtnContent>[ x ] exit game</ExitBtnContent>
          </button>
        </ExitBtnContainer>
      </CardContainer>
    </GameBoardContainer>
  );
};

export default GameBoard;
