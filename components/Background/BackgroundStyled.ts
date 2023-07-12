import { StaticImageData } from "next/image";
import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  backgroundTextColor?: string;
  backgroundWord?: string;
  backgroundImg?: StaticImageData;
}

const Container = styled.div<Props>`
  // min-height: 100vh;
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  position: absolute;
  top: 0;
  // inset: 0;
  // padding-top: var(--navbar-height);
  // background: ${(props) => props.backgroundColor};
  // background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  transition: background-color 300ms;
  border: 2px solid black;
`;

const WordContainer = styled.div<Props>`
  height: calc(100vh - var(--navbar-height));
  height: 100%;
  width: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--poppins);
  font-size: 40vmin;
  font-weight: 700;
  letter-spacing: -5px;
  // line-height: 100vh;
  // transform: scale(1, 3);
  text-transform: uppercase;
  color: ${(props) => props.backgroundTextColor};
  transition: color 300ms;
  // opacity: 0;
  border: 5px solid blue;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(50%);
  animation: leftright 10s infinite alternate;
  opacity: 0;
  // @keyframes leftright {
  //   0% {
  //     transform: translateX(-50%);
  //   }
  //   100% {
  //     transform: translateX(50%);
  //   }
  // }
`;

export { Container, WordContainer, ImgContainer };
