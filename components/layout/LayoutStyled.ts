import styled from "styled-components";

const LayoutContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: var(--navbar-height) minmax(
      calc(100vh - var(--navbar-height)),
      max-content
    );
`;

const Main = styled.div`
  grid-row: 2;
  height: 100%;
  width: 100%;
`;

export { LayoutContainer, Main };
