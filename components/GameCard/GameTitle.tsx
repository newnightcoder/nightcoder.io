import { forwardRef, useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import {
  BtnContainer,
  ChoiceBtn,
  GameTitleContainer,
} from "../../styles/stack";
import { GameHeading } from "./GameCardStyled";

interface Props {
  handlePlay: () => void;
  skipGame: () => void;
}

const GameTitle = forwardRef<HTMLDivElement, Props>(
  ({ handlePlay, skipGame }, ref) => {
    const { isMemoryGamePlayed, setIsMemoryGamePlayed } =
      useContext(TransitionContext);

    // useEffect(() => {
    //   if (isMemoryGamePlayed) {
    //     welcomeRef.current.classList.add("split-screen");
    //   }
    // }, [isMemoryGamePlayed]);

    // useEffect(() => {
    //   // Add the "split-screen" class when the game starts
    //   if (isMemoryGamePlayed) {
    //     welcomeRef.current.classList.add("split-screen");
    //   } else {
    //     welcomeRef.current.classList.remove("split-screen");
    //   }
    // }, [isMemoryGamePlayed]);

    return (
      <GameTitleContainer ref={ref}>
        <GameHeading
          isWelcomeTitle={true}
          color={"orange"}
          shadow={false}
          fontSize={10}
        >
          memory game
        </GameHeading>
        <BtnContainer>
          <ChoiceBtn onClick={handlePlay}>
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
  }
);

export default GameTitle;
