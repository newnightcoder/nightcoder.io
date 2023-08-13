import { GameHeading } from "./GameCardStyled";
import { StackPageHeader, SubHeader, SubHeaderSpan } from "./ResultsStyled";

const StackPageHeading = () => {
  return (
    <StackPageHeader>
      <GameHeading fontSize={6} color={"blue"} shadow={true}>
        Languages & tools i'm using
      </GameHeading>
      <SubHeader>
        <SubHeaderSpan>
          A overview of the technologies i’m familiar with or using regularly.
        </SubHeaderSpan>
        <SubHeaderSpan>
          Ecosystems keep evolving non stop so i keep myself updated as much as
          possible.
        </SubHeaderSpan>
      </SubHeader>
    </StackPageHeader>
  );
};

export default StackPageHeading;
