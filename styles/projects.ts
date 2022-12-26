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

interface Props {
  clipIn?: { clip1: string; clip2: string };
  clipOut?: { clip1: string; clip2: string };
  z?: number;
  opacity?: number;
}
const ImgContainer = styled.div<Props>`
  position: fixed;
  top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
  height: 500px;
  width: 700px;
  // transition: clip-path 500ms;
  // clip-path:polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); // empty
  z-index: 1;
  border: 1px solid red;
`;
// clip-path: ${(props) =>
//   `polygon(0 ${props.clipIn.clip1}, 100% ${props.clipIn.clip2}, 100% ${props.clipOut.clip1}, 0% ${props.clipOut.clip2})`};

const ProjectList = styled.div`
  height: max-content;
  width: max-content;
  max-width: 400px;
  overflow-wrap: break-word;
  // word-break: break-word;
  font-family: var(--poppins);
  font-size: 18vmin;
  font-weight: 600;
  border: 1px solid pink;
  transform: translateX(100%);
`;

const ProjectTitle = styled.div<Props>`
  position: relative;
  cursor: pointer;
  color: transparent;
  text-stroke: 0.01em white;
  -webkit-text-stroke: 0.01em white;
  transition: color 300ms;
  // z-index: ${(props) => props.z};
  &:hover {
    color: white;
  }
`;

export { ImgContainer, ProjectsContainer, ProjectList, ProjectTitle };
