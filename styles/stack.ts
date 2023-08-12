import styled from "styled-components";
import { breakpoints } from "./_globals";

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
  background: ${({ theme }) => theme.bg.home};
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 4rem;
  text-align: center;
  transition: visibility 0s 2000ms;
  z-index: 50;
  animation: ${(props) =>
    props.isGamePlayed ? "split 2000ms ease-in forwards" : "none"};
  @keyframes split {
    0% {
      clip-path: polygon(
        0% 100%,
        50% 100%,
        100% 100%,
        100% 0,
        0% 0,
        0% 50%,
        100% 50%,
        100% 50%,
        50% 50%,
        0% 50%
      );
    }
    100% {
      clip-path: polygon(
        0% 100%,
        50% 100%,
        100% 100%,
        100% 0,
        0% 0,
        0% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }
  }
  @media screen and (min-width: ${breakpoints.md}) {
    @keyframes split {
      0% {
        clip-path: polygon(
          0% 0%,
          0% 100%,
          50% 100%,
          50% 0,
          50% 0,
          50% 50%,
          50% 50%,
          50% 100%,
          100% 100%,
          100% 0%
        );
      }
      100% {
        clip-path: polygon(
          0% 0%,
          0% 100%,
          0% 100%,
          0% 0,
          100% 0,
          100% 50%,
          100% 50%,
          100% 100%,
          100% 100%,
          100% 0%
        );
      }
    }
  }
  // border: 4px solid red;
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CardContainer = styled.div<Props>`
  height: 75vh;
  // min-height: calc((${(props) => props.cardSize}px + 30px) * 3);
  // min-height: ${(props) => props.minHeight}px;
  width: 100vw;
  // background: url(${(props) => props.bg}) no-repeat center/cover;
  position: relative;
  padding: 10px 1vw;
  display: grid;
  grid-template-columns: var(--memory-cards-columns);
  grid-template-rows: var(--memory-cards-rows);
  grid-gap: var(--memory-cards-gap);
  align-content: center;
  justify-content: center;
  border: 2px solid red;
`;

const BtnContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  width: max-content;
  height: max-content;
`;

const ChoiceBtn = styled.button<Props>`
  height: 70px;
  width: 200px;
  padding: 5px 15px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg.home};
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  &:hover {
    color: ${({ theme }) => theme.bg.home};
    background-color: ${({ theme }) => theme.color};
  }
`;

export {
  CardContainer,
  GameTitleContainer,
  BtnContainer,
  ChoiceBtn,
  GameContainer,
};
