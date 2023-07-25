import styled from "styled-components";

const ProjectsContainer = styled.div`
  height: max-content;
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-rows: var(--projects-container-rows);
  grid-template-columns: var(--projects-container-columns);
  grid-template-areas: var(--projects-container-areas);
  // place-items: center;
  column-gap: 20px;
  // border: 4px solid yellow;
`;

interface Props {
  zIndex?: number;
}

const ImgContainer = styled.div`
  height: 100%;
  position: relative;
  display: var(--project-img-display);
  align-items: center;
  justify-content: center;
  grid-area: img;
  overflow: hidden;
  z-index: 1;
  // border: 4px solid red;
`;

const ImgWrapper = styled.div<Props>`
  height: 33vmax;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 500ms;
  background: transparent;
  position: absolute;
  overflow: hidden;
  z-index: ${(props) => props.zIndex};
  // border: 2px solid green;
`;

const ProjectList = styled.div`
  // height: var(--project-list-height);
  height: 100%;
  width: 100%;
  grid-area: list;
  // word-break: break-word;
  // padding: 0 20px;
  font-family: var(--poppins);
  font-size: 9vmax;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  z-index: 100;
  // border: 1px solid pink;
`;

const ProjectTitle = styled.a<Props>`
  position: relative;
  // word-break: break-word;
  font-family: var(--poppins);
  font-size: var(--fontsize-project-list);
  font-weight: 700;
  cursor: pointer;
  color: transparent;
  text-stroke: 0.02em ${({ theme }) => theme.color};
  -webkit-text-stroke: 0.02em ${({ theme }) => theme.color};
  transition: all 300ms;
  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;

export {
  ImgContainer,
  ImgWrapper,
  ProjectsContainer,
  ProjectList,
  ProjectTitle,
};
