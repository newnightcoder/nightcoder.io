import styled from "styled-components";

const PageContainer = styled.div`
  grid-row: 2;
  min-height: 100vh;
  color: var(--text-color-dark);
  border: 4px solid #34d399;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  visibility: hidden;
  opacity: 0;
  border: 2px solid white;
  color: var(--text-color-dark);
`;

export { PageContainer, Span };
