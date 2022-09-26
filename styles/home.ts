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

const Container = styled.div`
  color: var(--text-dark);
  border: 2px solid red;
`;

const AnimationContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: translateY(4rem);
`;

export { PageContainer, Container, AnimationContainer };
