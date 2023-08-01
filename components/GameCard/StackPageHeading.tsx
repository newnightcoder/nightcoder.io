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
      <GameHeading fontSize={6} color={"blue"} shadow={true}>
        Languages & tools i'm using
      </GameHeading>
      <SubHeader>
        <span
          style={{
            margin: 0,
            display: "block",
            textAlign: "left",
            // border: "1px solid white",
          }}
        >
          A overview of the technologies i’m familiar with or using regularly.
        </span>
        {/* <br /> */}
        <span
          style={{
            margin: 0,
            display: "block",
            textAlign: "left",
            // border: "1px solid white",
          }}
        >
          Ecosystems keep evolving non stop so i keep myself updated as much as
          possible.
        </span>
      </SubHeader>
      <CloseBtn onClick={() => backToGame()}>
        <CloseBtnSpan>[ x ]</CloseBtnSpan>
      </CloseBtn>
    </StackPageHeader>
  );
};

export default StackPageHeading;
