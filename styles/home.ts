import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100%;
  width: 100%;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

const HomeSection = styled.div`
  height: 100vh;
  width: inherit;
  position: relative;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  border: 2px solid green;
  font-family: var(--poppins);
`;

const Header = styled.header`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 800;
  font-size: 4.75vw;
  // font-size: 46px;
`;

const Hero = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
  // font-weight: 700;
  // font-size: 4.75vw;
`;

const Span = styled.span`
  white-space: nowrap;
`;

const GradientBlue = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #007cf0, #00dfd8);
`;

const GradientYellow = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #ff4d4d, #e1b106);
`;

const AnimationContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: translateY(4rem);
`;

export {
  PageContainer,
  HomeSection,
  Header,
  Span,
  Hero,
  GradientBlue,
  GradientYellow,
  AnimationContainer,
};
