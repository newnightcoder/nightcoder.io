import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid red;
`;

const HomeSection = styled.div`
  height: 100vh;
  width: inherit;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  border: 5px solid green;
  font-family: var(--poppins);
  z-index: 10;
  pointer-events: none;
  position: relative;
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
  border: 2px solid yellow;
`;

const MoreBtn = styled.button`
  font-size: 1.5rem;
  padding: 5px 20px;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 30px;
  position: absolute;
  bottom: 2rem;
`;

const Header = styled.header`
  width: var(--header-width);
  display: flex;
  flex-direction: column;
  align-items: var(--align-header);
  justify-content: center;
  font-weight: 800;
  font-size: var(--fontsize-header);
  line-height: 4.25rem;
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
  Section,
  MoreBtn,
  Header,
  Span,
  Hero,
  GradientBlue,
  GradientYellow,
  AnimationContainer,
};
