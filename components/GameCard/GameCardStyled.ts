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
  fontWeight?: number;
  color?: string;
  shadow?: boolean;
  round?: number;
  isResult?: boolean;
  isWelcomeTitle?: boolean;
}

const GameBoardContainer = styled.div`
  background: ${({ theme }) => theme.bg.home};
`;

const Card = styled.div<CardProps>`
  height: ${(props) => props.height}${(props) => (props.isResult ? "" : "px")};
  width: ${(props) => props.width}${(props) => (props.isResult ? "" : "px")};
  // height: ${(props) => props.height}px;
  // width: ${(props) => props.width}px;
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
  transform: ${(props) =>
    props.isResult && !props.isGamePlayed ? "rotateX(180deg)" : "none"};
  border-radius: ${(props) => (props.isResult ? "0px" : "7px")};
  border-image: ${(props) =>
    props.isResult
      ? "var(--gradient-blue) 1"
      : "linear-gradient(to right, transparent, transparent)"};
  border-width: 1px;
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
    font-size: 12vh;
    // font-size: 5rem;
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

const GameHeading = styled.h1<HeadingProps>`
  position: relative;
  font-weight: ${(props) => (props.isWelcomeTitle ? "" : props.fontWeight)};
  font-style: ${(props) => (props.isWelcomeTitle ? "" : "italic")};
  font-size: ${(props) => props.fontSize}vw;
  font-family: ${(props) =>
    props.isWelcomeTitle ? "var(--banger)" : "var(--poppins)"};
  text-transform: uppercase;
  width: ${(props) =>
    props.isWelcomeTitle || props.isResult ? "auto" : "100%"};
  padding: 0 20px;
  text-align: center;
  white-space: nowrap;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${(props) => `var(--gradient-${props.color})`};
  filter: ${(props) =>
    props.shadow ? "drop-shadow(-4px 2px 4px rgba(255, 255, 255, 0.5))" : ""};
  margin: 0;
  // border: 1px solid red;

  &::before {
    content: "${(props) => (props.isWelcomeTitle ? "Welcome to" : "")}";
    position: absolute;
    top: 0;
    left: 50%;
    font-family: var(--poppins);
    font-weight: 100;
    font-size: 4.5vw;
    white-space: nowrap;
    background-clip: none;
    -webkit-background-clip: none;
    -webkit-text-fill-color: ${({ theme }) => theme.color};
    text-transform: none;
    transform: translate(-40%, -100%);
    // border: 1px solid red;
  }
  &::after {
    content: "${(props) => (props.isWelcomeTitle ? "code edition" : "")}";
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-10px, 60%);
    padding: 2px 10px;
    font-family: "Courier New", "Courier6", "monospace", sans-serif;
    font-size: 1.75vw;
    font-weight: normal;
    white-space: nowrap;
    background-clip: none;
    -webkit-background-clip: none;
    -webkit-text-fill-color: #f5f5f5;
    background: ${(props) => (props.isWelcomeTitle ? "#555" : "none")};
    border: ${(props) =>
      props.isWelcomeTitle ? `1px dashed ${props.theme.color}` : "none"};
    text-transform: none;
    border-radius: 5px;
    // border: 1px solid red;
  }
`;

const ExitBtnContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(10%, 100%);
`;

const ExitBtnContent = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;

export {
  GameBoardContainer,
  Card,
  CardInner,
  CardFront,
  CardBack,
  GameHeading,
  ExitBtnContainer,
  ExitBtnContent,
};
