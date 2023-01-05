import { StaticImageData } from "next/image";
import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  backgroundWord?: string;
  backgroundImg?: StaticImageData;
}

const Container = styled.div<Props>`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  inset: 0;
  padding-top: var(--navbar-height);
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

const WordContainer = styled.div<Props>`
  height: calc(100% - var(--navbar-height));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--poppins);
  font-size: 40vmin;
  font-weight: 700;
  letter-spacing: -5px;
  line-height: 100vh;
  transform: scale(1, 3);
  text-transform: uppercase;
  color: #222;
  color: rgba(30, 30, 30, 0.9);
  opacity: 0;
  // border: 1px solid yellow;
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
