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
}

const MoreBtn = styled.button<Props>`
  width: 110px;
  height: 40px;
  font-size: 0.75rem;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  position: absolute;
  bottom: 2rem;
  // border: 1px solid #2190ff;
  // background: #3b4662;
  // background-image: linear-gradient(135deg, #007cf0, #00dfd8);
  background: ${(props) =>
    props.color === "blue"
      ? "var(--gradient-blue)"
      : props.color === "orange"
      ? "var(--gradient-orange)"
      : "transparent"};
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
`;

export {
  HomeSection,
  Section,
  MoreBtn,
  Header,
  Span,
  Hero,
  GradientBlue,
  GradientYellow,
  AnimationContainer,
};
