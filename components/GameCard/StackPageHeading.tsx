import { GameHeading } from "./GameCardStyled";
import {
  CloseBtn,
  CloseBtnSpan,
  StackPageHeader,
  SubHeader,
} from "./ResultsStyled";

const StackPageHeading = ({ backToGame }) => {
  return (
    <StackPageHeader>
      <GameHeading fontSize={4} color={"orange"} shadow={true}>
        Languages & tools i'm using
      </GameHeading>
      <SubHeader>
        A overview of the technologies i’m familiar with or using regularly.
        <br />
        Ecosystems keep evolving non stop so i keep myself updated as much as
        possible.
      </SubHeader>
      <CloseBtn onClick={() => backToGame()}>
        <CloseBtnSpan>[ x ]</CloseBtnSpan>
      </CloseBtn>
    </StackPageHeader>
  );
};

export default StackPageHeading;
