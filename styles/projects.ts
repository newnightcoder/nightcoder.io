import styled from "styled-components";

const ProjectsContainer = styled.div`
  height: max-content;
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding: 0 5vw;
  display: flex;
  justify-content: center;
  border: 10px solid yellow;
`;

interface Props {
  zIndex?: number;
}

const ImgContainer = styled.div`
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  height: var(--project-img-height);
  width: var(--project-img-width);
  z-index: 1;
  transform: translateX(5vmax);
  border: 4px solid red;
  overflow: hidden;
`;

const ImgWrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 500ms;
  background: green;
  border: 2px solid green;
  position: absolute;
  inset: 0;
  z-index: ${(props) => props.zIndex};
`;

const ProjectList = styled.div`
  height: max-content;
  width: max-content;
  max-width: 400px;
  overflow-wrap: break-word;
  // word-break: break-word;
  font-family: var(--poppins);
  font-size: 18vmin;
  font-weight: 600;
  position: relative;
  right: 0;
  z-index: 100;
  border: 1px solid pink;
`;

const ProjectTitle = styled.a<Props>`
  position: relative;
  cursor: pointer;
  color: transparent;
  text-stroke: 0.01em white;
  -webkit-text-stroke: 0.01em white;
  transition: all 300ms;
  &:hover {
    color: white;
  }
`;

export {
  ImgContainer,
  ImgWrapper,
  ProjectsContainer,
  ProjectList,
  ProjectTitle,
};
