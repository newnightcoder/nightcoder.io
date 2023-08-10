import styled from "styled-components";

interface Props {
  displayResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  wins?: number;
  progress?: number;
}

const ResultContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // justify-content: center;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  top: var(--navbar-height);
  padding-top: ${(props) => (props.isGamePlayed ? "2rem" : "3rem")};
  padding-bottom: var(--navbar-height);
  z-index: ${(props) => (props.displayResult ? 50 : -1)};
  opacity: ${(props) => (props.displayResult ? 1 : 0)};
  visibility: ${(props) => (props.displayResult ? "visible" : "hidden")};
  z-index: 1000;
  transition: ${(props) => (props.isGamePlayed ? "none" : "opacity 500ms")};
  background: ${(props) =>
    props.isGamePlayed && props.wins < 18
      ? "rgba(10, 10, 10, 0.95)"
      : "rgba(10, 10, 10, 1)"}; // #222
  font-family: var(--poppins);
  overflow: scroll;
  scroll-behaviour: smooth;
  // border: 2px solid red;
`;

const CircleSvg = styled.svg`
  height: 150px;
  width: 150px;
  // border: 1px solid red;
`;

const ProgressCircle = styled.circle<Props>`
  stroke-width: 10;
  // stroke: yellow;
  fill: none;
  cx: 75;
  cy: 75;
  r: 60;
  stroke-dasharray: 18;
  stroke-dashoffset: ${(props) =>
    props.progress === -1 ? 18 : 18 - props.progress};
  transition: stroke-dashoffset 500ms;
  transition-delay: 200ms;
`;

const ResultCardContainer = styled.div`
  display: flex;
  width: 100%;
  // border: 2px solid blue;
`;

const LogoWrapper = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const TechNameWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.1rem;
`;

const CloseBtn = styled.button`
  position: fixed;
  top: calc(var(--navbar-height) + 20px);
  right: 2vw;
`;

const CloseBtnSpan = styled.span`
  color: white;
  pointer-events: none;
  font-size: 1rem;
  font-weight: 100;
`;

const GameResultsHeader = styled.div`
  width: 100%;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid white;
`;

const StackPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeader = styled.div`
  font-size: 1rem;
  font-style: italic;
  width: 100%;
  margin-top: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid white;
`;

const SubHeaderSpan = styled.span`
  text-align: left;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: var(--stack-table-flex-direction);
  flex-wrap: wrap;
  justify-content: center;
  align-items: var(--stack-table-align-items);
  gap: 20px;
  width: 100%;
  // max-width: 1100px;
  padding: 0 5vw;
  // border: 1px solid white;
`;

const TableColumn = styled.div`
  width: var(--stack-column-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid pink;
`;

export {
  ResultContainer,
  ResultCardContainer,
  LogoWrapper,
  TechNameWrapper,
  CloseBtn,
  CloseBtnSpan,
  GameResultsHeader,
  StackPageHeader,
  SubHeader,
  SubHeaderSpan,
  TableContainer,
  TableColumn,
  CircleSvg,
  ProgressCircle,
};
