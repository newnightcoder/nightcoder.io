import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
import { CardContainer } from "../../styles/stack";
import { breakpoints } from "../../styles/_globals";
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
  const { height, width } = useWindowSize();
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const gameCardRefs = useRef<HTMLDivElement[]>([]);

  const [cardContainerHeight, setCardContainerHeight] = useState(0);
  const [cardSize, setCardSize] = useState(0);
  const [minHeight, setMinHeight] = useState(0);

  const headingColor = round === 1 ? "blue-2" : round === 2 ? "pink" : "green";

  // 1- get size of the cards container
  useEffect(() => {
    if (cardContainerRef.current) {
      console.log(
        "cardContainer height =",
        cardContainerRef.current.getBoundingClientRect().height
      );
      setCardContainerHeight(
        cardContainerRef.current.getBoundingClientRect().height
      );
    }
  }, [height, width]);

  // 2- setCardsize according to container size + responsive
  useEffect(() => {
    if (cardContainerHeight) {
      if (width > breakpoints.mdNumber) {
        setCardSize((cardContainerHeight - 30) / 3);
      } else setCardSize((cardContainerHeight - 30) / 4);
    }
  }, [cardContainerHeight, width, breakpoints.mdNumber]);

  useEffect(() => {
    console.log("cardsPack", cardsPacks);
  }, [cardsPacks]);

  useEffect(() => {
    if (flippedCards.length > 0) {
      flippedCards.forEach((card) => {
        card.domEl.classList.add("flip-card-y");
      });
    }
  }, [flippedCards, cardSize]);

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
            cardSize && (
              <GameCard
                key={i + 1}
                ref={(el) => (gameCardRefs.current[i] = el)}
                height={cardSize}
                width={cardSize}
                cardName={card.name}
                round={round}
                onClick={() => {
                  flipCard(gameCardRefs, i);
                  compare();
                }}
              >
                <div style={{ height: "100%", width: "100%" }}>{card.jsx}</div>
              </GameCard>
            )
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
