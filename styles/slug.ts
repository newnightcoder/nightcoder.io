import styled from "styled-components";

interface Props {
  bgColor?: string;
  translateY?: number;
  animation?: string;
  showNextImg?: boolean;
}

const ProjectPage = styled.div<Props>`
  padding-top: calc(var(--navbar-height) + 60px);
  // padding-bottom: 50px;
  // background: ${(props) => props.bgColor};
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;
  position: relative;
  font-family: var(--poppins);
  display: grid;
  grid-template-columns: var(--project-columns);
  grid-template-rows: max-content;
  grid-template-areas: var(--project-areas);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  min-height: 100vh;
  width: 100%;
  color: black;
  background: rgb(245, 245, 245);
`;

const ImgContainer = styled.div`
  grid-area: img;
  height: 33vmax;
  width: 100%;
  position: relative;
`;

const BadgeContainer = styled.div`
  grid-area: shields;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  justify-content: flex-start;
  padding: 10px 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const TitleContainer = styled.div`
  grid-area: title;
  padding: 2vh 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: -2px;
  width: 100%;
  margin: 0;
`;

const UnderTitle = styled.span`
  text-transform: uppercase;
  padding-left: 5px;
  transform: translateY(-15px);
`;

const AboutTitle = styled.div`
  grid-area: about;
  width: 100%;
  height: max-content;
  padding: 1.5vh 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 3.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.125);
`;

const AboutSpan = styled.span<Props>`
  transform: ${(props) => `translateY(-${props.translateY}px)`};
`;

const DescriptionContainer = styled.div`
  grid-area: desc;
  height: auto;
  padding: 1vh 1.5vw;
  font-size: 1.25rem;
`;

const BackLink = styled.a`
  position: fixed;
  top: calc(var(--navbar-height) + 15px);
  right: 15px;
  height: 30px;
  padding: 0 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  z-index: 10;
  // color: rgb(245, 245, 245);
  // background: black;
  // border: 1px solid rgba(0, 0, 0, 0.15);
`;

const NextContainer = styled.div`
  grid-area: next;
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  // border: 2px solid red;
`;

const AnimatedSpanNext = styled.span<Props>`
  // display: block;
  position: absolute;
  // font-size: 7vw;
  font-size: 70vmin;
  height: 100%;
  // width: 55vmax;
  width: max-content;
  font-weight: 200;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  line-height: 100vh;
  // transform: scale(1, 3);
  animation: ${(props) => props.animation} 8000ms infinite linear;
  // border: 1px solid black;

  @keyframes slide1 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-120%);
    }
  }

  @keyframes slide2 {
    0% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const NextTitle = styled.a<Props>`
  position: absolute;
  font-weight: 700;
  font-size: 4rem;
  z-index: 50;
  transition: background 300ms;
  background: ${(props) =>
    props.showNextImg ? "rgb(245, 245, 245)" : "transparent"};
  // border: 2px solid green;
`;

const NextImgContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  transition: transform 500ms;
  transform: ${(props) =>
    props.showNextImg ? "translateX(0)" : "translateX(-100%)"};
  z-index: 30;
`;

export {
  ProjectPage,
  ImgContainer,
  BadgeContainer,
  TitleContainer,
  AboutTitle,
  AboutSpan,
  DescriptionContainer,
  BackLink,
  Title,
  UnderTitle,
  NextContainer,
  AnimatedSpanNext,
  NextTitle,
  NextImgContainer,
};
