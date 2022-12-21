import styled from "styled-components";

const ProjectsContainer = styled.div`
  height: max-content;
  min-height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding: 0 5vw;
  display: flex;
  justify-content: center;
  // border: 10px solid yellow;
`;

const ImgContainer = styled.div`
  position: sticky;
  top: calc(50% - 100px);
  height: 300px;
  width: 700px;
  border: 1px solid red;
  // z-index: 10;
`;

const ProjectList = styled.div`
  height: max-content;
  width: max-content;
  max-width: 400px;
  overflow-wrap: break-word;
  // word-break: break-word;
  border: 1px solid pink;
  font-family: var(--poppins);
  font-size: 18vmin;
  font-weight: 600;
`;

export { ImgContainer, ProjectsContainer, ProjectList };
