import styled from "styled-components";

interface Props {
  index?: number;
}

const AnimationContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  will-change: transform;
  overflow-y: scroll;
  // border: 2px solid blue;

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
  // background: var(--menu-bg);
  background: var(--gradient-blue-2);
  color: var(--text-dark);
`;

const OverflowWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: calc(var(--navbar-height) + 2rem);
  overflow-y: auto;
  display: grid;
  align-items: place-items-center;
  // border: 2px solid red;
`;

const BtnContainer = styled.div<Props>`
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
  // border: 2px solid yellow;
`;

const Btn = styled.button<Props>`
  position: relative;
  height: max-content;
  // width: 100%;
  width: 200px;
  text-align: left;
  color: var(--text-dark);
  font-family: var(--poppins);
  font-size: 2.5rem;
  font-weight: 100;
  padding-left: 30px;
  transition: font-weight 300ms;
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
    // right: -0rem;
    right: -2rem;
    // transform: translate(-50%, -50%);
    transform: translate(0, -40%);
    font-size: 1.5rem;
  }
  &:hover {
    font-weight: 900;
  }
`;

export {
  AnimationContainer,
  MenuContainer,
  OverflowWrapper,
  BtnContainer,
  Btn,
};
