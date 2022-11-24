import styled from "styled-components";

const LayoutContainer = styled.div`
  height: max-content;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: var(--navbar-height) minmax(
      calc(100vh - var(--navbar-height)),
      max-content
    );
  // border: 4px solid red;
`;

const Main = styled.div`
  grid-row: 2;
  height: max-content;
  width: 100%;
  // border: 4px solid green;
`;

export { LayoutContainer, Main };
