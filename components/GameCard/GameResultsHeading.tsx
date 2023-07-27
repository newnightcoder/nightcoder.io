import CircleProgressBar from "./CircleProgressBar";
import { GameHeading } from "./GameCardStyled";
import { GameResultsHeader } from "./ResultsStyled";

const GameResultsHeading = ({ progress, wins, isResult }) => {
  return (
    <GameResultsHeader>
      <GameHeading
        fontSize={5}
        fontWeight={700}
        color={"orange"}
        shadow={true}
        isResult={true}
      >
        Wins
      </GameHeading>
      <CircleProgressBar progress={progress} wins={wins} />
    </GameResultsHeader>
  );
};

export default GameResultsHeading;
