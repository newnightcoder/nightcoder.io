import {
  BtnContainer,
  ChoiceBtn,
  GameTitleContainer,
} from "../../styles/stack";

const GameTitle = ({ welcomeRef, skipGame }) => {
  return (
    <GameTitleContainer ref={welcomeRef}>
      welcome to <br />
      memory game
      <br /> stack edition
      <BtnContainer>
        <ChoiceBtn
          onClick={() => welcomeRef.current.classList.add("split-screen")}
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
  );
};

export default GameTitle;
