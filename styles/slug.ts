import styled from "styled-components";

interface Props {
  bgColor?: string;
  translateY?: number;
}

const ProjectPage = styled.div<Props>`
  padding-top: calc(var(--navbar-height) + 60px);
  padding-bottom: 50px;
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
  padding: 1vh 5px;
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
  // background: black;
  color: rgb(245, 245, 245);
  color: black;
  // border: 1px solid rgba(0, 0, 0, 0.15);
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
};
