import { forwardRef, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import {
  BtnContainer,
  ChoiceBtn,
  GameTitleContainer,
} from "../../styles/stack";
import { GameHeading } from "./GameCardStyled";

const GameTitle = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    isMemoryGamePlayed,
    setIsMemoryGamePlayed,
    setDisplayMemoryGameResult,
  } = useContext(TransitionContext);

  const skipGame = () => {
    setDisplayMemoryGameResult(true);
    setIsMemoryGamePlayed(false);
  };

  return (
    <GameTitleContainer ref={ref} isGamePlayed={isMemoryGamePlayed}>
      <GameHeading
        isWelcomeTitle={true}
        color={"orange"}
        shadow={false}
        fontSize={10}
      >
        memory game
      </GameHeading>
      <BtnContainer>
        <ChoiceBtn onClick={() => setIsMemoryGamePlayed(true)}>
          <span style={{ fontSize: "2rem" }}>😁</span>
          <span style={{ textTransform: "uppercase", fontWeight: "700" }}>
            play
          </span>
        </ChoiceBtn>
        <ChoiceBtn onClick={skipGame}>
          <span style={{ fontSize: "2rem" }}>🤬</span>i really don't have time
          for this sh*t
        </ChoiceBtn>
      </BtnContainer>
    </GameTitleContainer>
  );
});

export default GameTitle;
