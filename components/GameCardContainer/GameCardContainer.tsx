import { PropsWithChildren, useContext, useRef } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import useCardGame, { ICardElement } from "../../hooks/useCardGame";
import { CardContainer } from "../../styles/stack";
import GameCard from "../GameCard/GameCard";

interface Props extends PropsWithChildren {
  currentRound: ICardElement[];
  // cardRefs: MutableRefObject<HTMLDivElement[]>;
  round: number;
}

const GameCardContainer = (props: Props) => {
  const {
    displayMemoryGameResult,
    setDisplayMemoryGameResult,
    isMemoryGamePlayed,
    setIsMemoryGamePlayed,
  } = useContext(TransitionContext);
  const { flipCard, compare, wins } = useCardGame();
  const cardRefs = useRef<HTMLDivElement[]>([]);

  return (
    <CardContainer>
      {props.currentRound.map((card: ICardElement, i) => {
        return (
          <GameCard
            key={i + 1}
            ref={(el) => (cardRefs.current = [...cardRefs.current, el])}
            height="var(--memory-card-size)"
            width="var(--memory-card-size)"
            cardName={card.name}
            round={props.round}
            isGamePlayed={isMemoryGamePlayed}
            onClick={() => {
              flipCard(cardRefs, i);
              compare();
            }}
          >
            <div style={{ height: "100%", width: "100%" }}>{card.jsx}</div>
          </GameCard>
        );
      })}
    </CardContainer>
  );
};

export default GameCardContainer;
