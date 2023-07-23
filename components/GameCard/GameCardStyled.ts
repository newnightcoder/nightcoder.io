import styled from "styled-components";

interface CardProps {
  height?: string | number;
  width?: string | number;
  isResult?: boolean;
  isWon?: boolean;
  isGamePlayed?: boolean;
  isLightTheme?: boolean;
  round?: number;
}

interface HeadingProps {
  fontSize?: number;
  color?: string;
  shadow?: boolean;
  round?: number;
  isResult?: boolean;
  isWelcomeTitle?: boolean;
}

const Card = styled.div<CardProps>`
  height: ${(props) => props.height}${(props) => (props.isResult ? "" : "px")};
  width: ${(props) => props.width}${(props) => (props.isResult ? "" : "px")};
  max-width: 350px;
  cursor: ${(props) => (props.isGamePlayed ? "pointer" : "default")};
  background-color: transparent;
  perspective: 1000px;
  border-radius: ${(props) => (props.isResult ? "7px" : "3px")};
  margin-bottom: ${(props) => (props.isResult ? "10px" : "none")};
  border-radius: ${(props) => (props.isResult ? "0px" : "7px")};
  border: 1px solid transparent;
`;

const CardInner = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 500ms;
  transform-style: preserve-3d;
  transform: ${(props) => (!props.isGamePlayed ? "rotateX(180deg)" : "none")};
  border-radius: ${(props) => (props.isResult ? "0px" : "7px")};
  border-image: ${(props) =>
    props.isResult
      ? "var(--gradient-blue) 1"
      : "linear-gradient(to right, transparent, transparent)"};
  border-width: 1px;
  // border-style: ${(props) => (props.isResult ? "solid" : "none")};
  border-style: solid;
`;

const CardFront = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${(props) =>
    props.isResult ? "var(--gradient-blue)" : "var(--gradient-orange)"};
  backface-visibility: hidden;
  border: ${(props) => (props.isResult ? "1px solid transparent" : "none")};
  border-radius: ${(props) => (props.isResult ? "0px" : "7px")};
  &::after {
    content: "${(props) =>
      props.round === 1
        ? "\\01F9E0" // 🧠
        : props.round === 2
        ? "\\01F47E" // 👾
        : props.round === 3
        ? "\\01F451" // 👑
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
  background: ${(props) =>
    props.isGamePlayed || props.isResult ? "black" : "transparent"};
  transform: ${(props) =>
    props.isResult ? "rotateX(180deg)" : "rotateY(180deg)"};
  border-radius: ${(props) => (props.isResult ? "0px" : "7px")};
  border: ${(props) =>
    props.isGamePlayed && !props.isLightTheme && !props.isResult
      ? "1px solid white"
      : "none"};
`;
// border: ${(props) =>
//   props.isGamePlayed && props.isResult
//     ? "1px solid rgba(255, 255, 255, 0.7)"
//     : props.isResult
//     ? "1px solid rgba(255, 255, 255, 0.2)"
//     : "none"};

const GameHeading = styled.h1<HeadingProps>`
  position: relative;
  font-weight: ${(props) => (props.isWelcomeTitle ? "" : "700")};
  font-style: ${(props) => (props.isWelcomeTitle ? "" : "italic")};
  font-size: ${(props) => props.fontSize}vw;
  font-family: ${(props) =>
    props.isWelcomeTitle ? "var(--banger)" : "var(--poppins)"};
  text-transform: uppercase;
  width: ${(props) =>
    props.isWelcomeTitle || props.isResult ? "max-content" : "100%"};
  padding: 0 20px;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${(props) => `var(--gradient-${props.color})`};
  filter: ${(props) =>
    props.shadow ? "drop-shadow(-4px 2px 4px rgba(255, 255, 255, 0.5))" : ""};
  margin: 0;
  &::before {
    content: "${(props) => (props.isWelcomeTitle ? "welcome to" : "")}";
    position: absolute;
    top: 0;
    left: 50%;
    font-family: var(--poppins);
    font-size: 5vw;
    white-space: nowrap;
    background-clip: none;
    -webkit-background-clip: none;
    -webkit-text-fill-color: #f5f5f5;
    text-transform: none;
    font-weight: 400;
    transform: translate(-40%, -100%);
    // border: 1px solid red;
  }
  &::after {
    content: "${(props) => (props.isWelcomeTitle ? "tech edition" : "")}";
    position: absolute;
    bottom: 0;
    //left: 0;
    right: 0;
    font-family: "courier", sans;
    font-size: 3.5vw;
    white-space: nowrap;
    background-clip: none;
    -webkit-background-clip: none;
    -webkit-text-fill-color: #f5f5f5;
    text-transform: none;
    font-weight: 400;
    transform: translate(-10px, 60%);
    // border: 1px solid red;
  }
`;

export { Card, CardInner, CardFront, CardBack, GameHeading };
