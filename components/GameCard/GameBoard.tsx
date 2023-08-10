import { useContext, useEffect, useRef, useState } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import { useWindowSize } from "../../hooks";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
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
  flippedCards,
  handleResultScreen,
  resetGame,
  round,
}) => {
  const { cardsPacks } = useCardGame();
  // const [round, setRound] = useState(1);
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

  useEffect(() => {
    handleResultScreen(gameCardRefs);
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
