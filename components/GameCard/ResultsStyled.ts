import styled, { keyframes } from "styled-components";

interface Props {
  displayResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  wins?: number;
  progress?: number;
  key?: number;
}

const ResultContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  top: var(--navbar-height);
  padding-top: ${(props) => (props.isGamePlayed ? "2rem" : "3rem")};
  padding-bottom: var(--navbar-height);
  z-index: ${(props) => (props.displayResult || !props.isGamePlayed ? 50 : -1)};
  opacity: ${(props) => (props.displayResult || !props.isGamePlayed ? 1 : 0)};
  visibility: ${(props) =>
    props.displayResult || !props.isGamePlayed ? "visible" : "hidden"};
  // z-index: 1000;
  // opacity: 1;
  // visibility: visible;
  transition: opacity 500ms;
  background: ${(props) =>
    props.isGamePlayed && props.wins < 18
      ? "rgba(10, 10, 10, 0.9)"
      : "rgba(10, 10, 10, 1)"}; // #222
  font-family: var(--poppins);
  border: 2px solid red;
  overflow: scroll;
`;

const animateProgress = keyframes`
  from {
    background-position: 0;
  }
  to {
    background-position: 100%;
  }
`;

const CirclePgBar = styled.div<Props>`
  height: 6rem;
  width: 6rem;
  background: conic-gradient(
    yellow calc(${(props) => props.progress}%),
    dimgray 0%
  );
  transition: background 300ms linear;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  &::before {
    content: "";
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
    background: rgba(10, 10, 10, 0.9);

    display: none;
    animation: ${animateProgress} 300ms linear forwards ${(props) => props.key};
  }
  &::after {
    content: "${(props) => props.wins}";
    font-size: 2rem;
    font-weight: 500;
    color: white;
    position: absolute;
  }

  // animation: ${animateProgress} 1000ms linear forwards;
`;

const ResultCardContainer = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid blue;
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
  position: absolute;
  top: 20px;
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
`;

const StackPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeader = styled.p`
  font-size: 1rem;
  font-style: italic;
  width: max-content;
  margin-top: 0;
`;

const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  // height: max-content;
  padding: 0 5vw;
  border: 1px solid white;
`;

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
`;

export {
  ResultContainer,
  ResultCardContainer,
  LogoWrapper,
  TechNameWrapper,
  CloseBtn,
  CloseBtnSpan,
  GameResultsHeader,
  CirclePgBar,
  StackPageHeader,
  SubHeader,
  TableContainer,
  TableColumn,
};
