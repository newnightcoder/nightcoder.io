import styled from "styled-components";

const GameTitleContainer = styled.div`
  position: fixed;
  inset-x: 0;
  top: var(--navbar-height);
  z-index: 50;
  background: var(--gradient-blue);
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  text-align: center;
  border: 4px solid red;
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CardContainer = styled.div`
  min-height: calc(100vh - var(--navbar-height));
  width: max-content;
  padding: 4vh 1vw;
  display: grid;
  grid-template-columns: var(--stack-columns);
  grid-template-rows: var(--stack-rows);
  grid-gap: 10px;
  align-content: center;
  border: 2px solid red;
`;

interface Props {
  displayResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
}

const ResultContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  top: 0;
  padding-top: var(--navbar-height);
  z-index: ${(props) => (props.displayResult || !props.isGamePlayed ? 50 : -1)};
  opacity: ${(props) => (props.displayResult || !props.isGamePlayed ? 1 : 0)};
  visibility: ${(props) =>
    props.displayResult || !props.isGamePlayed ? "visible" : "hidden"};
  transition: opacity 500ms;
  background: ${(props) =>
    props.isGamePlayed ? "rgba(10, 10, 10, 0.9)" : "#222"};
  font-family: var(--poppins);
`;

const Result = styled.div<Props>`
  opacity: ${(props) => (props.isWon || !props.isGamePlayed ? 1 : 0)};
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 1.1rem;
  font-weight: 200;
  // margin-bottom: 10px;
  // text-transform: capitalize;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  // background: ${(props) => (props.isGamePlayed ? "black" : "transparent")};
  // border-radius: 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const BtnContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  width: max-content;
  height: max-content;
`;

const ChoiceBtn = styled.button`
  height: 70px;
  width: 200px;
  padding: 5px 15px;
  font-size: 1rem;
  color: white;
  background-color: black;
  margin-right: 10px;
  // border: 1px solid white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  CardContainer,
  GameTitleContainer,
  BtnContainer,
  ChoiceBtn,
  GameContainer,
  ResultContainer,
  Result,
};
