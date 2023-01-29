import styled from "styled-components";

interface CardProps {
  height?: string;
  width?: string;
  isResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
}

const Card = styled.div<CardProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
  background-color: transparent;
  perspective: 1000px;
  border-radius: ${(props) => (props.isResult ? "7px" : "none")};
  margin-bottom: ${(props) => (props.isResult ? "10px" : "none")};
`;

const CardInner = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 500ms;
  transform-style: preserve-3d;
  border-radius: ${(props) => (props.isResult ? "7px" : "none")};
  // border: 1px solid transparent;
`;

const CardFront = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.65);
  backface-visibility: hidden;
  border: ${(props) => (props.isResult ? "1px solid transparent" : "none")};
  border-radius: ${(props) => (props.isResult ? "7px" : "none")};
`;

const CardBack = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  backface-visibility: hidden;
  padding: ${(props) => (props.isResult ? "5px" : "0")};
  background: ${(props) => (props.isGamePlayed ? "black" : "transparent")};
  border: ${(props) =>
    props.isGamePlayed && props.isResult
      ? "1px solid rgba(255, 255, 255, 0.7)"
      : props.isResult
      ? "1px solid rgba(255, 255, 255, 0.2)"
      : "none"};
  border-radius: ${(props) => (props.isResult ? "7px" : "none")};
  transform: ${(props) =>
    props.isResult ? "rotateX(180deg)" : "rotateY(180deg)"};
`;

export { Card, CardInner, CardFront, CardBack };
