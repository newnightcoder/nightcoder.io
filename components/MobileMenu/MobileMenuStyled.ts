import styled from "styled-components";

interface Props {
  height?: number;
  width?: number;
  isMenuOpen?: boolean;
}

const Container = styled.div<Props>`
  position: fixed;
  inset: 0;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  z-index: ${(props) => (props.isMenuOpen ? 2000 : -1000)};
  opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpen ? "visible" : "hidden")};
  overflow: hidden;
`;

const AnimationContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  overflow: hidden;
  //////////////////////////////////////////////////////////////////////////
  // Octagon + variables to manage the clip-path animation                //
  // = 3 points on each side move and the 2 diagonal points dont move 😎 //
  /////////////////////////////////////////////////////////////////////////
  --clip-1: 100%;
  --clip-2-a: 50%;
  --clip-2-b: 50%;
  --clip-3: 100%;
  --clip-4: 0;
  --clip-5-a: 50%;
  --clip-5-b: 50%;
  --clip-6: 0;
  clip-path: polygon(
    var(--clip-2-a) var(--clip-2-b),
    var(--clip-3) 0,
    100% 0,
    100% var(--clip-6),
    var(--clip-5-a) var(--clip-5-b),
    var(--clip-4) 100%,
    0 100%,
    0 var(--clip-1)
  );
`;

const MenuContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--menu-bg);
  color: var(--text-dark);
`;

const Box2 = styled.div<Props>`
  height: 90vh;
  width: 90vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid pink;
  background: transparent;
  // transform: rotateX(-45deg);
  // transform-origin: top left;
`;
const Box3 = styled.div<Props>`
  height: 50%;
  width: 50%;
  border: 2px solid red;
  background: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, AnimationContainer, MenuContainer, Box2, Box3 };
