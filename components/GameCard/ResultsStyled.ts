import styled from "styled-components";

interface Props {
  displayResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  wins?: number;
  progress?: number;
}

const ResultContainer = styled.div<Props>`
  position: fixed;
  inset: 0;
  top: var(--navbar-height);
  width: 100%;
  height: 100%;
  padding-top: ${(props) => (props.isGamePlayed ? "" : "2rem")};
  padding-bottom: var(--navbar-height);
  z-index: 2000;
  display: grid;
  grid-template-rows: ${(props) =>
      props.isGamePlayed ? "150px" : "max-content"} 1fr;
  clip-path: ${(props) =>
    props.displayResult
      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"};
  visibility: ${(props) => (props.displayResult ? "visible" : "hidden")};
  transition: ${(props) => (props.isGamePlayed ? "none" : "all 500ms")};
  background: ${(props) =>
    props.isGamePlayed && props.wins < 18
      ? "rgba(10, 10, 10, 0.95)"
      : "rgba(10, 10, 10, 1)"}; // #222
  font-family: var(--poppins);
  overflow: scroll;
  scroll-behaviour: smooth;
  border: 4px solid yellow;
`;

const CircleSvg = styled.svg`
  height: 150px;
  width: 150px;
`;

const ProgressCircle = styled.circle<Props>`
  stroke-width: 10;
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
  z-index: 1500;
`;

const CloseBtnSpan = styled.span`
  color: white;
  pointer-events: none;
  font-size: 1rem;
  font-weight: 100;
`;

const GameResultsHeader = styled.div<Props>`
  grid-row: 1;
  position: fixed;
  inset: 0;
  top: var(--navbar-height);
  width: 100%;
  height: 150px;
  z-index: 1000;
  background: ${(props) =>
    props.wins < 18 ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 1)"};
  padding: 0 5vw;
  display: flex;
  // display: none;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid white;
`;

const StackPageHeader = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
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
  grid-row: 2;
  position: relative;
  // top: 8rem;
  display: flex;
  flex-direction: var(--stack-table-flex-direction);
  flex-wrap: wrap;
  justify-content: center;
  align-items: var(--stack-table-align-items);
  gap: 20px;
  // width: 100%;
  // max-width: 1100px;
  padding: 0 5vw;
  border: 2px solid red;
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
