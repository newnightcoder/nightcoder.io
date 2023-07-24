import styled from "styled-components";

interface Props {
  displayResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  wins?: number;
  progress?: number;
  bg?: string;
  bgTitle?: string;
  minHeight?: number;
  cardSize?: number;
}

const GameTitleContainer = styled.div<Props>`
  position: fixed;
  inset-x: 0;
  top: var(--navbar-height);
  z-index: 50;
  background: url("${(props) => props.bgTitle}") no-repeat center/cover;
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 4rem;
  text-align: center;
  // border: 4px solid red;
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CardContainer = styled.div<Props>`
  height: 75vh;
  // min-height: calc((${(props) => props.cardSize}px + 30px) * 3);
  min-height: ${(props) => props.minHeight}px;
  width: 100vw;
  background: url(${(props) => props.bg}) no-repeat center/cover;
  position: relative;
  padding: 10px 1vw;
  display: grid;
  grid-template-columns: var(--memory-cards-columns);
  grid-template-rows: var(--memory-cards-rows);
  grid-gap: 10px;
  align-content: center;
  justify-content: center;
  border: 2px solid red;
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
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export {
  CardContainer,
  GameTitleContainer,
  BtnContainer,
  ChoiceBtn,
  GameContainer,
  Result,
};
