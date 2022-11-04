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
  font-weight: 700;
  font-size: 4.75vw;
  // font-size: 46px;
`;

const Hero = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 700;
  font-size: 4.75vw;
  // font-size: 46px;
`;

const Gradient = styled.span`
-webkit-
`;

const AnimationContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: translateY(4rem);
`;

export { PageContainer, HomeSection, Header, Hero, AnimationContainer };
