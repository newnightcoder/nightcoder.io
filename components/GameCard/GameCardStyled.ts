import styled from "styled-components";

interface CardProps {
  height?: string;
  width?: string;
  isResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  round?: number;
}

interface HeadingProps {
  fontSize?: number;
  color?: string;
  shadow?: boolean;
}

const Card = styled.div<CardProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: ${(props) => (props.isGamePlayed ? "pointer" : "default")};
  background-color: transparent;
  perspective: 1000px;
  // border-radius: ${(props) => (props.isResult ? "7px" : "none")};
  margin-bottom: ${(props) => (props.isResult ? "10px" : "none")};
  border: 1px solid transparent;
`;

const CardInner = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 500ms;
  transform-style: preserve-3d;
  transform: ${(props) => (!props.isGamePlayed ? "rotateX(180deg)" : "none")};
  border-image: ${(props) =>
    props.isResult ? "var(--gradient-blue) 1" : "var(--gradient-orange) 1"};
  border-width: 1px;
  border-style: solid;
  // border-radius: ${(props) => (props.isResult ? "7px" : "none")};
`;

const CardFront = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${(props) =>
    props.isResult ? "var(--gradient-blue)" : "var(--gradient-orange)"};
  backface-visibility: hidden;
  border: ${(props) => (props.isResult ? "1px solid transparent" : "none")};
  // border-radius: ${(props) => (props.isResult ? "7px" : "none")};
  &::after {
    content: "${(props) =>
      props.round === 1
        ? "\\01F9E0"
        : props.round === 2
        ? "\\01F441"
        : props.round === 3
        ? "\\01F680"
        : ""}";
    display: ${(props) => (props.isResult ? "none" : "")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    // font-family: var(--poppins);
    // font-weight: 500;
    // color: #222;
    // text-align: center;
  }
`;

const CardBack = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  padding: ${(props) => (props.isResult ? "5px" : "0")};
  backface-visibility: hidden;
  background: ${(props) => (props.isGamePlayed ? "black" : "transparent")};
  transform: ${(props) =>
    props.isResult ? "rotateX(180deg)" : "rotateY(180deg)"};
  // border-radius: ${(props) => (props.isResult ? "7px" : "none")};
`;
// border: ${(props) =>
//   props.isGamePlayed && props.isResult
//     ? "1px solid rgba(255, 255, 255, 0.7)"
//     : props.isResult
//     ? "1px solid rgba(255, 255, 255, 0.2)"
//     : "none"};

const GameHeading = styled.h1<HeadingProps>`
  font-weight: 700;
  font-style: italic;
  font-size: ${(props) => props.fontSize}rem;
  font-family: var(--poppins);
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${(props) => `var(--gradient-${props.color})`};
  filter: ${(props) =>
    props.shadow ? "drop-shadow(-4px 2px 4px rgba(255, 255, 255, 0.5))" : ""};
  margin: 0;
`;

export { Card, CardInner, CardFront, CardBack, GameHeading };
