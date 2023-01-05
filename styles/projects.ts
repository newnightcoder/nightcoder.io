import styled from "styled-components";

const ProjectsContainer = styled.div`
  height: max-content;
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding: 0 5vw;
  display: flex;
  justify-content: var(--projects-container-justify);
  // border: 10px solid yellow;
`;

interface Props {
  zIndex?: number;
}

const ImgContainer = styled.div`
  // display: var(--project-img-display);
  height: var(--project-img-height);
  width: var(--project-img-width);
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  transform: translateX(2.5vmax);
  overflow: hidden;
  z-index: 1;
  // border: 4px solid red;
`;

const ImgWrapper = styled.div<Props>`
  height: 66%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 500ms;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  z-index: ${(props) => props.zIndex};
  // border: 2px solid green;
`;

const ProjectList = styled.div`
  height: max-content;
  width: var(--project-list-width);
  // overflow-wrap: break-word;
  word-break: break-word;
  font-family: var(--poppins);
  font-size: 9vmax;
  font-weight: 600;
  // position: relative;
  // right: 0;
  z-index: 100;
  // border: 1px solid pink;
`;

const ProjectTitle = styled.a<Props>`
  position: relative;
  word-break: break-word;
  font-family: var(--poppins);
  font-size: var(--fontsize-project-list);
  font-weight: 600;
  cursor: pointer;
  color: transparent;
  text-stroke: 0.01em white;
  -webkit-text-stroke: 0.01em white;
  transition: all 300ms;
  &:hover {
    color: white;
  }
`;

const ProjectPage = styled.div`
  padding-top: var(--navbar-height);
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  color: white;
`;

export {
  ImgContainer,
  ImgWrapper,
  ProjectsContainer,
  ProjectList,
  ProjectTitle,
  ProjectPage,
};
