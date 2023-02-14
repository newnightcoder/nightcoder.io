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
  // min-height: calc(100vh - var(--navbar-height));
  min-height: max-content;
  width: 100%;
  padding: 4vh 1vw;
  display: grid;
  grid-template-columns: var(--stack-columns);
  grid-template-rows: var(--stack-rows);
  grid-gap: 10px;
  align-content: center;
  justify-content: center;
  // border: 2px solid red;
`;

interface Props {
  displayResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  wins?: number;
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
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  transition: opacity 500ms;
  background: ${(props) =>
    props.isGamePlayed ? "rgba(10, 10, 10, 0.9)" : "#222"};
  font-family: var(--poppins);
  border: 2px solid red;
  overflow: scroll;
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

const CirclePgBar = styled.div<Props>`
  height: 6rem;
  width: 6rem;
  background: conic-gradient(yellow calc(80 * 1%), dimgray 0%);
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
    background: rgba(10, 10, 10, 1);
    // display: none;
  }
  &::after {
    content: "${(props) => props.wins}";
    font-size: 2rem;
    font-weight: 500;
    color: white;
    position: absolute;
  }
`;

export {
  CardContainer,
  GameTitleContainer,
  BtnContainer,
  ChoiceBtn,
  GameContainer,
  ResultContainer,
  Result,
  CirclePgBar,
};
