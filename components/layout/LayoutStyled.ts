import styled from "styled-components";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: var(--navbar-height) minmax(
      calc(100vh - var(--navbar-height)),
      max-content
    );
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export { LayoutContainer, PageContainer };
