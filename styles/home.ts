import styled from "styled-components";

const PageContainer = styled.div`
  grid-row: 2;
  min-height: 100vh;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 4px solid #34d399;
`;

const Span = styled.span`
  color: var(--text-dark);
`;

const AnimationContainer = styled.span`
  visibility: hidden;
  opacity: 0;
  transform: translateY(4rem);
`;

export { PageContainer, Span, AnimationContainer };
