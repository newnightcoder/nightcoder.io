import styled from "styled-components";

const Container = styled.div`
  height: var(--navbar-height);
  width: var(--navbar-height);
  position: fixed;
  z-index: 3000;
  left: 1rem;
  border-radius: 50%;
  background: white;
  // background: black;
  // mix-blend-mode: multiply;
  // transform-style: preserve-3d;
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 50%;
  //   left: 0;
  //   transform: translateZ(-1px);
  //   display: block;
  //   height: 30%;
  //   width: 100%;
  //   // z-index: -1;
  //   background: linear-gradient(to left, #ffb906, #fb098c, #06a5ff);
  //   background-size: 400%;
  //   background-position: left;
  //   animation: move 20s infinite alternate;
  //   @keyframes move {
  //     100% {
  //       background-position: right;
  //     }
  //   }
  // }
`;

const LogoLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-light);
`;

// const BackgroundShapes = styled.span`
//   height: 15%;
//   width: 100%;
//   z-index: -1;
//   background: linear-gradient(to left, #ffb906, #fb098c, #06a5ff);
//   background-size: 400%;
//   background-position: left;
//   animation: move 20s infinite alternate;
//   @keyframes move {
//     100% {
//       background-position: right;
//     }
//   }
// `;

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, LogoContainer, LogoLink };
