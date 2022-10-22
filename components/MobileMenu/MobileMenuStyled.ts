import styled from "styled-components";

interface Props {
  height?: number;
  width?: number;
  isMenuOpen?: boolean;
  index?: number;
}

const Container = styled.div<Props>`
  position: fixed;
  inset: 0;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  z-index: ${(props) => (props.isMenuOpen ? 2000 : -1000)};
  opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpen ? "visible" : "hidden")};
`;

const AnimationContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  will-change: transform;
  overflow-y: scroll;
  border: 2px solid blue;
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--menu-bg);
  color: var(--text-dark);
`;

const OverflowWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: calc(var(--navbar-height) + 2rem);
  overflow-y: auto;
  border: 2px solid red;
  display: grid;
  align-items: place-items-center;
`;

const BtnContainer = styled.div<Props>`
  border: 2px solid yellow;
  height: 100%;
  width: 100%;
  position: relative;
  margin: auto 0;
  padding: 0 5vw 0 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-top: 2rem;
  }
`;

const Btn = styled.button<Props>`
  position: relative;
  height: max-content;
  width: 100%;
  text-align: left;
  color: var(--text-dark);
  font-size: 2.5rem;
  padding-left: 30px;
  // border: 1px solid white;
  &::before {
    content: "0${(props) => props.index}";
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 0.75rem;
  }
  &::after {
    // content: "\\003E";
    content: ">";
    display: inline;
    position: absolute;
    top: 50%;
    right: -0rem;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
  }
`;

export {
  Container,
  AnimationContainer,
  MenuContainer,
  OverflowWrapper,
  BtnContainer,
  Btn,
};
