import CircleProgressBar from "./CircleProgressBar";
import { GameHeading } from "./GameCardStyled";
import { GameResultsHeader } from "./ResultsStyled";

interface Props {
  progress: number;
  wins: number;
}

const GameResultsHeading = ({ progress, wins }: Props) => {
  return (
    <GameResultsHeader wins={wins}>
      <GameHeading
        fontSize={6}
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
