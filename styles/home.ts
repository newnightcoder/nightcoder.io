import styled from "styled-components";

const HomeSection = styled.div`
  height: 100vh;
  width: inherit;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-family: var(--poppins);
  z-index: 10;
  pointer-events: none;
  position: relative;
  // border: 5px solid green;
`;

const Section = styled.div`
  height: 100vh;
  width: inherit;
  position: relative;
  padding: 0 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-family: var(--poppins);
  // border: 2px solid yellow;
`;

interface Props {
  color?: string;
  bg?: string;
}

const MoreBtn = styled.button<Props>`
  width: 110px;
  height: 40px;
  overflow: hidden;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background: ${(props) =>
    `linear-gradient(${props.bg}, ${props.bg}) padding-box, var(--gradient-blue) border-box`};  */
  // border: 1px solid transparent;
  border-image: ${(props) =>
    props.color === "blue"
      ? "var(--gradient-blue) 1"
      : "var(--gradient-orange) 1"};
  border-width: 1px;
  border-style: solid;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${(props) =>
      props.color === "blue"
        ? "var(--gradient-blue)"
        : "var(--gradient-orange)"};
    z-index: 3;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform 150ms;
    pointer-events: none;
  }

  &:hover {
    &::after {
      transform: scale(1, 1);
    }
  }
`;

const BtnText = styled.span`
  z-index: 10;
  pointer-events: none;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
`;

const Header = styled.header`
  width: var(--header-width);
  display: flex;
  flex-direction: column;
  // align-items: var(--align-header);
  align-items: flex-start;
  justify-content: center;
  font-weight: 800;
  font-size: var(--fontsize-header);
  line-height: var(--line-height-header);
  z-index: 6;
  // border: 1px solid red;
`;

const Hero = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  -webkit-transform: translate3d(
    0,
    0,
    0
  ); // to make "z-index: -1" work on safari browser
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`;

const Span = styled.span`
  white-space: nowrap;
`;

const GradientBlue = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--gradient-blue);
`;

const GradientYellow = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--gradient-orange);
`;

const AnimationContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: translateY(4rem);
  border: 10px solid yellow;
`;

export {
  HomeSection,
  Section,
  MoreBtn,
  BtnText,
  Header,
  Span,
  Hero,
  GradientBlue,
  GradientYellow,
  AnimationContainer,
};
