import CircleProgressBar from "./CircleProgressBar";
import { GameHeading } from "./GameCardStyled";
import { GameResultsHeader } from "./ResultsStyled";

const GameResultsHeading = ({ progress, wins }) => {
  return (
    <GameResultsHeader>
      <GameHeading fontSize={5} color={"orange"} shadow={true}>
        Wins
      </GameHeading>
      <CircleProgressBar progress={progress} wins={wins} />
    </GameResultsHeader>
  );
};

export default GameResultsHeading;
