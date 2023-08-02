import { useContext } from "react";
import { TransitionContext } from "../../context/TransitionContext";
import {
  BtnContainer,
  ChoiceBtn,
  GameTitleContainer,
} from "../../styles/stack";
import { GameHeading } from "./GameCardStyled";

const GameTitle = ({ welcomeRef, skipGame }) => {
  const { isMemoryGamePlayed, setIsMemoryGamePlayed } =
    useContext(TransitionContext);

  // useEffect(() => {
  //   if (isMemoryGamePlayed) {
  //     welcomeRef.current.classList.add("split-screen");
  //   }
  // }, [isMemoryGamePlayed]);

  return (
    <>
      {/* {!isMemoryGamePlayed ? ( */}
      <GameTitleContainer ref={welcomeRef}>
        <GameHeading
          isWelcomeTitle={true}
          color={"orange"}
          shadow={false}
          fontSize={10}
        >
          memory game
        </GameHeading>
        <BtnContainer>
          <ChoiceBtn
            onClick={() => {
              welcomeRef.current.classList.add("split-screen");
              setIsMemoryGamePlayed((prev) => !prev);
            }}
          >
            <span style={{ fontSize: "2rem" }}>😁</span>
            <span style={{ textTransform: "uppercase", fontWeight: "700" }}>
              play
            </span>
          </ChoiceBtn>
          <ChoiceBtn onClick={() => skipGame()}>
            <span style={{ fontSize: "2rem" }}>🤬</span>i really don't have time
            for this sh*t
          </ChoiceBtn>
        </BtnContainer>
      </GameTitleContainer>
      {/* ) : null} */}
    </>
  );
};

export default GameTitle;
